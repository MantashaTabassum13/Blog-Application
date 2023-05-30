import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../redux/actions/action'
const Edit = () => {
    const [newTitle, setNewTitle] = useState()
    const [newdesc, setDesc] = useState()
    const [newcontent, setContent] = useState()
    const [newimage, setImage] = useState()
    const dispatch = useDispatch()
    function handleClick(e) {
        e.preventDefault();
        dispatch(
            addBlog({
                title: newTitle,
                description: newdesc,
                content: newcontent,
                image: newimage,
            })
        )
    }
    const handleChange = (event) => {
        const value = event.target.value
        setNewTitle(value)
    }
    const handleChange2 = (event) => {
        const value = event.target.value
        setDesc(value)
    }
    const handleChange3 = (event) => {
        const value = event.target.value
        setImage(value)
    }
    const handleChange4 = (event) => {
        const value = event.target.value
        setContent(value)
    }
    return (
        <div>
            <div className="container">
                <form action="" className="">
                    <h3>Add Blog</h3>
                    <div className="row py-2">
                        <input type="text" className='form-control' value={newTitle} onChange={handleChange} placeholder="" />
                        <label htmlFor="" className='form-control'>Title</label>
                    </div>
                    <div className="row py-2">
                        <input type="text" className='form-control' value={newdesc} onChange={handleChange2} placeholder="" />
                        <label htmlFor="" className='form-control'>Description</label>
                    </div>
                    <div className="row py-2">
                        <input type="text" className='form-control' value={newimage} onChange={handleChange3} placeholder="" />
                        <label htmlFor="" className='form-control'>Image</label>
                    </div>
                    <div className="row py-2">
                        <input type="text" className='form-control' value={newcontent} onChange={handleChange4} placeholder="" />
                        <label htmlFor="" className='form-control'>Content</label>
                    </div>
                    <button className='btn btn-outline-danger' onClick={handleClick}>
                        Edit Blog
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Edit
