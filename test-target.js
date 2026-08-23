require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function testMail() {
  const targetEmail = "kaifachukatlu@gmail.com";
  console.log(`Attempting to send email to ${targetEmail} from ${process.env.EMAIL_USER}...`);
  try {
    const info = await transporter.sendMail({
      from: `"KRM NEXORA Admin" <${process.env.EMAIL_USER}>`,
      to: targetEmail,
      subject: 'Urgent Test Email - KRM NEXORA',
      html: '<h1>Success!</h1><p>The email system is working correctly. This email was delivered directly to kaifachukatlu@gmail.com.</p>',
    });
    console.log("Email sent! Message ID:", info.messageId);
  } catch (error) {
    console.error("FAILED to send email:", error);
  }
}

testMail();
