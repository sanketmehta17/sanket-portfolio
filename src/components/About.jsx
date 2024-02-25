import React from "react";

export default function About(){
    return(
        <div className="bg-white py-8 px-8" id="About">
            <div className=" bg-gray-200 rounded-3xl mx-auto max-w-screen-2xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 pb-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl uppercase font-light tracking-tight py-4 text-gray-900 sm:text-4xl">About Me</h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-900 pt-8 lg:max-w-none sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="my-auto">
                        <img className="rounded-3xl" src="./Images/Profile.JPG"></img>
                    </div>
                    <div className="text-justify lg:text-sm xl:text-lg leading-7 text-gray-600 space-y-5">
                        <p>
                        After completing my Bachelor's in Information & Technology in India, I pursued Master's in Applied Computer Science at Dalhousie University in Canada. 
                        Subsequently, I secured a Software Developer position in September 2023, where I oversee end-to-end development of line-of-business applications. 
                        </p>
                        <p>
                        The experience of leaving my home country has provided invaluable life lessons, complemented by a strong technical foundation gained through diverse projects and teamwork. In my current 
                        role within a small IT team, I've honed decision-making, leadership, and critical thinking skills. My collaborative approach and commitment to user-friendly and 
                        complex systems, have consistently exceeded project requirements. 
                        </p>
                        <p>
                            As I continue to thrive in the dynamic field of software development, my focus remains on mastering fullstack development while staying abreast
                            of emerging technologies. I am enthusiastic about the endless opportunities for learning and growth that lie ahead in this ever-evolving landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}