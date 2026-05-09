import { useEffect, useState } from "react";
import axios from "axios";
import { Activity, Clock, Bug, GitMerge, Rocket, Clock3, TimerReset, GitPullRequest } from "lucide-react";
import MetricCard from "../components/MetricCard.jsx";
import DeveloperSelector from "../components/DeveloperSelector.jsx";
import InsightsPanel from "../components/InsightCard.jsx";
import Charts from "../components/Charts.jsx";
import DeveloperProfile from "../components/DeveloperProfile.jsx";

const Dashboard = () => {
    const [developers, setDevelopers] = useState([]);
    const [selectedDeveloper, setSelectedDeveloper] = useState("");
    const [metrics, setMetrics] = useState(null);
    const [insights, setInsights] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchDevelopers();
    }, []);

    const fetchDevelopers = async () => {
        try {
            const res = await axios.get("http://localhost:5000/developers");
            setDevelopers(res.data);
        } catch (error) {
            console.error("Failed to fetch developers:", error);
        }
    };

    const handleDeveloperSelect = async (developerId) => {
        setSelectedDeveloper(developerId);
        if (!developerId) {
            setMetrics(null);
            setInsights(null);
            return;
        }

        setLoading(true);
        try {
            const [metricsRes, insightsRes] = await Promise.all([
                axios.get(`http://localhost:5000/metrics/${developerId}`),
                axios.get(`http://localhost:5000/insights/${developerId}`)
            ]);
            setMetrics(metricsRes.data);
            setInsights(insightsRes.data);
        } catch (error) {
            console.error("Error fetching developer data:", error);
        } finally {
            setLoading(false);
        }
    };
    // Find the full developer object from the array based on the selected ID
const selectedDeveloperData = developers.find(
    (dev) => dev.developer_id === selectedDeveloper
);

    return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
        
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

            {/* Header */}
            <header className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                
                <div className="max-w-2xl">

    <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-3">
        DevLens 
    </p>

    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        Developer Productivity Dashboard
    </h1>

    <p className="text-zinc-400 text-base mt-4 leading-relaxed">
        DevLens transforms engineering metrics into actionable productivity insights,
        helping teams monitor delivery flow, deployment health, and software quality.
    </p>

</div>

                {/* Selector */}
                <div className="w-full lg:w-[320px]">
                    <DeveloperSelector
                        developers={developers}
                        selectedDeveloper={selectedDeveloper}
                        onSelect={handleDeveloperSelect}
                    />
                </div>
            </header>

<DeveloperProfile developer={selectedDeveloperData} />
            {/* Loading */}
            {loading && (
                <div className="space-y-6 animate-pulse">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="h-[220px] rounded-3xl bg-zinc-900 border border-zinc-800"
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <div className="h-[420px] rounded-3xl bg-zinc-900 border border-zinc-800" />
                        <div className="h-[420px] rounded-3xl bg-zinc-900 border border-zinc-800" />
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!loading && !metrics && (
                <div className="flex flex-col items-center justify-center text-center py-28 border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/30">
                    
                    <div className="p-5 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                        <Activity className="w-10 h-10 text-indigo-300" />
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-3">
                        Select a Developer
                    </h2>

                    <p className="text-zinc-400 max-w-md leading-relaxed">
                        Choose an engineer from the dropdown to view
                        productivity metrics, deployment trends,
                        delivery performance, and AI-generated insights.
                    </p>
                </div>
            )}

            {/* Dashboard Content */}
            {!loading && metrics && (
                <div className="space-y-10">

                    {/* Section Header */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-2">
                                Performance Overview
                            </p>

                            <h2 className="text-3xl font-bold text-white">
                                Productivity Metrics
                            </h2>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                        
                        <MetricCard
                            title="PR Throughput"
                            value={metrics.prThroughput}
                            icon={GitPullRequest}
                            delay={0}
                        />

                        <MetricCard
                            title="Deploys"
                            value={metrics.deploymentFrequency}
                            icon={Rocket}
                            delay={100}
                        />

                        <MetricCard
                            title="Bug Rate"
                            value={metrics.bugRate}
                            icon={Bug}
                            isWarning={Number(metrics.bugRate) > 0.2}
                            delay={200}
                        />

                        <MetricCard
                            title="Lead Time"
                            value={metrics.leadTime}
                            unit="days"
                            icon={Clock3}
                            teamValue={metrics.teamLeadTime}
                            delay={300}
                        />

                        <MetricCard
                            title="Cycle Time"
                            value={metrics.cycleTime}
                            unit="days"
                            icon={TimerReset}
                            teamValue={metrics.teamCycleTime}
                            delay={400}
                        />
                    </div>

                    {/* Charts */}
                    <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "500ms" }}
                    >
                        <Charts metrics={metrics} />
                    </div>

                    {/* Insights */}
                    <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "600ms" }}
                    >
                        <InsightsPanel insights={insights} />
                    </div>
                </div>
            )}
        </div>
    </div>
);
};

export default Dashboard;