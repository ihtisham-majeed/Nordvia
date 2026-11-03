
import { NextRequest, NextResponse } from "next/server";

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

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let body: Record<string, unknown>;

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }

    const name = getString(body.name || body.fullName);
    const email = getString(body.email);
    const company = getString(body.company);
    const phone = getString(body.phone);
    const subject = getString(body.subject) || "General Contact Inquiry";
    const message = getString(body.message);
    const website = getString(body.website);

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Length validation
    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      phone.length > 40 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Resend configuration
    const apiKey = process.env.RESEND_API_KEY;
    const recipient =
      process.env.CONTACT_TO_EMAIL || process.env.QUOTE_TO_EMAIL;
    const sender =
      process.env.CONTACT_FROM_EMAIL || process.env.QUOTE_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const safe = (value: string) => escapeHtml(value || "Not provided");

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:650px;margin:auto;">
        <h2 style="border-bottom:2px solid #222;padding-bottom:15px;">
          New Contact Inquiry — NORDVIA EXPORTS
        </h2>

        <h3>Contact Information</h3>

        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Company:</strong> ${safe(company)}</p>
        <p><strong>Phone:</strong> ${safe(phone)}</p>

        <h3>Inquiry</h3>

        <p><strong>Subject:</strong> ${safe(subject)}</p>

        <div style="background:#f5f5f5;padding:18px;line-height:1.7;white-space:pre-wrap;">
          ${safe(message)}
        </div>

        <hr style="border:none;border-top:1px solid #ddd;margin-top:30px;" />

        <p style="font-size:12px;color:#777;">
          This message was submitted through the NORDVIA EXPORTS contact page.
        </p>
      </div>
    `;

    const emailText = `
New Contact Inquiry — NORDVIA EXPORTS

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}

Subject: ${subject}

Message:
${message}
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
        subject: `Contact Inquiry: ${subject}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend contact email error:", result);

      return NextResponse.json(
        {
          message:
            "Unable to send your message right now. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting NORDVIA EXPORTS. Your message has been received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
