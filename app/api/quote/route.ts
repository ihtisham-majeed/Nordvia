
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedProducts = [
  "hoodies",
  "t-shirts",
  "tracksuits",
  "joggers",
  "jackets",
  "coats",
  "other",
];

const productNames: Record<string, string> = {
  hoodies: "Hoodies & Sweatshirts",
  "t-shirts": "T-Shirts & Polos",
  tracksuits: "Sportswear & Tracksuits",
  joggers: "Joggers & Sweatpants",
  jackets: "Jackets",
  coats: "Coats & Outerwear",
  other: "Other Apparel",
};

const allowedExtensions = [".ai", ".pdf", ".png", ".jpg", ".jpeg"];

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;
const MAX_TOTAL_FILE_SIZE = 40 * 1024 * 1024;

type SubmittedQuoteItem = {
  id: string;
  name: string;
  code: string;
  category: string;
  categoryId?: string;
  image?: string;
  quantity: number;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}

function safe(value: unknown): string {
  return escapeHtml(
    typeof value === "string" && value.trim()
      ? value.trim()
      : "Not provided"
  );
}

function getExtension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");

  return lastDot >= 0
    ? filename.substring(lastDot).toLowerCase()
    : "";
}

function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[/\\]/g, "_")
    .replace(/[\r\n"]/g, "")
    .replace(/[^\w.\- ()]/g, "_")
    .slice(0, 180);
}

function getPlainText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateQuoteItems(value: unknown): SubmittedQuoteItem[] | null {
  if (value === undefined || value === null || value === "") {
    return [];
  }

  let parsed: unknown = value;

  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      return null;
    }
  }

  if (!Array.isArray(parsed) || parsed.length > 50) {
    return null;
  }

  const items: SubmittedQuoteItem[] = [];

  for (const item of parsed) {
    if (
      typeof item !== "object" ||
      item === null ||
      Array.isArray(item)
    ) {
      return null;
    }

    const record = item as Record<string, unknown>;

    if (
      typeof record.id !== "string" ||
      typeof record.name !== "string" ||
      typeof record.code !== "string" ||
      typeof record.category !== "string" ||
      typeof record.quantity !== "number" ||
      !Number.isInteger(record.quantity) ||
      record.quantity < 1 ||
      record.quantity > 999999
    ) {
      return null;
    }

    if (
      record.id.length > 150 ||
      record.name.length > 150 ||
      record.code.length > 100 ||
      record.category.length > 150
    ) {
      return null;
    }

    const categoryId =
      typeof record.categoryId === "string"
        ? record.categoryId
        : undefined;

    if (categoryId && categoryId.length > 100) {
      return null;
    }

    const image =
      typeof record.image === "string" &&
      record.image.startsWith("/") &&
      !record.image.startsWith("//")
        ? record.image
        : undefined;

    items.push({
      id: record.id,
      name: record.name,
      code: record.code,
      category: record.category,
      categoryId,
      image,
      quantity: record.quantity,
    });
  }

  return items;
}

function errorResponse(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let fields: Record<string, unknown> = {};
    let uploadedFiles: File[] = [];

    // ---------------------------------------------
    // READ MULTIPART FORM DATA
    // ---------------------------------------------

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      const fieldNames = [
        "fullName",
        "company",
        "email",
        "country",
        "product",
        "quantity",
        "customization",
        "timeline",
        "message",
        "website",
        "followUpOptIn",
        "products",
      ];

      for (const name of fieldNames) {
        fields[name] = formData.get(name);
      }

      const rawFiles = formData.getAll("files");

      if (rawFiles.some((value) => typeof value === "string")) {
        return errorResponse("Invalid file upload.");
      }

      uploadedFiles = rawFiles.filter(
        (value): value is File => value instanceof File
      );

      if (uploadedFiles.length !== rawFiles.length) {
        return errorResponse("Invalid file upload.");
      }
    }

    // ---------------------------------------------
    // READ JSON REQUESTS
    // ---------------------------------------------

    else if (contentType.includes("application/json")) {
      const body: unknown = await request.json();

      if (
        typeof body !== "object" ||
        body === null ||
        Array.isArray(body)
      ) {
        return errorResponse("Invalid request data.");
      }

      fields = body as Record<string, unknown>;
    } else {
      return errorResponse("Unsupported request format.", 415);
    }

    // ---------------------------------------------
    // EXTRACT FORM FIELDS
    // ---------------------------------------------

    const fullName = getPlainText(fields.fullName);
    const company = getPlainText(fields.company);
    const email = getPlainText(fields.email);
    const country = getPlainText(fields.country);
    const product = getPlainText(fields.product);
    const quantity = getPlainText(fields.quantity);
    const customization = getPlainText(fields.customization);
    const timeline = getPlainText(fields.timeline);
    const message = getPlainText(fields.message);
    const website = getPlainText(fields.website);
    const followUpOptIn = getPlainText(fields.followUpOptIn);

    // ---------------------------------------------
    // BASIC SPAM PROTECTION
    // ---------------------------------------------

    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    // ---------------------------------------------
    // REQUIRED FIELD VALIDATION
    // ---------------------------------------------

    if (
      !fullName ||
      !email ||
      !country ||
      !product ||
      !quantity ||
      !message
    ) {
      return errorResponse(
        "Please complete all required fields."
      );
    }

    // ---------------------------------------------
    // FIELD LENGTH VALIDATION
    // ---------------------------------------------

    if (
      fullName.length > 100 ||
      company.length > 150 ||
      email.length > 254 ||
      country.length > 100 ||
      quantity.length > 100 ||
      customization.length > 1000 ||
      timeline.length > 150 ||
      message.length > 5000
    ) {
      return errorResponse(
        "One or more fields exceed the allowed length."
      );
    }

    // ---------------------------------------------
    // EMAIL VALIDATION
    // ---------------------------------------------

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return errorResponse(
        "Please enter a valid email address."
      );
    }

    // ---------------------------------------------
    // PRODUCT CATEGORY VALIDATION
    // ---------------------------------------------

    if (!allowedProducts.includes(product)) {
      return errorResponse(
        "Please select a valid product category."
      );
    }

    // ---------------------------------------------
    // VALIDATE SELECTED CATALOGUE PRODUCTS
    // ---------------------------------------------

    const quoteItems = validateQuoteItems(fields.products);

    if (!quoteItems) {
      return errorResponse(
        "The selected product list is invalid."
      );
    }

    // ---------------------------------------------
    // FILE COUNT VALIDATION
    // ---------------------------------------------

    if (uploadedFiles.length > MAX_FILES) {
      return errorResponse(
        `A maximum of ${MAX_FILES} files can be uploaded.`
      );
    }

    // ---------------------------------------------
    // FILE SIZE AND FORMAT VALIDATION
    // ---------------------------------------------

    let totalFileSize = 0;

    for (const file of uploadedFiles) {
      const extension = getExtension(file.name);

      if (
        !file.name ||
        file.name.length > 180 ||
        file.size === 0 ||
        file.size > MAX_FILE_SIZE ||
        !allowedExtensions.includes(extension)
      ) {
        return errorResponse(
          `The file "${file.name}" is invalid. Please check its format and size.`
        );
      }

      totalFileSize += file.size;
    }

    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      return errorResponse(
        "The combined attachment size cannot exceed 40 MB."
      );
    }

    // ---------------------------------------------
    // RESEND CONFIGURATION
    // ---------------------------------------------

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.QUOTE_TO_EMAIL;
    const sender = process.env.QUOTE_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error(
        "Quote email environment variables are missing."
      );

      return NextResponse.json(
        {
          message: "Email service is not configured yet.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------
    // SELECTED PRODUCTS EMAIL TABLE
    // ---------------------------------------------

    const selectedProductsHtml = quoteItems.length
      ? `
        <h3 style="margin-top:30px;">Selected Individual Products</h3>

        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr style="background:#f3f3f3;">
              <th style="text-align:left;padding:10px;border:1px solid #ddd;">Product</th>
              <th style="text-align:left;padding:10px;border:1px solid #ddd;">Product ID</th>
              <th style="text-align:left;padding:10px;border:1px solid #ddd;">Category</th>
              <th style="text-align:left;padding:10px;border:1px solid #ddd;">Quantity</th>
            </tr>
          </thead>

          <tbody>
            ${quoteItems
              .map(
                (item) => `
                  <tr>
                    <td style="padding:10px;border:1px solid #ddd;">
                      ${safe(item.name)}
                    </td>

                    <td style="padding:10px;border:1px solid #ddd;">
                      ${safe(item.id)}
                    </td>

                    <td style="padding:10px;border:1px solid #ddd;">
                      ${safe(item.category)}
                    </td>

                    <td style="padding:10px;border:1px solid #ddd;">
                      ${item.quantity}
                    </td>
                  </tr>

                  ${
                    item.image
                      ? `
                        <tr>
                          <td colspan="4" style="padding:8px;color:#777;font-size:12px;">
                            Product image path: ${safe(item.image)}
                          </td>
                        </tr>
                      `
                      : ""
                  }
                `
              )
              .join("")}
          </tbody>
        </table>
      `
      : `
        <p>No individual products were selected from the catalogue.</p>
      `;

    // ---------------------------------------------
    // PREPARE EMAIL ATTACHMENTS
    // ---------------------------------------------

    const attachments = await Promise.all(
      uploadedFiles.map(async (file) => ({
        filename: sanitizeFilename(file.name),
        content: Buffer.from(
          await file.arrayBuffer()
        ).toString("base64"),
      }))
    );

    // ---------------------------------------------
    // BUILD EMAIL HTML
    // ---------------------------------------------

    const emailHtml = `
      <div style="
        font-family:Arial,sans-serif;
        color:#222;
        max-width:700px;
        margin:auto;
        line-height:1.6;
      ">

        <div style="
          background:#090909;
          color:#fff;
          padding:25px;
        ">
          <h2 style="margin:0;">
            NORDVIA EXPORTS
          </h2>

          <p style="margin:8px 0 0;color:#ccc;">
            New Website Quote Inquiry
          </p>
        </div>

        <div style="padding:25px;border:1px solid #eee;">

          <h3>Contact Information</h3>

          <p><strong>Name:</strong> ${safe(fullName)}</p>
          <p><strong>Company:</strong> ${safe(company)}</p>
          <p><strong>Email:</strong> ${safe(email)}</p>
          <p><strong>Destination:</strong> ${safe(country)}</p>

          <hr style="border:none;border-top:1px solid #eee;margin:25px 0;" />

          <h3>Product Requirements</h3>

          <p>
            <strong>Selected category:</strong>
            ${safe(productNames[product])}
          </p>

          <p><strong>Estimated quantity:</strong> ${safe(quantity)}</p>
          <p><strong>Customization:</strong> ${safe(customization)}</p>
          <p><strong>Timeline:</strong> ${safe(timeline)}</p>

          ${selectedProductsHtml}

          <hr style="border:none;border-top:1px solid #eee;margin:25px 0;" />

          <h3>Project Details</h3>

          <p style="white-space:pre-wrap;line-height:1.7;">
            ${safe(message)}
          </p>

          <h3>Design Attachments</h3>

          ${
            uploadedFiles.length
              ? `
                <ul>
                  ${uploadedFiles
                    .map(
                      (file) => `
                        <li>${safe(file.name)} — ${(
                          file.size /
                          (1024 * 1024)
                        ).toFixed(2)} MB</li>
                      `
                    )
                    .join("")}
                </ul>
              `
              : "<p>No files attached.</p>"
          }

          <p>
            <strong>Follow-up email opt-in:</strong>
            ${followUpOptIn === "true" ? "Yes" : "No"}
          </p>

          <hr style="border:none;border-top:1px solid #ddd;margin-top:30px;" />

          <p style="font-size:12px;color:#777;">
            This inquiry was submitted through the
            NORDVIA EXPORTS website.
          </p>

        </div>
      </div>
    `;

    // ---------------------------------------------
    // SEND EMAIL THROUGH RESEND
    // ---------------------------------------------

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: email,
          subject: `New Quote Inquiry: ${productNames[product]}`,
          html: emailHtml,

          ...(attachments.length
            ? { attachments }
            : {}),
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend email error:", result);

      return NextResponse.json(
        {
          message:
            "Unable to send your inquiry right now. Please try again.",
        },
        { status: 502 }
      );
    }

    // ---------------------------------------------
    // SUCCESS RESPONSE
    // ---------------------------------------------

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your inquiry has been submitted successfully. We will review your requirements and get back to you.",
    });

  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        message:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
