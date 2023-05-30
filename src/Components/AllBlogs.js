import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBlog } from '../redux/actions/action'
function selectBlogsFromState(state) {
  return state
} const AllBlogs = () => {
  const blogs = useSelector(selectBlogsFromState)
  const dispatch = useDispatch()
    function handleDelete(index) {
        dispatch(deleteBlog(index))
    }
  const setToLocalStorage = (title, des, content, image) => {
    // localStorage.setItem("id", id)
    localStorage.setItem("title", title)
    localStorage.setItem("des", des)
    localStorage.setItem("content", content)
    localStorage.setItem("image", image)
}
  return (
    <>

      {/* <div className="row">{blogs.map((blog, index) => (<SingleBlog title={blog.title} content={blog.content} image={blog.image} description={blog.description} index={index} />))}</div> */}
      <div className="row py-3 my-3">{blogs.map((blog, index) => (<div className='col-lg-12'><h2 className='my-2 py-2'>{blog.title}</h2><img src={blog.image} alt="" width="100%" className='py-3 my-3'/><p>{blog.description}</p><p>{blog.content}</p> <div className="row py-3">
        <Link to='/blog'>
          <button type="text" class="btn btn-outline-warning mb-2" onClick={() => { setToLocalStorage(blog.title, blog.description, blog.content, blog.image) }}  >View</button>
        </Link>
        <Link to=''>
          <button type="text" class="btn btn-outline-danger mb-5" onClick={() => {handleDelete(index)}}>Delete</button>
        </Link>
      </div></div>))}
      </div>
      {/* <AddBlogs/> */}
    </>
  );
}


export default AllBlogs
