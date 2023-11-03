import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import done from "../../animation/done.json";
import contact from "../../animation/contact.json";
import Lottie from 'lottie-react';
 
export default function Contact() {
  const [state, handleSubmit] = useForm("mjvqzyor");

  return <>
  
  <div id='contact'  className="  py-12  gap-3 bodyColor lg:gap-0  lg:mt-9 ">
      <h1 className='text-4xl mb-12 bodyColor  text-center tracking-widest italic	'> " Contact "</h1>
      <div className=" grid   lg:grid-cols-5 md:grid-cols-2  ">
        <div className="col-span-3 ">
          <h1 className='text-2xl mb-4 border w-fit p-2 btnColor proColor font-mono rounded-lg'>GET IN TOUCH</h1>
          <h5 className='text-2xl'>If you have any questions or want to work with me, please fill the form and I will get back to you as soon as possible. I look forward to hearing from you.</h5>
         
          <div className=" mt-9"> 
            <form onSubmit={handleSubmit}>
              <div className="grid  lg:grid-cols-2 gap-6">
              <div className="flex flex-col">

              <input type="text"
                   name="name"
                   id="name"
                  //  autoComplete="off"
                   placeholder='Name'
                   className="border  py-2 pl-1 focus:border-2 focus:border-yellow-300 text-gray-900  focus:outline-none focus:shadow-lg  sm:text-sm sm:leading-6"
               />
                 <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>
             <div className="flex flex-col ">

              <input   type= "email"
                    name="email"
                    id="email"
                    // autoComplete="off"
                    placeholder='Email'
                    className="border  py-2 pl-1 focus:border-2 focus:border-yellow-300 text-gray-900 focus:outline-none focus:shadow-lg  sm:text-sm sm:leading-6"
                   

               />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
               </div>
               </div>
               <div className="flex flex-col mt-4">
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'
                    className="border  py-2 pl-1 text-gray-900 focus:border-2 focus:border-yellow-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 focus:outline-none  resize-none focus:shadow-lg "
                    ></textarea>
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
               </div>
               {/* <button
                type='submit'
                  onClick={handleSubmit}
                disabled={state.submitting } className='px-3 text-black conBGColor py-3 rounded-lg mt-4 '>
                {state.submitting? "Sending....":"Send a Message"}
               </button> */}
               <button type='submit'
                  // onClick={handleSubmit}
                disabled={state.submitting } className='px-3 text-black conBGColor py-3 rounded-lg mt-4 '>  
                Send a Message
                </  button>
                {state.succeeded&& <div className='flex items-center '>
     <Lottie className='w-10' animationData={done} ></Lottie>
     <h1>Your message has sent successfully 👌</h1>
                </div>
     }
            </form>
          </div>
        </div>
      
        <div className="col-span-2  my-16 ml-4 ">
     <Lottie className=' lg:block hidden' animationData={contact} ></Lottie>

        </div>

      </div>
  </div>
  </>
  
}
