export const generateInsights = (metrics) => {
  const insights = [];

  const recommendations = [];

  // =========================
  // Bug Rate Analysis
  // =========================

  if (metrics.bugRate > 0.2) {
    insights.push(
      "Bug rate is high and affecting software quality."
    );

    recommendations.push(
      "Improve automated testing before deployments."
    );
  }

  // =========================
  // PR Throughput vs Quality
  // =========================

  if (
    metrics.prThroughput > 3 &&
    metrics.bugRate > 0.15
  ) {
    insights.push(
      "High delivery speed may be affecting code quality."
    );

    recommendations.push(
      "Reduce PR size and increase review coverage."
    );
  }

  // =========================
  // Lead Time
  // =========================

  if (metrics.leadTime > 3) {
    insights.push(
      "Lead time is higher than expected."
    );

    recommendations.push(
      "Investigate deployment and review bottlenecks."
    );
  }

  // =========================
  // Cycle Time
  // =========================

  if (metrics.cycleTime > 4) {
    insights.push(
      "Tasks are taking longer to complete."
    );

    recommendations.push(
      "Break issues into smaller deliverables."
    );
  }

  // =========================
  // Healthy Engineering Flow
  // =========================

  if (
    metrics.bugRate <= 0.1 &&
    metrics.leadTime <= 3
  ) {
    insights.push(
      "Engineering delivery flow looks healthy."
    );

    recommendations.push(
      "Maintain current development practices."
    );
  }

  return {
    insights,
    recommendations,
  };
};