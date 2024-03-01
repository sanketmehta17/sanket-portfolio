import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Testimonials({testimonialUpdatedFlag}){

    const [testimonials, setTestimonials] = useState([]);

    const testimonialsCopy = testimonials;

    const [curr, setCurr] = useState(-1)

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
        setCurr(-1);
    }, [testimonialUpdatedFlag])

    const next = () => {
        setCurr((prev) => (prev == testimonials.length - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        if(curr == testimonials.length - 2){
            testimonialsCopy.map((item) => {
                testimonials.push(item)
            })
        }
    }, [curr])

    useEffect(() => {
        let interval = 3000;
        if(curr == -1){
            interval = 500;
        }
        const slideInterval = setInterval(next, interval)
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
                            {testimonials.map((testimonial, index) => (
                                <>
                                {curr == -1 &&
                                <div key={index} class="carousel-item w-full">
                                    <div class="mx-auto max-w-2xl lg:max-w-4xl flex items-center justify-center w-56 h-60">
                                        <div role="status">
                                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                                }
                                {curr != -1 &&
                                <div key={index} class="transition-transform carousel-item w-full duration-700 ease-in-out" style={{transform: `translateX(-${curr * 100}%)`}}>
                                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                                    <>
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
                                        <hr class="w-48 h-1 mx-auto mt-6 border-0 rounded bg-gray-700" />
                                    </>
                                    </div>
                                </div>
                                }
                                </>   
                            ))}  
                        </div>
                        
                    </section>
                </div>
                }
        </>
    )
}