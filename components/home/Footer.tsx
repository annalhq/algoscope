import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
     <div className="w-full absolute left-0 -bottom-72 min-h-96">           
          <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
          />
     </div>

     <div className="flex flex-col items-center">
          <div className="flex mt-16 md:flex-row flex-col items-center">
               <p className="md_text-base text-sm md:font-normal font-light">
                    Built with ❤️ by Annalhq Shaikh
               </p>
          </div>
     </div>

    </footer>
  )
}

export default Footer