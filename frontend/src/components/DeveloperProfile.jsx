import React from 'react';
import {
    User2,
    Users,
    ShieldCheck,
    BriefcaseBusiness
} from 'lucide-react';

const DeveloperProfile = ({ developer }) => {
    if (!developer) return null;

    return (
        <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-indigo-950/20 p-8 shadow-2xl backdrop-blur-xl animate-fade-in-up mb-10"
            style={{ animationDelay: '50ms' }}
        >
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">

                    <div className="flex items-center gap-5">
                        
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shadow-lg">
                            <User2 className="w-10 h-10 text-indigo-300" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">
                                Developer Profile
                            </p>

                            <h2 className="text-4xl font-bold text-white tracking-tight">
                                {developer.developer_name}
                            </h2>

                            <p className="text-zinc-400 mt-2">
                                Engineering performance overview & delivery insights
                            </p>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="w-fit px-5 py-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 font-medium shadow-lg backdrop-blur-sm">
                        {developer.level || "Engineer"}
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Team */}
                    <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all duration-300">
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                <Users className="w-4 h-4 text-indigo-300" />
                            </div>

                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Team
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-zinc-100">
                            {developer.team_name}
                        </h3>
                    </div>

                    {/* Manager */}
                    <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all duration-300">
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                <ShieldCheck className="w-4 h-4 text-purple-300" />
                            </div>

                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Manager
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-zinc-100">
                            {developer.manager_name}
                        </h3>
                    </div>

                    {/* Service */}
                    <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all duration-300">
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                <BriefcaseBusiness className="w-4 h-4 text-emerald-300" />
                            </div>

                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Service Type
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-zinc-100 capitalize">
                            {developer.service_type}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperProfile;