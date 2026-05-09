# DevLens Backend

DevLens Backend powers the Developer Productivity Insights Dashboard by processing engineering data from Excel workbooks and exposing productivity metrics and insights through REST APIs.

The backend:
- reads Excel-based engineering data
- calculates developer productivity metrics
- generates insights and recommendations
- exposes APIs for frontend visualization

---

# Tech Stack

- Node.js
- Express.js
- XLSX
- CORS

---

# Features

## Excel Data Processing
Reads engineering data from workbook sheets:
- Developers
- Jira Issues
- Pull Requests
- CI/CD Deployments
- Bug Reports

---

## Productivity Metrics

The backend calculates:

### PR Throughput
Count of merged pull requests.

### Deployment Frequency
Count of successful production deployments.

### Bug Rate

:contentReference[oaicite:0]{index=0}

### Lead Time
Average time taken for code changes to reach production.

### Cycle Time
Average time taken for issues to move from development to completion.

---

## Insights Engine

The backend generates:
- workflow observations
- quality analysis
- engineering recommendations

using rule-based analysis.

Example:
- high bug rate detection
- deployment bottleneck detection
- delivery quality tradeoff analysis

---

# Project Structure

```bash
backend/
│
├── data/
│   └── workbook.xlsx
│
├── routes/
│   ├── developerRoutes.js
│   ├── metricRoutes.js
│   └── insightRoutes.js
│
├── services/
│   ├── excelService.js
│   ├── metricService.js
│   └── insightService.js
│
├── server.js
└── package.json
```

---

# Installation

## Clone Project

```bash
git clone <repository-url>
```

---

## Move to Backend

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

# Required Packages

```bash
npm install express cors xlsx
```

---

# Start Backend Server

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Get Developers

```bash
GET /developers
```

Returns list of developers from workbook.

---

## Get Metrics

```bash
GET /metrics/:developerId
```

Returns:
- PR Throughput
- Deployment Frequency
- Bug Rate
- Lead Time
- Cycle Time

---

## Get Insights

```bash
GET /insights/:developerId
```

Returns:
- engineering insights
- workflow observations
- actionable recommendations

---

# System Workflow

```text
Excel Workbook
        ↓
XLSX Processing
        ↓
Metric Calculation Engine
        ↓
Insights Engine
        ↓
REST APIs
        ↓
Frontend Dashboard
```

---

# Design Decisions

The backend was intentionally designed as a lightweight MVP focused on:
- explainability
- rapid iteration
- simple architecture
- actionable insights

The assignment emphasized understanding engineering productivity rather than building enterprise-scale infrastructure.

---

# Future Improvements

Possible future enhancements:
- Real GitHub integration
- Jira API integration
- Historical trend storage
- Database support
- Team-level analytics
- AI-powered recommendations
- Predictive delivery analysis
- Authentication and RBAC

---

# Author

Developed as part of the Developer Productivity & Critical Thinking Assignment.