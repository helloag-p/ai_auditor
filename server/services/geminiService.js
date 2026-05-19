const { GoogleGenerativeAI } = require(
  "@google/generative-ai"
);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generateAudit = async ({
  companyName,
  website,
  scrapedData,
}) => {
  try {
const prompt = `
You are a senior AI growth consultant working with SaaS, B2B, consulting, and technology companies.

Your task is to generate a highly personalized business audit report.

The report must:
- feel executive-level
- avoid generic AI wording
- include practical business insights
- sound like it was written by a real consultant
- focus on actionable improvements
- reference the company's positioning and business model

${
  scrapedData.success
    ? "Website data was successfully scraped."
    : "Website scraping failed. Use publicly known company context and business understanding."
}

COMPANY DETAILS:

Company Name:
${companyName}

Website:
${website}

Website Title:
${scrapedData.title}

Meta Description:
${scrapedData.metaDescription}

Website Headings:
${scrapedData.headings.join(", ")}

Website Content:
${scrapedData.content}

Generate a professional report with these sections:

1. Executive Summary
- Brief overview of the company
- Brand positioning
- Perceived target audience
- Key strengths

2. Website & UX Audit
- User experience observations
- Conversion flow
- Messaging clarity
- Design trust signals
- Mobile experience
- CTA effectiveness

3. SEO & Content Opportunities
- Search visibility improvements
- Content gaps
- Technical SEO suggestions
- Long-tail keyword opportunities

4. AI & Automation Opportunities
- Specific AI workflows relevant to this business
- Customer support automation
- Marketing automation
- Internal productivity opportunities
- AI personalization ideas

5. Growth Recommendations
- High-impact improvements
- Product positioning opportunities
- Customer acquisition ideas
- Retention suggestions
- Strategic partnerships

6. Final Strategic Insight
- One strong concluding recommendation for leadership

IMPORTANT:
- Be specific and practical
- Avoid repeating the same ideas
- Avoid generic filler sentences
- Write in a polished consulting tone
- Use bullet points where useful
`;

    const result = await model.generateContent(
      prompt
    );

    return result.response.text();
  } catch (error) {
    console.log("Gemini Error:", error);

    return "AI report generation failed.";
  }
};

module.exports = {
  generateAudit,
};