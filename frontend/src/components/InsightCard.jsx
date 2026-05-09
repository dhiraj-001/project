import React from 'react';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

const InsightsPanel = ({ insights }) => {
    if (!insights) return null;

    return (
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-indigo-950/40 backdrop-blur-xl shadow-2xl">
            
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 p-8">
                
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 shadow-lg">
                            <Lightbulb className="w-6 h-6 text-indigo-300" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                System Interpretation
                            </h2>
                            <p className="text-sm text-zinc-400 mt-1">
                                AI-generated analysis and optimization suggestions
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        Smart Insights
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Observations */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                        
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />

                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                                <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.2em]">
                                    Observations
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {insights.insights.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                                    >
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                        <span className="group-hover:text-zinc-200 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                        
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-[0.2em]">
                                    Recommended Actions
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {insights.recommendations.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm leading-relaxed"
                                    >
                                        <div className="p-1 rounded-md bg-purple-500/10 border border-purple-500/20 mt-0.5 shrink-0">
                                            <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
                                        </div>

                                        <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InsightsPanel;