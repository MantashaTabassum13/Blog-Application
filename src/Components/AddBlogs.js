import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../redux/actions/action'
import { Link } from 'react-router-dom'
import imageHeader from "../Components/Pictures/add.jpg"
const AddBlogs = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newdesc, setDesc] = useState("")
    const [newcontent, setContent] = useState("")
    const [newimage, setImage] = useState("")
    const dispatch = useDispatch()
    function handleClick(e) {

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
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <img src={imageHeader} alt="" width="100%" />
                    </div>
                </div>
                <form action="" className="">
                    <h3>Add Blog</h3>
                    <div className="row py-2">
                        <label htmlFor="" className='form-control'>Title</label>
                        <input type="text" className='form-control' value={newTitle} onChange={handleChange} />

                    </div>
                    <div className="row py-2">
                        <label htmlFor="" className='form-control'>Description</label>
                        <input type="text" className='form-control' value={newdesc} onChange={handleChange2} />

                    </div>
                    <div className="row py-2">
                        <label htmlFor="" className='form-control'>Image</label>
                        <input type="text" className='form-control' value={newimage} onChange={handleChange3} />

                    </div>
                    <div className="row py-2">
                    <label htmlFor="" className='form-control'>Content</label>
                        <input type="text" className='form-control' value={newcontent} onChange={handleChange4} />
                        
                    </div>

                    <Link to="/ab"><button className='btn btn-outline-danger my-5' onClick={handleClick}>Add Blog</button></Link>

                </form>
            </div>
        </div>
    )
}

export default AddBlogs
