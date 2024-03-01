'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'flowbite-react';

export default function ModalTestimonial({testimonialFlag}){

    const [openModal, setOpenModal] = useState(false);

    const [submitted, setSubmitted] = useState(null)

    const [loading, setLoading] = useState(false)

    const [nameError, SetNameError] = useState('')
    const [roleError, SetRoleError] = useState('')
    const [testimonialError, SetTestimonialError] = useState('')
    
    const navigate = useNavigate()
    
    const [testimonial, setTestimonial] = useState({
        name: "",
        role: "",
        testimonial: "",
    });

    const handleChange = (e) => {
        setTestimonial(prev => ({
            ...prev, [e.target.name] : e.target.value
        }));
    }

    function valid(){
        let valid = true;
        if(testimonial.name.length == 0){
            SetNameError("Please enter a name!")
            valid = false;
        }
        else{
            SetNameError("")
        }
        if(testimonial.role.length == 0){
            SetRoleError("Please enter a role!")
            valid = false;
        }
        else{
            SetRoleError("")
        }
        if(testimonial.testimonial.length == 0){
            SetTestimonialError("Please enter testimonial!")
            valid = false;
        }
        else{
            SetTestimonialError("")
        }
        return valid;
    }

    function resetInputs(){
        setTestimonial({
            name: "",
            role: "",
            testimonial: "",
        });
    }

    function resetError(){
        SetNameError("")
        SetRoleError("")
        SetTestimonialError("")
    }

    function closeModal(){
        resetInputs();
        resetError();
        setOpenModal(false)
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        if(valid()){
            try{
                await axios.post("https://sanket-portfolio-server.vercel.app/createTestimonial", testimonial)
                setSubmitted(true);
                testimonialFlag(true);
                setOpenModal(false)
                resetInputs();
                setInterval(() => {
                    setSubmitted(null);
                }, 3000);
            }catch(err){
                setSubmitted(false);
                setInterval(() => {
                    setSubmitted(null);
                }, 3000);
            }
        }
        setLoading(false)
    }

    return(
        <> 
        <div id="ModalTEstimonial" className="bg-white text-black mx-auto mb-8 px-8 max-w-fit ">
            <div className="mb-4 p-2 rounded-3xl lg:flex lg:gap-2">
                <p className="font-normal text-black my-auto sm:mb-2 mb-2">
                    Would you like to add a testimonial?
                </p>
                <button onClick={() => setOpenModal(true)} className="text-sm mb-6 sm:mb-0 text-white bg-gray-800 rounded-lg border hover:text-black hover:bg-white hover:border-black">Add a Testimonial</button>
            </div>
        </div>
        <Modal show={openModal} onClose={() => closeModal()}>
            <Modal.Body>
                <form name="formTestimonial" method="post" className="p-4 md:p-6">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="name" id="name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your name" required />
                            {nameError.length > 0 && <p class="mt-2 text-sm text-left text-red-500"><span class="font-medium">{nameError}</span></p>}
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <input type="text" name="role" id="role" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your role" required />
                            {roleError.length > 0 && <p class="mt-2 text-sm text-left text-red-500"><span class="font-medium">{roleError}</span></p>}
                        </div>                            
                        <div className="col-span-2">
                            <textarea id="testimonial" name="testimonial" rows="4" onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write testimony here" required></textarea>                    
                            {testimonialError.length > 0 && <p class="mt-2 text-sm text-left text-red-500"><span class="font-medium">{testimonialError}</span></p>}
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:border-black">
                        Add
                    </button>
                    <button onClick={() => closeModal()} type="button" className="ms-2 text-black hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Cancel</button>
                </form>
                {loading &&
                <>
                    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </>
                }
            </Modal.Body>
        </Modal>
        {submitted != null && submitted && 
            <>
                <div id="toast-success" class="fixed flex items-center w-full max-w-fit p-4 space-x-4 text-gray-500 bg-white rounded-lg shadow top-[5rem] right-4 sm:right-5 space-x" role="alert">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="sr-only">Check icon</span>
                    </div>
                    <div class="text-sm text-left ms-3">Testimonial submitted successfully! Thank you!.</div>
                </div>
            </>
            }
            {submitted != null && !submitted && 
            <>
                <div id="toast-danger" class="fixed flex items-center w-full max-w-fit p-4 space-x-4 text-gray-500 bg-white rounded-lg shadow top-[5rem] right-4 sm:right-5 space-x" role="alert">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                        </svg>
                        <span class="sr-only">Error icon</span>
                    </div>
                    <div class="text-sm text-left ms-3">Sorry! Something went wrong. Please try again later.</div>
                </div>
            </>
        }
        </>
    )
}