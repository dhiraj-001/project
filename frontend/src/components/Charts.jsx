import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { TrendingUp, Bug } from "lucide-react";

const Charts = ({ metrics }) => {
  if (!metrics) return null;

  // Demo Trend Data
  const prData = [
    { month: "Feb", value: Math.max(0, metrics.prThroughput - 2) },
    { month: "Mar", value: Math.max(0, metrics.prThroughput - 1) },
    { month: "Apr", value: Number(metrics.prThroughput) },
  ];

  const bugData = [
    { month: "Feb", value: Math.max(0, Number(metrics.bugRate) - 0.05) },
    { month: "Mar", value: Math.max(0, Number(metrics.bugRate) - 0.02) },
    { month: "Apr", value: Number(metrics.bugRate) },
  ];

  const customTooltipStyle = {
    backgroundColor: "#09090b",
    borderColor: "#27272a",
    color: "#fafafa",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    padding: "10px 14px",
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
      
      {/* PR Throughput Chart */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-indigo-950/20 p-7 backdrop-blur-xl shadow-2xl">
        
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-indigo-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">
                Engineering Velocity
              </p>

              <h2 className="text-2xl font-semibold text-white">
                PR Throughput
              </h2>

              <p className="text-sm text-zinc-400 mt-1">
                Pull requests merged over time
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <TrendingUp className="w-5 h-5 text-indigo-300" />
            </div>
          </div>

          {/* Chart */}
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={prData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <CartesianGrid
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                />

                <Tooltip
                  contentStyle={customTooltipStyle}
                  itemStyle={{ color: "#a5b4fc" }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#818cf8"
                  strokeWidth={3}
                  dot={{
                    fill: "#818cf8",
                    strokeWidth: 0,
                    r: 5,
                  }}
                  activeDot={{
                    r: 7,
                    strokeWidth: 0,
                    fill: "#c7d2fe",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bug Rate Chart */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-purple-950/20 p-7 backdrop-blur-xl shadow-2xl">
        
        {/* Glow */}
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">
                Product Quality
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Escaped Bug Rate
              </h2>

              <p className="text-sm text-zinc-400 mt-1">
                Production defects trend analysis
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <Bug className="w-5 h-5 text-purple-300" />
            </div>
          </div>

          {/* Chart */}
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={bugData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <CartesianGrid
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={customTooltipStyle}
                  itemStyle={{ color: "#d8b4fe" }}
                  formatter={(value) => [
                    Number(value).toFixed(2),
                    "Bug Rate",
                  ]}
                />

                <Bar
                  dataKey="value"
                  fill="#c084fc"
                  radius={[10, 10, 0, 0]}
                  maxBarSize={55}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;