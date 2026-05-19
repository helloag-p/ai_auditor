const axios = require("axios");
const cheerio = require("cheerio");

const scrapeWebsite = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription =
      $('meta[name="description"]').attr(
        "content"
      ) || "";

    const headings = [];

    $("h1, h2").each((i, el) => {
      headings.push($(el).text().trim());
    });

    const paragraphs = [];

    $("p").each((i, el) => {
      const text = $(el).text().trim();

      if (text.length > 50) {
        paragraphs.push(text);
      }
    });

    return {
      success: true,
      title,
      metaDescription,
      headings: headings.slice(0, 10),
      content: paragraphs
        .slice(0, 15)
        .join(" "),
    };
  } catch (error) {
    console.log(
      `Scraping blocked or failed for ${url}`
    );

    return {
      success: false,
      title: "",
      metaDescription: "",
      headings: [],
      content: "",
    };
  }
};

module.exports = {
  scrapeWebsite,
};