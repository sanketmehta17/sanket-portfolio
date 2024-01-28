import React from "react";

export default function About(){
    return(
        <div className="bg-white py-8 sm:py-8" id="Projects">
            <div className="bg-emerald-300 rounded-3xl mx-auto max-w-7xl px-6 py-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight py-6 text-gray-900 sm:text-4xl">About</h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-200 sm:pt-8 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <img className="rounded-3xl" src="./Images/Profile.JPG"></img>
                    </div>
                    <div>
                        <ul className="text-left leading-6 text-gray-600 list-disc">
                            <li>
                                A detail-oriented Software Developer with 1+ years of experience in end-to-end application design and development. 
                            </li>
                            <li>
                                Proficient in front-end and back-end technologies, cloud computing, and industry best practices (JIRA, Agile, Git, CI/CD). 
                            </li>
                            <li>
                                Collaborative and committed to delivering user-friendly, complex systems with API integrations, exceeding project requirements. 
                            </li>
                            <li>
                                Eager to continuously expand skillset, with a focus on full-stack development.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}