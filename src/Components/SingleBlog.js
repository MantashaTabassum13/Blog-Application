import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../redux/actions/action'

const SingleBlog = ({ title, description, content, image, index }) => {
  const dispatch = useDispatch()
  function handleDelete(index) {
    dispatch(deleteBlog(index))
  }
  return (

    <div className="col-lg-4">
      <img src={image} alt="" width="100%" />
      <h2>{title}</h2>
      <h5>{description}</h5>
      <p>{content}</p>
      <div className="row">
        <div className="col-6"><button className='btn btn-outline-primary'>Read More</button></div>
        <div className="col-3"><button className='btn btn-outline-danger' onClick={() => handleDelete(index)}>Delete</button></div>
        <div className="col-3"><button className='btn btn-outline-warning'>Edit</button></div>
      </div>
    </div>

  )
}

export default SingleBlog
