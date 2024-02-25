import React from "react";

export default function AddTestimonial(){
    return(
        <>
        <div id="Resume" className="bg-white text-black mx-auto mb-8 px-8 max-w-fit ">
            <div className="mb-4 p-2 rounded-3xl lg:flex lg:gap-2">
                <p className="font-normal text-black my-auto sm:mb-2 mb-2">
                    Would you like to add a testimonial?
                </p>
                <button data-modal-target="testimony-modal" data-modal-toggle="testimony-modal" class="text-sm mb-6 sm:mb-0 text-white rounded-lg border hover:text-black hover:bg-white hover:border-black">Add a Testimonial</button>
            </div>
        </div> 
        </>
    )
}