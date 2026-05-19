# AI Lead Automation System

An AI-powered lead intake and automated business audit generation platform built as part of the SimplifIQ AI Software Developer Intern Assessment.

The system automatically:

* Captures lead information
* Scrapes company websites
* Generates AI-powered business audit reports
* Creates professional PDF reports
* Sends automated outreach emails
* Provides instant report download access

---

# Features

## End-to-End Automation

* Lead intake form
* Website scraping
* AI business analysis
* PDF generation
* Automated email delivery

## AI-Powered Company Audits

The system generates personalized reports including:

* Executive Summary
* Website & UX Audit
* SEO Recommendations
* AI Automation Opportunities
* Growth Recommendations
* Strategic Insights

## Professional PDF Reports

Reports are generated dynamically using Puppeteer and custom HTML templates with:

* Executive styling
* Structured sections
* Improved typography
* Modern visual hierarchy

## Instant Report Download

Generated reports are instantly downloadable directly from the frontend after generation.

## Automated Email Workflow

The system automatically emails generated reports using Resend.

---

# Tech Stack

## Frontend

* Next.js 16
* React
* Tailwind CSS v4
* Framer Motion
* Axios

## Backend

* Node.js
* Express.js
* Puppeteer
* Gemini API
* Resend API
* Cheerio

---

# Project Structure

/client
/server

/client

* Next.js frontend

/server

* Express backend
* AI services
* PDF generation
* Email automation

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repo-url>
```

---

# Backend Setup

## Install Dependencies

```bash
cd server
npm install
```

## Create `.env`

```env
PORT=5000

GEMINI_API_KEY=your_gemini_key

RESEND_API_KEY=your_resend_key

EMAIL_FROM=onboarding@resend.dev
```

## Run Backend

```bash
npm run dev
```

---

# Frontend Setup

## Install Dependencies

```bash
cd client
npm install
```

## Run Frontend

```bash
npm run dev
```

---

# API Endpoint

## Create Lead

POST `/api/leads`

Example Request:

```json
{
  "name": "Parv Agarwal",
  "email": "example@gmail.com",
  "companyName": "Stripe",
  "website": "https://stripe.com"
}
```

---

# Workflow

1. User submits lead form
2. Backend scrapes website data
3. Gemini generates AI audit
4. PDF report is generated
5. Email is triggered automatically
6. Report becomes downloadable instantly

---

# Important Note About Email Delivery

This project uses Resend's free-tier testing environment.

Because the free testing domain:

```txt
onboarding@resend.dev
```

only allows sending emails to verified addresses associated with the Resend account, email delivery may not work for arbitrary external email addresses during testing.

To ensure evaluators can still fully test the platform:

* the email workflow is still executed successfully
* and the generated PDF report is also made instantly downloadable from the frontend

In a production environment, this limitation can be removed by connecting a verified custom domain inside Resend.

---

# Error Handling

The system includes graceful handling for:

* Website scraping failures
* API failures
* AI generation retries
* Missing website data
* PDF generation issues

---

# Future Improvements

* Google Drive PDF archiving
* Google Sheets lead tracking
* CRM integration
* Authentication & dashboard
* Multi-report templates
* AI scoring system

---

# Deployment

Frontend can be deployed on:

* Vercel

Backend can be deployed on:

* Render

---

# Author

Parv Agarwal

GitHub:
https://github.com/helloag-p

LinkedIn:
https://linkedin.com/in/parv-agarwal-09b042215
