import React from 'react';

const steps = [
    { label: 'About', icon: '📄' },
    { label: 'Roles', icon: '📌' },
    { label: 'Basic Info', icon: '👤' },
    { label: 'Skills',icon:'🛠️' },
];

const Progress = ({ currentStep }) => {
    return (
        <div className="flex items-center justify-between w-full px-6 py-4">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-white mb-2 ${index <= currentStep ? 'bg-[#1e0d67]' : 'bg-[#bab1e2]'
                            }`}
                    >
                        {step.icon}
                    </div>
                    <div className="text-sm text-[#1e0d67]">{step.label}</div>
                    {index < steps.length - 1 && (
                        <div className="flex-grow w-8 h-1 bg-gray-300 mx-4"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Progress;
