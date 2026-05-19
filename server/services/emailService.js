const { Resend } = require("resend");
const fs = require("fs");

const sendAuditEmail = async ({
  email,
  companyName,
  pdfPath,
}) => {
  try {
    const resend = new Resend(
      process.env.RESEND_API_KEY
    );

    const pdfBuffer = fs.readFileSync(pdfPath);

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `${companyName} AI Audit Report`,
      html: `
        <h2>Your AI Audit Report is Ready</h2>
      `,
      attachments: [
        {
          filename: `${companyName}.pdf`,
          content: pdfBuffer,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendAuditEmail,
};