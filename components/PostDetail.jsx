import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RichText } from '@graphcms/rich-text-react-renderer';


const PostDetail = ({ post }) => {

  const [path, setPath] = useState('');
  const [showSocialShare, setShowSocialShare] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setPath(baseUrl + router.asPath);
  }, [path])

  let element = ''

  useEffect(() => {
    window.onscroll = function() {handleProgress()};
    element = document.getElementById("progressbar")
  }, [])
  

const handleProgress = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  element.style.width = scrolled + "%";
}

  return (
    <div>
      <Head>
        <meta property="og:site_name" content="Everyday Blog" />
        <meta property='og:title' content={`${post.t}`} />
        <meta property="og:description" content={`${post.excerpt}`} />
        <meta property="og:url" content={`${path}`} />
        <meta property="og:type" content="article" />
        <meta property="article:publisher" content={`${post.author.name}`} />
        <meta property="og:image" content={`${post.featured.url}`} />
      </Head> 
      <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className="progress-container">
        <div className="progressbar" id="progressbar"></div>
      </div>
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
          <div className='absolute flex justify-between bg-opacity-50 w-32 h-10 bottom-0 right-50 bg-zinc-700 p-2'>
            <button type='button' className='text-white cursor-pointer controls tooltip' onClick={() => responsiveVoice.speak(document.getElementById("content").textContent, "UK English Male")}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"/></svg>
            <span className="tooltiptext">Read Post</span>
            </button>
            <button type='button' className='text-white cursor-pointer controls tooltip' onClick={() => responsiveVoice.pause()
}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="white" d="M14 10h-2v12h2V10zm6 0h-2v12h2V10z"/><path fill="white" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"/></svg>
              <span className="tooltiptext">Pause</span>
            </button>
            <button type='button' className='text-white cursor-pointer controls tooltip' onClick={() => responsiveVoice.resume()
}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="white" fillRule="evenodd" d="M3.05 2.75a.55.55 0 1 0-1.1 0v9.5a.55.55 0 0 0 1.1 0v-9.5Zm2.683-.442A.5.5 0 0 0 5 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 0-.884l-9-4.75ZM6 11.42V3.579L13.429 7.5l-7.43 3.92Z" clipRule="evenodd"/></svg>
              <span className="tooltiptext">Play</span>
            </button>
          </div>
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
        <div className='px-4 lg:px-0' id='content'>
          {/* {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

          return getContentFragment(index, children, typeObj, typeObj.type);
        })} */}
          <RichText
            content={post.content.raw.children}
            renderers={{
              h1: ({ children }) => <h1 className="text-4xl font-semibold lg:text-6xl my-4 mt-8">{children}</h1>,
              h2: ({ children }) => <h2 className="text-4xl lg:text-5xl font-semibold my-4 mt-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-4xl font-semibold my-4 mt-8">{children}</h3>,
              h4: ({ children }) => <h4 className="lg:text-3xl font-semibold my-4 mt-8">{children}</h4>,
              h5: ({ children }) => <h5 className="lg:text-2xl font-semibold my-4 mt-8">{children}</h5>,
              h6: ({ children }) => <h6 className="lg:text-xl font-semibold my-4 mt-8">{children}</h6>,
              p: ({ children }) => <p className="text-lg my-2 font-sans text-justify">{children}</p>,
              bold: ({ children }) => <strong>{children}</strong>,
              underline: ({ children }) => <u className='underline'>{children}</u>,
              code: ({ children }) => <code className='w-full bg-slate-200 p-3 font-mono'>{children}</code>,
              a: ({ children }) => <a href={`${children.props.parent.href}`} target="_blank" className='font-mono underline text-blue-500 hover:text-pink-700 transition-all ease-in'>{children}</a>,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PostDetail

