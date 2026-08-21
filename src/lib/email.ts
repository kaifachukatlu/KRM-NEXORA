import nodemailer from 'nodemailer';

// Configure the transport using environment variables
// It assumes Gmail, but works with most standard SMTP servers
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email using the configured SMTP transporter.
 * @param to Recipient's email address
 * @param subject Subject of the email
 * @param htmlBody HTML content of the email
 */
export async function sendEmail(to: string, subject: string, htmlBody: string) {
  // If credentials are not set, log to console instead of failing
  // This helps during local development before the App Password is set up
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️ EMAIL_USER or EMAIL_PASS not set. Email not sent.");
    console.warn(`[MOCK EMAIL to ${to}] Subject: ${subject}`);
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from: `"KRM NEXORA" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlBody,
    });
    console.log(`Email sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
