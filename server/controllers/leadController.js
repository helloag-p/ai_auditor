const {
  scrapeWebsite,
} = require("../services/scrapeService");

const {
  generateAudit,
} = require("../services/geminiService");

const {
  generatePDF,
} = require("../services/pdfService");

const {
  sendAuditEmail,
} = require("../services/emailService");

const createLead = async (req, res) => {
  try {
    const {
      name,
      email,
      companyName,
      website,
    } = req.body;

    console.log("STEP 1 → Scraping Website");

    const scrapedData =
      await scrapeWebsite(website);

    console.log("STEP 2 → Generating AI Report");

    const report = await generateAudit({
      companyName,
      website,
      scrapedData,
    });

    console.log("STEP 3 → Creating PDF");

    let pdfPath = null;

try {

  pdfPath = await generatePDF({
    companyName,
    report,
  });

} catch (err) {

  console.log(
    "PDF generation failed"
  );

  pdfPath = null;
}

    console.log("PDF PATH:", pdfPath);

    console.log("STEP 4 → Sending Email");

if (pdfPath) {

  await sendAuditEmail({
    email,
    companyName,
    pdfPath,
  });

} else {

  console.log(
    "Skipping email because PDF generation failed"
  );
}

    return res.status(200).json({
      success: true,
      message:
        "AI audit generated successfully",
      
  pdfPath: pdfPath
    ? `${process.env.BASE_URL}/${pdfPath}`
    : null,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Workflow failed",
    });

  }
};

module.exports = {
  createLead,
};