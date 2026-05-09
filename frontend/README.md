# DevLens Frontend

DevLens is a Developer Productivity Insights Dashboard that helps engineering teams understand delivery performance, software quality, and workflow bottlenecks through actionable metrics and insights.

This frontend application provides:
- Developer selection dashboard
- Productivity metric cards
- Engineering trend charts
- AI-style insights and recommendations

---

# Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- Recharts

---

# Features

## Developer Dashboard
Select a developer and view engineering productivity metrics.

## Productivity Metrics
The dashboard displays:
- PR Throughput
- Deployment Frequency
- Bug Rate
- Lead Time
- Cycle Time

## Engineering Insights
The system analyzes metrics and provides:
- workflow observations
- quality analysis
- actionable recommendations

## Charts
Trend visualizations for:
- PR throughput
- Bug rate

---

# Project Structure

```bash
src/
│
├── components/
│   ├── Charts.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

# Installation

## Clone Project

```bash
git clone <repository-url>
```

---

## Move to Frontend

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Requirement

Make sure backend server is running on:

```bash
http://localhost:5000
```

---

# API Endpoints Used

## Get Developers

```bash
GET /developers
```

## Get Metrics

```bash
GET /metrics/:developerId
```

## Get Insights

```bash
GET /insights/:developerId
```

---

# Dashboard Workflow

```text
Select Developer
        ↓
Fetch Metrics from Backend
        ↓
Display Dashboard Cards
        ↓
Show Engineering Insights
        ↓
Visualize Trends
```

---

# Design Goals

The frontend was designed with focus on:
- clarity
- simplicity
- explainability
- actionable insights

The goal was not just to visualize metrics, but also to help developers and managers understand what the metrics mean and what actions should be taken.

---

# Future Improvements

Possible future enhancements:
- Real Jira integration
- GitHub integration
- Historical analytics
- Team-level dashboards
- Predictive engineering insights
- AI-generated summaries
- Authentication and RBAC

---

# Author

Developed as part of the Developer Productivity & Critical Thinking Assignment.