import React, {useEffect, useState} from 'react'
import { FeaturedPost } from '.';
import { getFeaturedPosts } from '../services';

const FeaturedPosts = () => {

    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
      getFeaturedPosts()
        .then((result) => {
            setFeaturedPosts(result);
        })
    }, [])
    

  return (
    <>
        {featuredPosts ?
            <FeaturedPost posts={featuredPosts} /> : ''
        }
    </>
  )
}

export default FeaturedPosts