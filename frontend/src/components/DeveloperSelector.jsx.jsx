import React from 'react';
import { Users } from 'lucide-react';

const DeveloperSelector = ({ developers, selectedDeveloper, onSelect }) => {
    return (
        <div className="relative w-full md:w-80">
            {/* Left Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-zinc-500" />
            </div>
            
            <select
                className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 p-3 outline-none transition-all appearance-none cursor-pointer shadow-sm"
                value={selectedDeveloper}
                onChange={(e) => onSelect(e.target.value)}
            >
                <option value="">Select Developer...</option>
                {developers.map((dev) => (
                    <option key={dev.developer_id} value={dev.developer_id}>
                        {dev.developer_name}
                    </option>
                ))}
            </select>

            {/* Right Custom Chevron */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    );
};

export default DeveloperSelector;