
import { NextRequest, NextResponse } from "next/server";

const allowedProducts = [
  "hoodies",
  "t-shirts",
  "tracksuits",
  "joggers",
  "jackets",
  "coats",
  "other",
];

function escapeHtml(value: string) {
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      company,
      email,
      country,
      product,
      quantity,
      customization,
      timeline,
      message,
      website,
    } = body;

    // Basic spam protection
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    // Required fields
    if (
      !fullName ||
      !email ||
      !country ||
      !product ||
      !quantity ||
      !message
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate field types and lengths
    const fields = [
      fullName,
      email,
      country,
      product,
      quantity,
      message,
    ];

    if (fields.some((field) => typeof field !== "string")) {
      return NextResponse.json(
        { message: "Invalid form data." },
        { status: 400 }
      );
    }

    if (
      fullName.length > 100 ||
      email.length > 254 ||
      country.length > 100 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedProducts.includes(product)) {
      return NextResponse.json(
        { message: "Please select a valid product category." },
        { status: 400 }
      );
    }

    // Email configuration
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.QUOTE_TO_EMAIL;
    const sender = process.env.QUOTE_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Quote email environment variables are missing.");

      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const productNames: Record<string, string> = {
      hoodies: "Hoodies & Sweatshirts",
      "t-shirts": "T-Shirts & Polos",
      tracksuits: "Sportswear & Tracksuits",
      joggers: "Joggers & Sweatpants",
      jackets: "Jackets",
      coats: "Coats & Outerwear",
      other: "Other",
    };

    const safe = (value: unknown) =>
      escapeHtml(typeof value === "string" ? value : "Not provided");

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:650px;margin:auto;">
        <h2 style="border-bottom:2px solid #222;padding-bottom:15px;">
          New Quote Inquiry — NORDVIA EXPORTS
        </h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${safe(fullName)}</p>
        <p><strong>Company:</strong> ${safe(company)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Destination:</strong> ${safe(country)}</p>

        <h3>Product Requirements</h3>
        <p><strong>Product:</strong> ${safe(productNames[product])}</p>
        <p><strong>Quantity:</strong> ${safe(quantity)}</p>
        <p><strong>Customization:</strong> ${safe(customization)}</p>
        <p><strong>Timeline:</strong> ${safe(timeline)}</p>

        <h3>Project Details</h3>
        <p style="white-space:pre-wrap;line-height:1.6;">
          ${safe(message)}
        </p>

        <hr style="border:none;border-top:1px solid #ddd;margin-top:30px;" />

        <p style="font-size:12px;color:#777;">
          This inquiry was submitted through the NORDVIA EXPORTS website.
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
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
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend email error:", result);

      return NextResponse.json(
        { message: "Unable to send your inquiry right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your inquiry has been submitted successfully. We will review your requirements and get back to you.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
