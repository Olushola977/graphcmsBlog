import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Footer = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, [])

  return (
    <div className='bg-pink-500 px-5 pt-12 pb-8 text-white block md:flex justify-between'>
      <div className='block text-center md:text-left'>
        <h3 className='text-3xl mb-3 font-semibold'>EverydayBlog</h3>
        <p>Extraordinary pieces for everyday people for use in everyday life.</p>
      </div>
      {/* <div className='categorySection hidden md:block'>
          <h3 className='text-xl mb-4 font-semibold'>Categories</h3>
          {categories?.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='cursor-pointer block mb-3'>
                    {category.name}
                </span>
            </Link>
          ))}
      </div> */}
      <div className='categorySection border-t mt-6 md:mt-0 md:border-0 md:block'>
        <h3 className='mb-4 font-bold text-sm md:text-lg text-center md:text-left'>Made with love by <span className='text-sm md:text-lg font-semibold'>Olushola Adeyeye</span></h3>
        <div className='flex justify-evenly items-center'>
          <a className="animateDiv" href='https://github.com/Olushola977' target="_blank" rel="noopener noreferrer">
            <div className='github-svg cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7rem" height="1.7rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
            </div>
          </a>

          <a className="animateDiv" href='https://www.linkedin.com/in/adeyeyeolushola/' target="_blank" rel="noopener noreferrer">
          <div className='linkedin'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7rem" height="1.7rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" /></svg>
          </div>
          </a>
          <a className="animateDiv" href='https://twitter.com/olusholabidex' target="_blank" rel="noopener noreferrer">
          <div className='twitter'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7rem" height="1.7rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979z" /></svg>
          </div>
          </a>
          <a className="animateDiv" href='https://api.whatsapp.com/send?phone=2348081806271&text=Hello%20%F0%9F%91%8B...' target="_blank" rel="noopener noreferrer">
          <div className='whatsapp'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7rem" height="1.7rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z" /></svg>
          </div>
          </a>
          <a className="animateDiv" href='https://github.com/Olushola977/graphcmsBlog' target="_blank" rel="noopener noreferrer">
            <div className='github-fork'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7rem" height="1.7rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1536"><path fill="white" d="M288 1344q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm0-1152q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm640 128q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm96 0q0 52-26 96.5T928 486q-2 287-226 414q-67 38-203 81q-128 40-169.5 71T288 1152v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56t-136-56t-56-136q0-52 26-96.5t70-69.5V358q-44-25-70-69.5T0 192q0-80 56-136T192 0t136 56t56 136q0 52-26 96.5T288 358v497q54-26 154-57q55-17 87.5-29.5t70.5-31t59-39.5t40.5-51t28-69.5T736 486q-44-25-70-69.5T640 320q0-80 56-136t136-56t136 56t56 136z"/></svg>
            </div>
          </a>
          
        </div>

      </div>
    </div>
  )
}

export default Footer