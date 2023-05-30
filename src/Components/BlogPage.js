import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/actions/action';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const [image, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [content, setContent] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        setImg(localStorage.getItem("image"))
        setTitle(localStorage.getItem("title"));
        setDes(localStorage.getItem("des"));
        setContent(localStorage.getItem("content"));
        
    }, [])
    const dispatch = useDispatch();
    const handleUpdate = (e) => {
        e.preventDefault();
       dispatch(
        addBlog(
            {
                image: image,
                title: title,
                des: des,
                content: content,
            })
        )

    }
    return (

        <>
           <div className="container my-3">
            <img src={image} alt="" srcset="" width="100%" className='py-3 my-3'/>
            <h2 className='my-3'>{title}</h2>
            <p>{des}</p>
            <p className='pb-3 mb-3'>{content}</p>
           </div>
        </>
    )
}

export default BlogPage
