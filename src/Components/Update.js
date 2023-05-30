import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/actions/action';
import { Link } from 'react-router-dom';

const Update = () => {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setTitle(localStorage.getItem("title"));
        setImg(localStorage.getItem("image"));
        setDes(localStorage.getItem("des"));
        setContent(localStorage.getItem("content"));
    }, [])
    const dispatch = useDispatch();
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            addBlog(
                {
                    image: img,
                    title: title,
                    des: des,
                    content: content,
                })
        )

    }
    return (

        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <label htmlFor="BlogName" className="form-label">
                                <h2>Link of the Image</h2>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="link"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <label htmlFor="BlogName" className="form-label">
                                <h2>Blog Title</h2>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <label htmlFor="BlogName" className="form-label">
                                <h2>Categories</h2>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="categories"
                            // onChange={(e) => setCategories(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <label htmlFor="BlogName" className="form-label">
                                <h2>Blog Description</h2>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Description"
                                value={des}
                                onChange={(e) => setDes(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <label htmlFor="Blog COntent" className="form-label">
                                <h2>Blogs Content</h2>
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Content"
                                rows="3"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button className='btn btn-outline-danger' onClick={handleUpdate}> <Link to="/ab">Update</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Update
