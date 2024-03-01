import React from "react";

const techs = [
    {
        id: 1,
        techName: "Front-end",
        techStacks: ["ReactJS", "BootStrap", "Tailwind CSS", "HTML5", "CSS3", "jQuery", "AJAX", "JavaScript"]
    },
    {
        id: 2,
        techName: "Back-end",
        techStacks: [".NET", "NodeJS", "Java", "Kotlin", "Android", "Python", "PHP", "C#", "C++", "C"]
    },
    {
        id: 3,
        techName: "Cloud",
        techStacks: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"]
    },
    {
        id: 4,
        techName: "Database",
        techStacks: ["MySQL", "SQL Server", "MongoDB", "Cloud Firestore", "Neo4J"]
    },
    {
        id: 5,
        techName: "Others",
        techStacks: ["REST", "Laravel", "Docker", "XSLT", "XML", "MVC"]
    }
]
export default function Skills(){
    return(
        <>
            <div className="bg-white py-8 px-8" id="Skills">
                <div className="bg-gray-200 rounded-3xl mx-auto max-w-screen-2xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 pb-6 lg:px-8">            
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl uppercase font-light tracking-tight text-gray-900 py-4 sm:text-4xl">Technical Skills</h2>
                    </div>
                    <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 border-t text-black whitespace-nowrap border-gray-900 pt-6 sm:pt-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {techs.map((tech) => (
                            <div key={tech.id} className="text-left">
                                <div className="text-2xl font-mono">
                                    {tech.techName}
                                </div>                                    
                                <div className={"my-2 grid " + (tech.techStacks.length > 2 ? "grid-cols-2" : "grid-cols-1")}>
                                    {tech.techStacks.map((techStack, index) => (
                                        <div key={index}>                                            
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