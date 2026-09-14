function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      message
    } = req.body || {};
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const portfolioUrl = "https://vmani.vercel.app";

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

        to: [{
          email: process.env.ADMIN_EMAIL,
          name: "V. Manikanta",
        }, ],

        replyTo: {
          email,
          name,
        },

        subject: `New Portfolio Message from ${name}`,

        htmlContent: `<!doctype html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Project Inquiry - V. Manikanta</title>

    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->

    <style>
      /* Base Reset */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        background-color: #f8fafc;
      }

      /* Typography */
      body,
      p,
      a,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      td {
        font-family: Arial, Helvetica, sans-serif;
        color: #0f172a;
      }
      .monospace {
        font-family: "Courier New", Courier, monospace;
      }

      /* Mobile Responsiveness */
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mobile-padding {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        .stack-column {
          display: block !important;
          width: 100% !important;
          margin-bottom: 15px !important;
        }
        .hide-mobile {
          display: none !important;
        }
        .hero-text {
          font-size: 26px !important;
          line-height: 32px !important;
        }
        .message-card {
          padding: 20px !important;
        }
        .cta-button {
          width: 100% !important;
          text-align: center !important;
          display: block !important;
          box-sizing: border-box !important;
        }
      }

      /* Hover States for Webmail */
      .btn-hover:hover {
        background-color: #e6cf00 !important;
      }
      .link-hover:hover {
        color: #4162ff !important;
        text-decoration: underline !important;
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
    "
  >
    <center
      style="
        width: 100%;
        background-color: #f8fafc;
        table-layout: fixed;
        padding-bottom: 40px;
      "
    >
      <div
        style="
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(15, 23, 42, 0.05);
        "
        class="container"
      >
        <!-- [if mso]>
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" bgcolor="#ffffff">
            <tr>
            <td style="padding: 0px; margin: 0px;">
            <![endif]-->

        <table
          align="center"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          style="margin: auto; background-color: #ffffff"
        >
          <!-- HEADER & HERO SECTION -->
          <tr>
            <td
              style="background-color: #4162ff; padding: 40px 30px 0px 30px"
              class="mobile-padding"
            >
              <!-- Top Metadata / Owner Info -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td align="left" style="padding-bottom: 25px">
                    <div
                      style="
                        font-size: 11px;
                        font-weight: 700;
                        color: #ffffff;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                      "
                      class="monospace"
                    >
                      V. Manikanta &nbsp;<span
                        style="
                          color: #4162ff;
                          background-color: #ffe600;
                          padding: 2px 6px;
                          border-radius: 4px;
                          font-weight: bold;
                          margin-left: 5px;
                        "
                        >ADMIN NOTIFICATION</span
                      >
                    </div>
                    <div
                      style="
                        font-size: 10px;
                        color: #b3c2ff;
                        margin-top: 4px;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                      "
                    >
                      Software Engineer & Full Stack Developer
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Hero Notification Badge -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      background-color: rgba(255, 255, 255, 0.1);
                      padding: 6px 12px;
                      border-radius: 20px;
                    "
                  >
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            color: #ffe600;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                          "
                          class="monospace"
                        >
                          New Inquiry
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Hero Title -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td style="padding-top: 20px; padding-bottom: 30px">
                    <h1
                      class="hero-text"
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 32px;
                        line-height: 40px;
                        font-weight: 800;
                        letter-spacing: -0.5px;
                      "
                    >
                      NEW PROJECT<br />INQUIRY
                    </h1>
                  </td>
                </tr>
              </table>

              <!-- Hero SVG Illustration -->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td align="center" style="padding-bottom: 0">
                    <img
                      src="https://vmani.vercel.app/Previews/Admin-01.png"
                      width="520"
                      alt="V. Manikanta - Software Engineer"
                      style="
                        display: block;
                        width: 100%;
                        max-width: 520px;
                        height: auto;
                        border: 0;
                      "
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INTRO COPY -->
          <tr>
            <td
              style="padding: 40px 30px 20px 30px; background-color: #ffffff"
              class="mobile-padding"
            >
              <h2
                style="
                  margin: 0 0 10px 0;
                  color: #0f172a;
                  font-size: 20px;
                  font-weight: 700;
                "
              >
                You've got a new message.
              </h2>
              <p
                style="
                  margin: 0;
                  color: #475569;
                  font-size: 15px;
                  line-height: 24px;
                "
              >
                Someone has reached out through your developer portfolio contact
                form. Here are the details of their inquiry.
              </p>
            </td>
          </tr>

          <!-- CLIENT DETAILS SECTION -->
<!-- CLIENT DETAILS SECTION -->
<tr>
  <td
    style="
      padding: 10px 30px 30px 30px;
      background-color: #ffffff;
    "
    class="mobile-padding"
  >
    <table
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
    >
      <!-- Section Heading -->
      <tr>
        <td
          align="left"
          style="padding-bottom: 14px"
        >
          <div
            style="
              font-size: 11px;
              font-weight: 700;
              color: #94a3b8;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              text-align: left;
            "
            class="monospace"
          >
            CLIENT DETAILS
          </div>
        </td>
      </tr>

      <!-- Details Card -->
      <tr>
        <td
          width="100%"
          style="
            width: 100%;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background-color: #ffffff;
            padding: 24px 22px;
          "
        >
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
          >

            <!-- NAME -->
            <tr>
              <td
                width="50"
                valign="middle"
                align="left"
                style="
                  width: 50px;
                  padding: 0 14px 24px 0;
                "
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/4162ff/user.png"
                  width="24"
                  height="24"
                  alt="Name"
                  style="
                    display: block;
                    width: 24px;
                    height: 24px;
                    border: 0;
                  "
                />
              </td>

              <td
                valign="middle"
                align="left"
                style="
                  padding: 0 0 24px 0;
                  text-align: left;
                "
              >
                <div
                  style="
                    font-size: 11px;
                    line-height: 16px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 5px;
                    text-align: left;
                  "
                >
                  Name
                </div>

                <div
                  style="
                    font-size: 17px;
                    line-height: 23px;
                    color: #0f172a;
                    font-weight: 600;
                    text-align: left;
                  "
                >
                  ${safeName}
                </div>
              </td>
            </tr>

            <!-- EMAIL -->
            <tr>
              <td
                width="50"
                valign="middle"
                align="left"
                style="
                  width: 50px;
                  padding: 0 14px 24px 0;
                "
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/4162ff/mail.png"
                  width="24"
                  height="24"
                  alt="Email"
                  style="
                    display: block;
                    width: 24px;
                    height: 24px;
                    border: 0;
                  "
                />
              </td>

              <td
                valign="middle"
                align="left"
                style="
                  padding: 0 0 24px 0;
                  text-align: left;
                "
              >
                <div
                  style="
                    font-size: 11px;
                    line-height: 16px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 5px;
                    text-align: left;
                  "
                >
                  Email Address
                </div>

                <div
                  style="
                    font-size: 16px;
                    line-height: 23px;
                    font-weight: 600;
                    text-align: left;
                    word-break: break-word;
                    overflow-wrap: anywhere;
                  "
                >
                  <a
                    href="mailto:${safeEmail}"
                    style="
                      color: #4162ff;
                      text-decoration: none;
                    "
                    class="link-hover"
                  >
                    ${safeEmail}
                  </a>
                </div>
              </td>
            </tr>

            <!-- SUBMITTED -->
            <tr>
              <td
                width="50"
                valign="middle"
                align="left"
                style="
                  width: 50px;
                  padding: 0 14px 0 0;
                "
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/4162ff/clock.png"
                  width="24"
                  height="24"
                  alt="Submitted"
                  style="
                    display: block;
                    width: 24px;
                    height: 24px;
                    border: 0;
                  "
                />
              </td>

              <td
                valign="middle"
                align="left"
                style="
                  padding: 0;
                  text-align: left;
                "
              >
                <div
                  style="
                    font-size: 11px;
                    line-height: 16px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 5px;
                    text-align: left;
                  "
                >
                  Submitted
                </div>

                <div
                  style="
                    font-size: 15px;
                    line-height: 22px;
                    color: #0f172a;
                    text-align: left;
                  "
                >
                  ${submittedAt}
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>
          <!-- MAIN MESSAGE SECTION (FOCAL POINT) -->
<!-- MAIN MESSAGE SECTION -->
<tr>
  <td
    style="
      padding: 0px 30px 34px 30px;
      background-color: #ffffff;
    "
    class="mobile-padding"
  >
    <table
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
    >

      <!-- MESSAGE HEADING -->
      <tr>
        <td
          align="left"
          style="
            padding-bottom: 14px;
            text-align: left;
          "
        >
          <div
            style="
              font-size: 11px;
              font-weight: 700;
              color: #4162ff;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              text-align: left;
            "
            class="monospace"
          >
            MESSAGE FROM ${safeName}
          </div>
        </td>
      </tr>

      <!-- MESSAGE CARD -->
      <tr>
        <td
          align="left"
          style="
            background-color: #f1f5f9;
            border-left: 5px solid #4162ff;
            border-radius: 0 10px 10px 0;
            padding: 28px 26px 30px 26px;
            text-align: left;
          "
          class="message-card"
        >

          <!-- QUOTE ICON -->
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
          >
            <tr>
              <td
                align="left"
                style="
                  padding: 0 0 20px 0;
                  text-align: left;
                "
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/FFD84D/quote-left.png"
                  width="28"
                  height="28"
                  alt="Message"
                  style="
                    display: block;
                    width: 28px;
                    height: 28px;
                    border: 0;
                  "
                />
              </td>
            </tr>

            <!-- MESSAGE CONTENT -->
            <tr>
              <td
                align="left"
                valign="top"
                style="
                  padding: 0;
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 17px;
                  line-height: 29px;
                  color: #0f172a;
                  text-align: left;
                  word-break: break-word;
                  overflow-wrap: anywhere;
                "
              >
                <p
                  align="left"
                  style="
                    margin: 0;
                    padding: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 17px;
                    line-height: 29px;
                    color: #0f172a;
                    text-align: left;
                    word-break: break-word;
                    overflow-wrap: anywhere;
                    white-space: pre-wrap;
                  "
                >I just wanted to take a moment to appreciate the work you’ve been doing. Your commitment and the way you handle things with such professionalism really stand out. I truly value the effort you’re putting in, and it’s been a pleasure working together. Keep doing the great work — it definitely doesn’t go unnoticed!
</p>
              </td>
            </tr>
          </table>

        </td>
      </tr>

    </table>
  </td>
</tr>

          <!-- REPLY CTA SECTION -->
          <tr>
            <td
              style="
                padding: 0px 30px 40px 30px;
                background-color: #ffffff;
                text-align: left;
              "
              class="mobile-padding"
            >
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    style="border-radius: 6px; background-color: #ffe600"
                    class="btn-hover"
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        display: inline-block;
                        padding: 16px 28px;
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 16px;
                        color: #0f172a;
                        font-weight: 700;
                        text-decoration: none;
                        border-radius: 6px;
                      "
                      class="cta-button"
                    >
                      REPLY TO ${safeName}
                      <span
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin-left: 6px;
                          position: relative;
                          top: -1px;
                        "
                      >
                  
                      </span>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- VISUAL DIVIDER -->
          <tr>
            <td style="padding: 0 30px" class="mobile-padding">
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td style="border-top: 1px dashed #cbd5e1">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INQUIRY SUMMARY & QUICK LINKS (2 COLUMNS) -->
          <tr>
            <td
              style="padding: 20px 30px 40px 30px; background-color: #ffffff"
              class="mobile-padding"
            >
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <!-- Summary Column -->
                  <td
                    width="50%"
                    valign="top"
                    class="stack-column"
                    style="padding-right: 15px"
                  >
                    <div
                      style="
                        font-size: 11px;
                        font-weight: 700;
                        color: #94a3b8;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 12px;
                      "
                      class="monospace"
                    >
                      INQUIRY SUMMARY
                    </div>
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td style="padding-bottom: 8px">
                          <div
                            style="
                              font-size: 10px;
                              color: #64748b;
                              text-transform: uppercase;
                            "
                          >
                            Client
                          </div>
                          <div
                            style="
                              font-size: 13px;
                              color: #0f172a;
                              font-weight: 600;
                            "
                          >
                            ${safeName}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 8px">
                          <div
                            style="
                              font-size: 10px;
                              color: #64748b;
                              text-transform: uppercase;
                            "
                          >
                            Email
                          </div>
                          <div style="font-size: 13px; color: #4162ff">
                            ${safeEmail}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            style="
                              font-size: 10px;
                              color: #64748b;
                              text-transform: uppercase;
                            "
                          >
                            Received
                          </div>
                          <div style="font-size: 13px; color: #0f172a">
                            ${submittedAt}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Quick Links Column -->
                  <td
                    width="50%"
                    valign="top"
                    class="stack-column"
                    style="padding-left: 15px; border-left: 1px solid #f1f5f9"
                  >
                    <div
                      style="
                        font-size: 11px;
                        font-weight: 700;
                        color: #94a3b8;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 12px;
                      "
                      class="monospace"
                    >
                      QUICK LINKS
                    </div>
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td style="padding-bottom: 12px">
                          <a
                            href="${portfolioUrl}"
                            style="
                              color: #0f172a;
                              text-decoration: none;
                              font-size: 13px;
                              font-weight: 600;
                              display: flex;
                              align-items: center;
                            "
                            class="link-hover"
                          >
                            <span
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 6px;
                              "
                            >
                              <img
                                src="https://img.icons8.com/ios-filled/100/4162ff/web.png"
                                width="16"
                                height="16"
                                alt="Website"
                                style="
                                  display: inline-block;
                                  vertical-align: middle;
                                  border: 0;
                                "
                              />
                            </span>
                            VIEW PORTFOLIO
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px">
                          <a
                            href="https://github.com/Manikanta000001"
                            style="
                              color: #0f172a;
                              text-decoration: none;
                              font-size: 13px;
                              font-weight: 600;
                              display: flex;
                              align-items: center;
                            "
                            class="link-hover"
                          >
                            <span
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 6px;
                              "
                            >
                              <img
                                src="https://img.icons8.com/fluency/96/github.png"
                                width="16"
                                height="16"
                                alt="GitHub"
                                style="display: block; border: 0"
                              />
                            </span>
                            GITHUB
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px">
                          <a
                            href="mailto:${safeEmail}"
                            style="
                              color: #0f172a;
                              text-decoration: none;
                              font-size: 13px;
                              font-weight: 600;
                              display: flex;
                              align-items: center;
                            "
                            class="link-hover"
                          >
                            <span
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 6px;
                              "
                            >
                              <img
                                src="https://img.icons8.com/fluency/96/email.png"
                                width="16"
                                height="16"
                                alt="Email"
                                style="display: block; border: 0"
                              />
                            </span>
                            EMAIL CLIENT
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ADMIN CONTACT FOOTER -->
          <tr>
            <td
              style="padding: 30px; background-color: #0f172a"
              class="mobile-padding"
            >
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td style="padding-bottom: 20px">
                    <div
                      style="
                        font-size: 16px;
                        font-weight: 800;
                        color: #ffffff;
                        letter-spacing: 0.5px;
                      "
                    >
                      V. MANIKANTA
                    </div>
                    <div
                      style="
                        font-size: 12px;
                        color: #94a3b8;
                        margin-top: 4px;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                      "
                      class="monospace"
                    >
                      Software Engineer & Full Stack Developer
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding-bottom: 25px;
                      border-bottom: 1px solid #1e293b;
                    "
                  >
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            padding-right: 15px;
                            padding-bottom: 5px;
                            white-space: nowrap;
                          "
                        >
                          <a
                            href="tel:9912050594"
                            style="
                              color: #e2e8f0;
                              text-decoration: none;
                              font-size: 13px;
                            "
                          >
                            <img
                              src="https://img.icons8.com/fluency/48/phone.png"
                              width="19"
                              height="19"
                              alt="Phone"
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                border: 0;
                                margin-right: 5px;
                              "
                            />
                            <span style="vertical-align: middle"
                              >9912050594</span
                            >
                          </a>
                        </td>

                        <td style="padding-bottom: 5px; white-space: nowrap">
                          <a
                            href="mailto:vulavaptimanikanta@gmail.com"
                            style="
                              color: #e2e8f0;
                              text-decoration: none;
                              font-size: 13px;
                            "
                          >
                            <img
                              src="https://img.icons8.com/fluency/48/email.png"
                              width="19"
                              height="19"
                              alt="Email"
                              style="
                                display: inline-block;
                                vertical-align: middle;
                                border: 0;
                                margin-right: 5px;
                              "
                            />
                            <span style="vertical-align: middle"
                              >vulavaptimanikanta@gmail.com</span
                            >
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px">
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          style="
                            font-size: 12px;
                            color: #64748b;
                            font-style: italic;
                          "
                        >
                          Built with curiosity. Driven by code.
                        </td>
                        <td
                          align="right"
                          style="font-size: 12px; color: #64748b"
                        >
                          &copy; 2026 V. Manikanta
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- [if mso]>
            </td>
            </tr>
            </table>
            <![endif]-->
      </div>
    </center>
  </body>
</html>`,
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

        to: [{
          email,
          name,
        }, ],

        subject: "Thanks for reaching out — V. Manikanta",


        htmlContent: `<!doctype html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Message Received - V. Manikanta</title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style>
      table,
      td,
      div,
      h1,
      p {
        font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      @media screen and (max-width: 600px) {
        .mobile-padding {
          padding: 20px !important;
        }
        .mobile-text-center {
          text-align: center !important;
        }
        .mobile-stack {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .feature-card {
          margin-bottom: 20px !important;
        }
        .hide-on-mobile {
          display: none !important;
        }
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      word-spacing: normal;
      background-color: #f4f6f9;
    "
  >
    <div
      role="article"
      aria-roledescription="email"
      lang="en"
      style="
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        mso-line-height-rule: exactly;
      "
    >
      <table
        role="presentation"
        style="
          width: 100%;
          border: none;
          border-spacing: 0;
          background-color: #f4f6f9;
        "
      >
        <tr>
          <td align="center" style="padding: 40px 0">
            <!-- Main Container -->
            <table
              role="presentation"
              style="
                width: 100%;
                max-width: 600px;
                border: none;
                border-spacing: 0;
                text-align: left;
                font-family:
                  &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;,
                  Arial, sans-serif;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
              "
            >
              <!-- Hero Section -->
              <tr>
                <td
                  style="
                    padding: 40px;
                    background-color: #4162ff;
                    text-align: center;
                  "
                >
                  <!-- Replace with actual SVG or image URL in production if SVG support is an issue, but inline SVG is broadly supported now except in older Outlook -->
                  <table
                    role="presentation"
                    style="width: 100%; border: none; border-spacing: 0"
                  >
                    <tr>
                      <td align="center" style="padding-bottom: 30px">
                        <!-- SVG Developer Illustration -->
                        <img
                          src="https://vmani.vercel.app/Previews/Admin-03.png"
                          width="520"
                          alt="V. Manikanta - Software Engineer"
                          style="
                            display: block;
                            width: 100%;
                            max-width: 520px;
                            height: auto;
                            border: 0;
                          "
                        />
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <h1
                          style="
                            margin: 0;
                            font-size: 28px;
                            color: #ffffff;
                            font-weight: 700;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                          "
                        >
                          V. Manikanta
                        </h1>
                        <p
                          style="
                            margin: 10px 0 0 0;
                            font-size: 14px;
                            color: #ffe600;
                            font-weight: 600;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                          "
                        >
                          Software Engineer & Full Stack Developer
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Greeting & Confirmation -->
              <tr>
                <td class="mobile-padding" style="padding: 40px">
                  <h2
                    style="
                      margin: 0 0 20px 0;
                      font-size: 22px;
                      color: #1a202c;
                      font-weight: 600;
                    "
                  >
                    Hi ${safeName},
                  </h2>
                  <p
                    style="
                      margin: 0 0 16px 0;
                      font-size: 16px;
                      line-height: 24px;
                      color: #4a5568;
                    "
                  >
                    Thank you for reaching out through my portfolio. I've
                    received your message successfully, and I really appreciate
                    you taking the time to connect with me.
                  </p>

                  <!-- Status Card -->
                  <table
                    role="presentation"
                    style="
                      width: 100%;
                      border: none;
                      border-spacing: 0;
                      background-color: #f8fafc;
                      border-left: 4px solid #4162ff;
                      border-radius: 0 8px 8px 0;
                      margin: 30px 0;
                    "
                  >
                    <tr>
                      <td style="padding: 20px">
                        <p
                          style="
                            margin: 0;
                            font-size: 15px;
                            line-height: 22px;
                            color: #2d3748;
                            font-weight: 500;
                          "
                        >
                          <span style="color: #4162ff; font-weight: bold"
                            >Status:</span
                          >
                          Message Received<br />
                          <span style="color: #4162ff; font-weight: bold"
                            >Next Steps:</span
                          >
                          I will review your inquiry and get back to you as soon
                          as possible.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- What I Can Build Section -->
              <tr>
                <td style="padding: 0 40px 20px 40px" class="mobile-padding">
                  <h3
                    style="
                      margin: 0 0 30px 0;
                      font-size: 16px;
                      color: #718096;
                      font-weight: 700;
                      letter-spacing: 1px;
                      text-transform: uppercase;
                      text-align: center;
                    "
                  >
                    What I Can Build
                  </h3>

                  <table
                    role="presentation"
                    style="width: 100%; border: none; border-spacing: 0"
                  >
                    <!-- Row 1 -->
                    <tr>
                      <td
                        class="mobile-stack"
                        style="
                          width: 48%;
                          vertical-align: top;
                          padding-bottom: 24px;
                        "
                      >
                        <table
                          role="presentation"
                          style="width: 100%; border: none; border-spacing: 0"
                        >
                          <tr>
                            <td style="padding-bottom: 12px">
                              <img
                                src="https://img.icons8.com/fluency/96/source-code.png"
                                width="32"
                                height="32"
                                alt="Full-Stack Development"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4
                                style="
                                  margin: 0 0 8px 0;
                                  font-size: 16px;
                                  color: #1a202c;
                                "
                              >
                                Full-Stack Development
                              </h4>
                              <p
                                style="
                                  margin: 0;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #4a5568;
                                "
                              >
                                Build complete web applications from frontend
                                interfaces to backend systems and APIs.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td class="hide-on-mobile" style="width: 4%"></td>
                      <td
                        class="mobile-stack"
                        style="
                          width: 48%;
                          vertical-align: top;
                          padding-bottom: 24px;
                        "
                      >
                        <table
                          role="presentation"
                          style="width: 100%; border: none; border-spacing: 0"
                        >
                          <tr>
                            <td style="padding-bottom: 12px">
                              <img
                                src="https://img.icons8.com/fluency/96/web.png"
                                width="32"
                                height="32"
                                alt="Web Applications"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4
                                style="
                                  margin: 0 0 8px 0;
                                  font-size: 16px;
                                  color: #1a202c;
                                "
                              >
                                Web Applications
                              </h4>
                              <p
                                style="
                                  margin: 0;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #4a5568;
                                "
                              >
                                Create modern, responsive, practical web
                                experiences focused on usability.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!-- Row 2 -->
                    <tr>
                      <td
                        class="mobile-stack"
                        style="width: 48%; vertical-align: top"
                      >
                        <table
                          role="presentation"
                          style="width: 100%; border: none; border-spacing: 0"
                        >
                          <tr>
                            <td style="padding-bottom: 12px">
                              <img
                                src="https://img.icons8.com/fluency/96/layers.png"
                                width="32"
                                height="32"
                                alt="Digital Experiences"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4
                                style="
                                  margin: 0 0 8px 0;
                                  font-size: 16px;
                                  color: #1a202c;
                                "
                              >
                                Digital Experiences
                              </h4>
                              <p
                                style="
                                  margin: 0;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #4a5568;
                                "
                              >
                                Build engaging interfaces with smooth
                                interactions and polished user experiences.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td class="hide-on-mobile" style="width: 4%"></td>
                      <td
                        class="mobile-stack"
                        style="width: 48%; vertical-align: top"
                      >
                        <table
                          role="presentation"
                          style="width: 100%; border: none; border-spacing: 0"
                        >
                          <tr>
                            <td style="padding-bottom: 12px">
                              <img
                                src="https://img.icons8.com/fluency/96/artificial-intelligence.png"
                                width="32"
                                height="32"
                                alt="AI & Software Projects"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4
                                style="
                                  margin: 0 0 8px 0;
                                  font-size: 16px;
                                  color: #1a202c;
                                "
                              >
                                AI & Software Projects
                              </h4>
                              <p
                                style="
                                  margin: 0;
                                  font-size: 14px;
                                  line-height: 20px;
                                  color: #4a5568;
                                "
                              >
                                Explore and build practical software experiences
                                around AI and modern technologies.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Quote Section -->
              <tr>
                <td style="padding: 0">
                  <table
                    role="presentation"
                    style="
                      width: 100%;
                      border: none;
                      border-spacing: 0;
                      background-color: #0f172a;
                    "
                  >
                    <tr>
                      <td
                        style="padding: 40px; text-align: center"
                        class="mobile-padding"
                      >
                        <img
                          src="https://img.icons8.com/ios-filled/100/FFD84D/quote-left.png"
                          width="30"
                          height="30"
                          alt="Quote"
                        />

                        <p
                          style="
                            margin: 0;
                            font-size: 20px;
                            line-height: 30px;
                            color: #ffffff;
                            font-style: italic;
                            font-weight: 500;
                          "
                        >
                          “Good software solves a problem.
                          <br class="hide-on-mobile" /><span
                            style="color: #ffe600"
                            >Great software makes the solution feel
                            effortless.</span
                          >”
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Explore Section -->
              <tr>
                <td
                  style="padding: 40px; text-align: center"
                  class="mobile-padding"
                >
                  <p
                    style="
                      margin: 0 0 30px 0;
                      font-size: 16px;
                      line-height: 24px;
                      color: #4a5568;
                    "
                  >
                    While I get back to you, feel free to explore my portfolio
                    and take a look at some of the projects I've been building.
                  </p>
                  <table
                    role="presentation"
                    style="margin: 0 auto; border: none; border-spacing: 0"
                  >
                    <tr>
                      <td
                        style="
                          background-color: #ffe600;
                          border-radius: 6px;
                          text-align: center;
                        "
                      >
                        <a
                          href="https://vmani.vercel.app/"
                          style="
                            display: inline-block;
                            padding: 16px 32px;
                            font-family:
                              &quot;Segoe UI&quot;, Roboto, Arial, sans-serif;
                            font-size: 15px;
                            color: #0f172a;
                            text-decoration: none;
                            font-weight: bold;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                          "
                        >
                          Explore My Work
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Let's Connect Section -->
              <tr>
                <td style="padding: 0 40px 40px 40px" class="mobile-padding">
                  <h3
                    style="
                      margin: 0 0 24px 0;
                      padding-top: 30px;
                      border-top: 1px solid #e2e8f0;
                      font-size: 16px;
                      color: #718096;
                      font-weight: 700;
                      letter-spacing: 1px;
                      text-transform: uppercase;
                    "
                  >
                    Let's Connect
                  </h3>

                  <table
                    role="presentation"
                    style="width: 100%; border: none; border-spacing: 0"
                  >
                    <!-- Phone -->
                    <tr>
                      <td
                        style="
                          padding-bottom: 16px;
                          width: 30px;
                          vertical-align: middle;
                        "
                      >
                        <img
                          src="https://img.icons8.com/fluency/96/phone.png"
                          width="20"
                          height="20"
                          alt="Phone"
                        />
                      </td>
                      <td style="padding-bottom: 16px; vertical-align: middle">
                        <a
                          href="tel:9912050594"
                          style="
                            color: #1a202c;
                            text-decoration: none;
                            font-size: 15px;
                            font-weight: 500;
                          "
                          >9912050594</a
                        >
                      </td>
                    </tr>
                    <!-- Email -->
                    <tr>
                      <td
                        style="
                          padding-bottom: 16px;
                          width: 30px;
                          vertical-align: middle;
                        "
                      >
                        <img
                          src="https://img.icons8.com/fluency/96/email.png"
                          width="20"
                          height="20"
                          alt="Email"
                        />
                      </td>
                      <td style="padding-bottom: 16px; vertical-align: middle">
                        <a
                          href="mailto:vulavaptimanikanta@gmail.com"
                          style="
                            color: #1a202c;
                            text-decoration: none;
                            font-size: 15px;
                            font-weight: 500;
                          "
                          >vulavaptimanikanta@gmail.com</a
                        >
                      </td>
                    </tr>
                    <!-- GitHub -->
                    <tr>
                      <td style="width: 30px; vertical-align: middle">
                        <img
                          src="https://img.icons8.com/fluency/96/github.png"
                          width="20"
                          height="20"
                          alt="GitHub"
                        />
                      </td>
                      <td style="vertical-align: middle">
                        <a
                          href="https://github.com/Manikanta000001"
                          style="
                            color: #4162ff;
                            text-decoration: none;
                            font-size: 15px;
                            font-weight: 600;
                          "
                          >Explore My GitHub</a
                        >
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  style="
                    padding: 40px;
                    background-color: #1a202c;
                    text-align: center;
                  "
                >
                  <h4
                    style="
                      margin: 0 0 8px 0;
                      font-size: 16px;
                      color: #ffffff;
                      font-weight: 600;
                      letter-spacing: 1px;
                      text-transform: uppercase;
                    "
                  >
                    V. Manikanta
                  </h4>
                  <p
                    style="margin: 0 0 16px 0; font-size: 14px; color: #a0aec0"
                  >
                    Software Engineer & Full Stack Developer
                  </p>

                  <p
                    style="
                      margin: 0 0 24px 0;
                      font-size: 14px;
                      color: #ffe600;
                      font-style: italic;
                    "
                  >
                    Built with curiosity. Driven by code.
                  </p>

                  <table
                    role="presentation"
                    style="
                      width: 100%;
                      border-top: 1px solid #2d3748;
                      border-spacing: 0;
                    "
                  >
                    <tr>
                      <td style="padding-top: 24px; text-align: center">
                        <p style="margin: 0; font-size: 12px; color: #718096">
                          &copy; 2026 V. Manikanta. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!-- End Main Container -->
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

        `,
      }),
    });

    const visitorEmailData = await visitorEmailResponse.json();

    if (!visitorEmailResponse.ok) {
      console.error("Brevo visitor email failed:", visitorEmailData);

      return res.status(500).json({
        message: "Your message was received, but the confirmation email could not be sent.",
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