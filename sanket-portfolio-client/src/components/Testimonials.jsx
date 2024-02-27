import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Testimonials({testimonialUpdatedFlag}){

    const [testimonials, setTestimonials] = useState([]);

    const [curr, setCurr] = useState(0)

    useEffect(() => {
        const fetchTestimonials = async () => {
            try{
                const res = await axios.get("https://sanket-portfolio-server.vercel.app/getTestimonials")
                setTestimonials(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchTestimonials();
        setCurr(0);
    }, [testimonialUpdatedFlag])

    const next = () => {
        setCurr((prev) => (prev == testimonials.length - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        const slideInterval = setInterval(next, 3000)
        return() => clearInterval(slideInterval)
    })

    return(
        <>
            {testimonials.length > 0 && 
            <div id="Testimonials">
                <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <h2 className="text-3xl uppercase font-light tracking-tight text-gray-900 sm:text-4xl mb-4">Testimonials</h2>
                    <div className="carousel w-full">
                        {testimonials.reverse().map((testimonial, index) => (
                            <div key={index} class="transition-transform carousel-item w-full duration-700 ease-in-out" style={{transform: `translateX(-${curr * 100}%)`}}>
                                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                                    <figure className="mt-10 border border-gray-800 rounded-3xl p-6" key={testimonial.id}>
                                        <blockquote className="text-center break-words text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                            <p>
                                            “{testimonial.testimonial}”
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-10">
                                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                                <circle cx={1} cy={1} r={1} />
                                            </svg>
                                            <div className="text-gray-600">{testimonial.role}</div>
                                            </div>
                                        </figcaption> 
                                    </figure>
                                    <hr class="w-48 h-1 mx-auto mt-6 bg-gray-100 border-0 rounded dark:bg-gray-700" />
                                </div>
                            </div>
                        ))} 
                    </div>
                    
                </section>
            </div>
            }
        </>
    )
}