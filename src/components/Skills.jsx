import React from "react";

const techs = [
    {
        id: 1,
        techName: "Front-end",
        techStacks: ["ReactJS", "BootStrap", "Tailwind CSS", "HTML5", "CSS3", "jQuery", "AJAX",]
    },
    {
        id: 2,
        techName: "Back-end",
        techStacks: [".NET", "Java", "Python", "JavaScript", "PHP", "C#", "C++", "C"]
    },
    {
        id: 3,
        techName: "Cloud",
        techStacks: ["Amazon Web Services", "Google Cloud Platform"]
    },
    {
        id: 4,
        techName: "Database",
        techStacks: ["MySQL", "SQL Server", "MongoDB", "Cloud Firestore", "Neo4J"]
    },
    {
        id: 5,
        techName: "Others",
        techStacks: ["REST", "Laravel", "Docker", "XSLT", "XML"]
    }
]
export default function Skills(){
    return(
        <>
            <div className="bg-white py-8 sm:py-8" id="Skills">
                <div className="bg-emerald-500 rounded-3xl mx-auto max-w-7xl px-6 py-6 lg:px-8">            
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 pt-6 sm:text-4xl">Technical Skills</h2>
                    </div>
                    <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t text-black border-gray-200 pt-6 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {techs.map((tech) => (
                            <div key={tech.id} className="flex-1 border border-black rounded-3xl">
                                <div className="text-2xl font-mono py-4 border-b">
                                    {tech.techName}
                                </div>                                    
                                    <div className="my-2 grid grid-cols-2">
                                        {tech.techStacks.map((techStack) => (
                                            <div>                                            
                                                {techStack}
                                            </div>
                                        ))} 
                                    </div>
                            </div>                                                       
                        ))}                        
                    </div>
                </div>
            </div>
        </>
    )
}