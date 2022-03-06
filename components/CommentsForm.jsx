import React, { useRef, useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    useEffect(() => {
      setNameValue(window.localStorage.getItem('name'));
      setEmailValue(window.localStorage.getItem('email'));
    }, [])
    

    const handleCommentSubmission = () => {
        setError(false);
        const comment = commentValue;
        const name = nameValue;
        const email = emailValue;
        if (!comment || !name || !email) {
            setError(true);
            return;
        }
        const commentObj = {
            name, email, comment, slug
        }
        if (document.getElementById('storeData').checked) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }
        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Comment</h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea 
                className='p-4 resize-none outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
                placeholder='Comment'
                name='comment'
                onChange={(e) => setCommentValue(e.target.value)}
            />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
            <input
                type='name'
                className='py-2 px-4 ring-gray200 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
                placeholder='Full Name'
                name='name'
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
            />
            <input
                type='email'
                className='py-2 px-4 ring-gray200 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
                placeholder='Email'
                name='email'
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
            />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <div>
                <input
                    type='checkbox'
                    id='storeData'
                    name='storeData'
                    value='true'
                />
                <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save my details for next time when i comment.</label>
            </div>
        </div>
        {error && <p className='text-xs text-red-500'>All fields are required.</p>}
        <div className='mt-8'>
            <button 
                type='button' onClick={handleCommentSubmission}
                className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
            >
                Comment
            </button>
            {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm