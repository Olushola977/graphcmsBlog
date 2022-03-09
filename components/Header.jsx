import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import { getCategories } from '../services';
import Link from 'next/link';

const Header = () => {

    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getCategories()
            .then((newCategories) => {
                setCategories(newCategories);
            });
    }, [])

    const handleModalDisplay = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className='shadow-lg'>
                <div className='container mx-auto px-5 mb-8'>
                    <div className='w-full inline-block py-7 align-center'>
                        <div className='float-left'>
                            <Link href="/">
                                <span className='cursor-pointer font-bold text-xl md:text-3xl'>
                                    Everyday
                                </span>
                            </Link>
                        </div>
                        <div className='float-left contents'>
                            <button className='hidden lg:block border-0 float-right mt-1 md:mt-2 font-semibold cursor-pointer' onMouseEnter={handleModalDisplay} >Categories</button>
                            <button className='block lg:hidden border-0 float-right mt-1 md:mt-2 font-semibold cursor-pointer' onClick={handleModalDisplay} >Categories</button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <div className='rounded-xl transition ease-in-out delay-150 bg-white py-5 px-3 mt-1 modal-width shadow-inner shadow-lg border-2 z-50 h-64 absolute overflow-y-scroll' onMouseLeave={handleModalDisplay}>
                    <div className='md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-4 md:justify-between block'>
                        {categories.map((category) => (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <span className='md:flex items-center justify-between cursor-pointer block bg-white border-b mb-3 md:mb-0 md:border-2 md:rounded-lg pr-2'>
                                    <img src={category.image.url} alt={category.name} className='hidden md:block rounded-lg' style={{ height: '100%', width: '50%' }} />
                                    <span className='font-semibold align-middle border-l-1 truncate md:mx-auto md:inline-block'>{category.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : ''}

        </>
    )
}

export default Header