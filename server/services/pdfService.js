const puppeteer = require("puppeteer");
const path = require("path");
const {
  generateHTMLTemplate,
} = require("../templates/reportTemplate");

const generatePDF = async ({
  companyName,
  report,
}) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    // const html = `
    // <html>
    //   <body style="font-family:Arial;padding:40px;">
    //     <h1>${companyName} AI Audit</h1>

    //     <div style="line-height:1.8;">
    //       ${report.replace(/\n/g, "<br/>")}
    //     </div>
    //   </body>
    // </html>
    // `;
    const html = generateHTMLTemplate({
  companyName,
  report,
});

    await page.setContent(html);

    const filePath = path.join(
      "uploads",
      `${companyName}.pdf`
    );

    await page.pdf({
      path: filePath,
      format: "A4",
    });

    await browser.close();

    return filePath;
  } catch (error) {
    console.log(error);

    return null;
  }
};

module.exports = {
  generatePDF,
};