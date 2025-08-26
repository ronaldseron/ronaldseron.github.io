import React, { useState } from 'react'
import frontendLogo from "../data/frontend-logo.js";
import backendLogo from "../data/backend-logo.js";
import toolsLogo from "../data/tools-logo.js";
import ExtendLine from "./ExtendLine.jsx";
import { motion } from "framer-motion";
import { scrollAnimations } from "../hooks/useFadeInOnScroll.js";
import SkillCards from "./SkillCards.jsx";

const Skills = () => {

    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
    { label: "Frontend", logos: frontendLogo },
    { label: "Backend", logos: backendLogo },
    { label: "Tools", logos: toolsLogo }
    ];


  return (
    <div className=''>
        <div className='w-full flex flex-col bg-white'>
            <div className="flex flex-col justify-center items-start sm:px-8 px-4">
                <div className=" relative flex items-center gap-2 bg-tertiary md:px-3 md:py-1.5 px-2 py-1 rounded-full border border-line ">
                    <ExtendLine />
                    <div className=" w-2 h-2 bg-primary rounded-full"></div>
                    <p className=" text-primary font-medium lg:text-sm text-xs">
                        MY SKILLS
                    </p>
                </div>
                <div className="relative w-full flex items-center max-sm:flex-col max-md:items-start justify-between md:py-5 py-3 max-md:gap-4">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium text-primary">
                    Technology Used
                    </h2>
                    {/* Tab Navigation */}
                    <div className="relative flex gap-4 max-sm:w-full ">
                        {tabs.map((tab, index) => (
                        <button
                            key={tab.label}
                            className={` md:w-32 w-full py-1 text-center transition-all duration-300 z-30 cursor-pointer max-sm:text-sm ${
                            activeTab === index 
                                ? "bg-tertiary text-primary rounded-sm border-x border-line border-t border-t-line border-b" 
                                : "bg-white text-gray-600 rounded-sm hover:bg-gray-100 border border-line"
                            }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full relative sm:text-xl text-sm font-light bg-tertiary p-1">
            <ExtendLine />


            {/* Tab Content */}
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] max-md:grid-cols-2 gap-1">
                <SkillCards logos={tabs[activeTab].logos} scrollAnimations={scrollAnimations} />
            </div>

            </div>

        </div>
    </div>
  )
}

export default Skills;