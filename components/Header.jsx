import React, { useState, useEffect, useContext } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';

const Header = () => {

const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, [])

  return (
    <div className='shadow-lg'>
        <div className='container mx-auto px-5 mb-8'>
        <div className='w-full inline-block py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-xl md:text-3xl'>
                        Everyday
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header