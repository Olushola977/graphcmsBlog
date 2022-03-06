import React from 'react';
import Slider from "react-slick";

const FeaturedPost = ({ posts }) => {

    const lgsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true
    };

    const smsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
        <div className='mb-10 lgslide'>
            <Slider {...lgsettings} className='w-full'>
                {posts && posts.map((post, index) => (
                    <div key={index} style={{ height: '30rem' }} className='mr-5'>
                        <img alt='Post Image' src={post.featured.url} className='h-50' />
                        <div className='bg-white p-2'>
                            <img alt='Author Image' src={post.author.photo.url} className='w-10 h-10 rounded-full object-cover' />
                            <p> {post.author.name} </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div className='mb-5 smslide'>
        <Slider {...smsettings} className='w-full gap-x-3'>
                {posts && posts.map((post, index) => (
                    <div key={index} style={{ height: '30rem' }}>
                        <img alt='Post Image' src={post.featured.url} className='h-50' />
                        <div className='bg-white p-2'>
                            <img alt='Author Image' src={post.author.photo.url} className='w-10 h-10 rounded-full object-cover' />
                            <p> {post.author.name} </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}

export default FeaturedPost