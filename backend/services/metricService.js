import { getSheetData } from "./excelService.js";

export const calculateMetrics = (developerId) => {
  // Load sheets
  const prs = getSheetData("Fact_Pull_Requests");

  const issues = getSheetData("Fact_Jira_Issues");

  const deployments = getSheetData(
    "Fact_CI_Deployments"
  );

  const bugs = getSheetData("Fact_Bug_Reports");

  // =========================
  // PR THROUGHPUT
  // =========================

  const developerPRs = prs.filter(
    (pr) =>
      pr.developer_id === developerId &&
      pr.status === "merged"
  );

  const prThroughput = developerPRs.length;

  // =========================
  // DEPLOYMENT FREQUENCY
  // =========================

  const developerDeployments =
    deployments.filter(
      (deployment) =>
        deployment.developer_id === developerId &&
        deployment.status === "success"
    );

  const deploymentFrequency =
    developerDeployments.length;

  // =========================
  // BUG RATE
  // =========================

  const developerIssues = issues.filter(
    
    (issue) =>
      issue.developer_id === developerId &&
      issue.status === "Done"
  );

  const selectedDeveloperInfo =
  developerIssues[0];

const teamName =
  selectedDeveloperInfo?.team_name;

  const teamIssues = issues.filter(
  (issue) =>
    issue.team_name === teamName &&
    issue.status === "Done"
);

const teamDeployments =
  deployments.filter(
    (deployment) =>
      deployment.team_name ===
        teamName &&
      deployment.status === "success"
  );

  const developerBugs = bugs.filter(
    (bug) =>
      bug.developer_id === developerId &&
      bug.escaped_to_prod === "Yes"
  );

  const bugRate =
    developerIssues.length > 0
      ? (
          developerBugs.length /
          developerIssues.length
        ).toFixed(2)
      : 0;

  // =========================
  // LEAD TIME
  // =========================

  const totalLeadTime =
    developerDeployments.reduce(
      (sum, deployment) =>
        sum + deployment.lead_time_days,
      0
    );

  const leadTime =
    developerDeployments.length > 0
      ? (
          totalLeadTime /
          developerDeployments.length
        ).toFixed(1)
      : 0;

   const totalTeamLeadTime =
  teamDeployments.reduce(
    (sum, deployment) =>
      sum + deployment.lead_time_days,
    0
  );

const teamLeadTime =
  teamDeployments.length > 0
    ? (
        totalTeamLeadTime /
        teamDeployments.length
      ).toFixed(1)
    : 0;   

  // =========================
  // CYCLE TIME
  // =========================

  const totalCycleTime =
    developerIssues.reduce(
      (sum, issue) =>
        sum + issue.cycle_time_days,
      0
    );

  const cycleTime =
    developerIssues.length > 0
      ? (
          totalCycleTime /
          developerIssues.length
        ).toFixed(1)
      : 0;

      const totalTeamCycleTime =
  teamIssues.reduce(
    (sum, issue) =>
      sum + issue.cycle_time_days,
    0
  );

const teamCycleTime =
  teamIssues.length > 0
    ? (
        totalTeamCycleTime /
        teamIssues.length
      ).toFixed(1)
    : 0;

  return {
  prThroughput,
  deploymentFrequency,
  bugRate,
  leadTime,
  cycleTime,
  teamLeadTime,
  teamCycleTime,
};
};