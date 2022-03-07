import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router'


const PostDetail = ({ post }) => {

  const [path, setPath] = useState('');
  const [showSocialShare, setShowSocialShare] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const baseUrl = 'https://graphcms-blog-beta.vercel.app/';
    setPath(baseUrl + router.asPath);
    console.log(path, 'path');
  }, [path])


  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <h1 className='mb-8 md:text-6xl text-3xl font-semibold'> {post.t} </h1>
      <div className='flex items-center mb-8 w-full'>
        <div className='inline-block md:flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <p className='inline align-middle text-gray-700 text-lg mr-1 italic'>Posted by</p>
          <img
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full hidden lg:block'
            src={post.author.photo.url}
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg font-semibold'>{post.author.name}</p>
          <div className="font-medium text-gray-700">

            <p className='inline align-middle text-gray-700 text-lg mx-1'>on</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {' '}
            <span className="align-middle italic">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
      <div className='relative shadow-md mb-6'>
        <img
          src={post.featured.url}
          alt={post.t}
          className='object-top h-full w-full'
        />
        <button type='button' className='absolute w-10 bg-opacity-50 h-10 top-0 right-0 bg-zinc-500 p-2 cursor-pointer' onClick={() => setShowSocialShare(!showSocialShare)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '1.5rem', height: '1.5rem' }}><path d="M568.9 143.5l-150.9-138.2C404.8-6.773 384 3.039 384 21.84V96C241.2 97.63 128 126.1 128 260.6c0 54.3 35.2 108.1 74.08 136.2c12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2C578.4 167.8 578.4 152.2 568.9 143.5zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.0013V128h32c17.67 0 32-14.32 32-32S113.7 64 96 64H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.0013c35.35 0 64-28.66 64-64V416C448 398.3 433.7 384 416 384z" /></svg>
        </button>
        {showSocialShare && (
          <div className='bg-slate-700 z-20 p-4 absolute top-10 w-1/2 lg:w-1/3 bg-opacity-50 transition-all ease-in-out right-0'>
            <Link href={`https://www.facebook.com/sharer.php?u=${path}`}>
              <a target="_blank" className='transition ease-in-out block text-white md:font-semibold text-sm decoration-solid underline my-2 hover:text-blue-700'>Share on Facebook</a>
            </Link>
            <Link href={`https://twitter.com/intent/tweet?text=${path}`}>
              <a target="_blank" className='block text-white md:font-semibold text-sm decoration-solid underline my-2 hover:text-indigo-400 transition ease-in-out'>Share on Twitter</a>
            </Link>
            <Link href={`https://api.whatsapp.com/send?text=${path}`}>
              <a target="_blank" className='block text-white md:font-semibold text-sm underline decoration-solid my-2 hover:text-green-500 transition ease-in-out'>Share on WhatsApp</a>
            </Link>
            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${path}`}>
              <a target="_blank" className='block text-white md:font-semibold text-sm decoration-solid underline my-2 hover:text-cyan-500 transition ease-in-out'>Share on LinkedIn</a>
            </Link>
          </div>
        )}
      </div>
      <div className='px-4 lg:px-0'>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  )
}

export default PostDetail

