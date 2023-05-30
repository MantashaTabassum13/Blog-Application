import React from 'react'
import AllBlogs from './AllBlogs'
import AddBlogs from './AddBlogs'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../redux/actions/action'
import Carousel from './Carousel'
function selectBlogsFromState(state) {
    return state
}
const Home = () => {
    const blogs = useSelector(selectBlogsFromState)
    const dispatch = useDispatch()
    function handleDelete(index) {
        dispatch(deleteBlog(index))
    }
    useEffect(() => {
        async function fetchBlogs() {
            const response = await axios.get('http://localhost:6060/blogs')
            dispatch({
                type: "INITAL_ADD",
                payload: (response.data)
            })
        }
        fetchBlogs()
        console.log(blogs)
    }, [])
    const setToLocalStorage = (title, des, content, image) => {
        // localStorage.setItem("id", id)
        localStorage.setItem("title", title)
        localStorage.setItem("des", des)
        localStorage.setItem("content", content)
        localStorage.setItem("image", image)
    }

    return (
        <>
            <Carousel />
            <div className='container'>
                <div className="row py-3 my-3">
                    <div className=''>
                        <h2>HELLOOOOOO</h2>
                        <p>Welcome to MyBlogSpace</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <AddBlogs />
                    </div>
                    <div className="col-lg-4">
                        <div className="row ">
                            {blogs.map((blog, index) => (<div className='col-lg-12'><h2>{blog.title}</h2><p>{blog.description}</p><p>{blog.content}</p><img src={blog.image} alt="" width="100%" />
                                <div className="row py-3">
                                    <div className="col-6"><button className='btn btn-outline-danger' onClick={() => handleDelete(index)}>Delete</button></div>
                                    <div className="col-6">
                                        <Link to='/update'>
                                            <button type="text" class="btn btn-outline-dark" onClick={() => { setToLocalStorage(blog.title, blog.description, blog.content, blog.image); handleDelete(index) }}  >Edit</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-lg-12">
                                        <Link to='/blog'>
                                            <button type="text" class="btn btn-outline-warning" onClick={() => { setToLocalStorage(blog.title, blog.description, blog.content, blog.image) }}  >View</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
