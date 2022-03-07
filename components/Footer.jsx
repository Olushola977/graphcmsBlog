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
    <div className='bg-pink-500 p-5 pt-8 text-white block md:grid grid-cols-3 gap-4'>
      <div className='block text-center md:text-left'> 
          <h3 className='text-3xl mb-4 font-semibold'>Everyday</h3>
          <p>Extraordinary pieces for everyday people for use in everyday life.</p>
      </div>
      <div className='categorySection hidden md:block'>
          <h3 className='text-xl mb-4 font-semibold'>Categories</h3>
          {categories?.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='cursor-pointer block mb-3'>
                    {category.name}
                </span>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Footer