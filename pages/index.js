import Head from 'next/head';
import { PostCard, Categories, PostWidget, FeaturedPosts } from '../components';
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-5 mb-8">
      <Head>
        <title>i-Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta property="og:site_name" content="Everyday Blog" />
        <meta property='og:title' content='Extraordinary pieces for everyday people for use in everyday life.' />
        <meta property="og:description" content="Extraordinary pieces for everyday people for use in everyday life." />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts?.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}