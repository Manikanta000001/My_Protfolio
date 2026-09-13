export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY is missing.");

      return res.status(500).json({
        message: "Email service is not configured.",
      });
    }

    if (!process.env.BREVO_SENDER_EMAIL) {
      console.error("BREVO_SENDER_EMAIL is missing.");

      return res.status(500).json({
        message: "Email sender is not configured.",
      });
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error("ADMIN_EMAIL is missing.");

      return res.status(500).json({
        message: "Admin email is not configured.",
      });
    }

    const brevoUrl = "https://api.brevo.com/v3/smtp/email";

    /*
     * ------------------------------------------------
     * EMAIL 1 — ADMIN NOTIFICATION
     * ------------------------------------------------
     */

    const adminEmailResponse = await fetch(brevoUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: process.env.BREVO_SENDER_EMAIL,
        },

        to: [
          {
            email: process.env.ADMIN_EMAIL,
            name: "V. Manikanta",
          },
        ],

        replyTo: {
          email,
          name,
        },

        subject: `New Portfolio Message from ${name}`,

        textContent: `
New portfolio contact

Name: ${name}
Email: ${email}

Message:
${message}
        `.trim(),

        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="margin-bottom: 20px;">
              New Portfolio Message
            </h2>

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e5e7eb;" />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="white-space: pre-line; line-height: 1.6;">
              ${message}
            </p>
          </div>
        `,
      }),
    });

    const adminEmailData = await adminEmailResponse.json();

    if (!adminEmailResponse.ok) {
      console.error("Brevo admin email failed:", adminEmailData);

      return res.status(500).json({
        message: "Unable to send your message right now.",
      });
    }

    /*
     * ------------------------------------------------
     * EMAIL 2 — VISITOR CONFIRMATION
     * ------------------------------------------------
     */

    const visitorEmailResponse = await fetch(brevoUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "V. Manikanta",
          email: process.env.BREVO_SENDER_EMAIL,
        },

        to: [
          {
            email,
            name,
          },
        ],

        subject: "Thanks for reaching out — V. Manikanta",

        textContent: `
Hi ${name},

Thanks for reaching out through my portfolio.

I've received your message and will get back to you within 24 hours.

Best,
V. Manikanta
        `.trim(),

        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="margin-bottom: 20px;">
              Thanks for reaching out.
            </h2>

            <p>
              Hi ${name},
            </p>

            <p style="line-height: 1.6;">
              Thanks for getting in touch through my portfolio.
              I've received your message and will get back to you within 24 hours.
            </p>

            <p style="margin-top: 28px;">
              Best,<br />
              <strong>V. Manikanta</strong>
            </p>
          </div>
        `,
      }),
    });

    const visitorEmailData = await visitorEmailResponse.json();

    if (!visitorEmailResponse.ok) {
      console.error("Brevo visitor email failed:", visitorEmailData);

      return res.status(500).json({
        message:
          "Your message was received, but the confirmation email could not be sent.",
      });
    }

    /*
     * ------------------------------------------------
     * SUCCESS
     * ------------------------------------------------
     */

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
}