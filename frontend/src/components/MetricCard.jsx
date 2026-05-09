import React from 'react';

const MetricCard = ({
    title,
    value,
    unit,
    icon: Icon,
    isWarning = false,
    delay = 0,
    teamValue
}) => {
    return (
        <div
            className={`
                group relative overflow-hidden rounded-2xl border
                p-6 min-h-[220px]
                transition-all duration-500 ease-out
                hover:-translate-y-2 flex flex-col justify-between
                ${
                    isWarning
                        ? 'bg-zinc-950 border-red-500/20 hover:border-red-500/50 hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)]'
                        : 'bg-zinc-950 border-white/5 hover:border-indigo-500/40 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]'
                }
            `}
            style={{ 
                animationDelay: `${delay}ms`,
                animationFillMode: 'both' 
            }}
        >
            {/* Ambient Background Glow */}
            <div
                className={`
                    absolute -right-4 -top-4 w-32 h-32 rounded-full blur-[80px] transition-opacity duration-500 opacity-20 group-hover:opacity-40
                    ${isWarning ? 'bg-red-600' : 'bg-indigo-600'}
                `}
            />

            {/* Grain/Noise Overlay for Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 flex flex-col h-full">
                
                {/* Header Section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                            {title}
                        </span>
                        
                        {Icon && (
                            <div
                                className={`
                                    p-2.5 rounded-xl border transition-transform duration-500 group-hover:scale-110
                                    ${
                                        isWarning
                                            ? 'bg-red-500/5 border-red-500/20 text-red-400'
                                            : 'bg-zinc-900 border-white/10 text-indigo-400'
                                    }
                                `}
                            >
                                <Icon className="w-4 h-4" />
                            </div>
                        )}
                    </div>

                    <div className="flex items-baseline gap-1.5">
                        <h2
                            className={`
                                text-5xl font-semibold tracking-tighter
                                ${isWarning ? 'text-red-50 text-glow-red' : 'text-white'}
                            `}
                        >
                            {value}
                        </h2>
                        {unit && (
                            <span className="text-sm font-medium text-zinc-600 lowercase">
                                {unit}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Stats Section */}
                {teamValue && (
                    <div className="mt-auto pt-6">
                        <div className={`
                            relative overflow-hidden rounded-xl border p-3 flex items-center justify-between
                            ${isWarning 
                                ? 'bg-red-500/5 border-red-500/10' 
                                : 'bg-white/[0.02] border-white/5'
                            }
                        `}>
                            <div className="flex flex-col">
                                <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500">
                                    Team Avg
                                </span>
                                <span className={`text-sm font-medium ${isWarning ? 'text-red-200' : 'text-zinc-200'}`}>
                                    {teamValue}
                                    {unit && <span className="ml-0.5 text-[10px] text-zinc-500">{unit}</span>}
                                </span>
                            </div>

                            {/* Minimal Sparkline Placeholder or Trend Indicator */}
                            <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${isWarning ? 'bg-red-500' : 'bg-indigo-500'}`} />
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Accent Line */}
            <div className={`
                absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out
                ${isWarning ? 'bg-red-500 w-0 group-hover:w-full' : 'bg-indigo-500 w-0 group-hover:w-full'}
            `} />
        </div>
    );
};

export default MetricCard;