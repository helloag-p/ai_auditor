const generateHTMLTemplate = ({
  companyName,
  report,
}) => {
  const formattedReport = report
    .replace(
      /## (.*?)(<br\/>|$)/g,
      `<div class="section-title">$1</div>`
    )

    .replace(
      /\*\*(.*?)\*\*/g,
      `<span class="highlight">$1</span>`
    )

    .replace(/\n/g, "<br/>");

  return `
  <html>

    <head>

      <style>

        body{
          font-family: Arial, sans-serif;
          background:#f3f4f6;
          padding:40px;
          color:#111827;
        }

        .container{
          max-width:900px;
          margin:auto;
        }

        .hero{
          background:#0f172a;
          color:white;
          padding:50px;
          border-radius:24px;
        }

        .hero h1{
          font-size:42px;
          margin:0;
        }

        .hero p{
          opacity:0.8;
          margin-top:10px;
        }

        .stats{
          display:flex;
          gap:20px;
          margin-top:25px;
        }

        .stat{
          background:#1e293b;
          padding:15px 20px;
          border-radius:14px;
          font-size:14px;
        }

        .content{
          background:white;
          margin-top:30px;
          border-radius:24px;
          padding:40px;
          line-height:1.9;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.08);
        }

        .section-title{
          font-size:28px;
          font-weight:bold;
          margin-top:35px;
          margin-bottom:18px;
          color:#0f172a;
          border-left:6px solid #2563eb;
          padding-left:14px;
        }

        .highlight{
          color:#2563eb;
          font-weight:bold;
        }

        .footer{
          margin-top:40px;
          text-align:center;
          color:#6b7280;
          font-size:14px;
        }

      </style>

    </head>

    <body>

      <div class="container">

        <div class="hero">

          <h1>
            ${companyName} AI Audit
          </h1>

          <p>
            Personalized business intelligence report
          </p>

          <div class="stats">

            <div class="stat">
              AI Analysis
            </div>

            <div class="stat">
              SEO Insights
            </div>

            <div class="stat">
              Growth Recommendations
            </div>

          </div>

        </div>

        <div class="content">
          ${formattedReport}
        </div>

        <div class="footer">
          Generated using AI-powered business analysis
        </div>

      </div>

    </body>

  </html>
  `;
};

module.exports = {
  generateHTMLTemplate,
};
