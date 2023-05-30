import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Create = () => {
    const blogs=useSelector((state)=>state.users)
    console.log(blogs)
    const [id, setId] = useState('');
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');
    const history = useNavigate();
    const header = { 'Access-Control-Allow-Origin': '*' };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        axios
            .post('https://64677512ba7110b663b958fd.mockapi.io/Blogs', {
                img: img,
                title: title,
                des: des,
                content: content,
                header,
            })
            .then(() => {
                history('/read');
            });
    };

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
                                onChange={(e) => setCategories(e.target.value)}
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
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;