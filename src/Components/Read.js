import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddBlogs from './AddBlogs'

const Read = () => {
    const [data, setData] = useState([])
    
    function getData() {
        axios.get('https://64677512ba7110b663b958fd.mockapi.io/Blogs')
            .then((res) => {
                setData(res.data)
            })
    }
    const handleDelete =(id)=>{
        axios.delete(`https://64677512ba7110b663b958fd.mockapi.io/Blogs/${id}`)
        .then(()=>{
            getData()
        })
    }
   
    const setToLocalStorage=(title, des,content)=>{
        // localStorage.setItem("id", id)
        localStorage.setItem("title", title)
        localStorage.setItem("des", des)
        localStorage.setItem("content", content)
    }
    useEffect(() => {
        getData();
    }, [])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("clicked")
    //     axios.post(
    //         'https://64677512ba7110b663b958fd.mockapi.io/Blogs',{
    //             img:img,
    //             title:title,
    //             des:des,
    //             content:content,
    //            header,
    //         }
    //     )
    //     .then(()=>{
    //         history("/read")
    //     })
    // }
    
    return (
        <>
            {
                data.map((eachData, index) => {
                    console.log({ eachData })
                    return (
                        <div className="container m-5">
                            <center>
                                <div className="row">
                                    <div className="col-lg-10 justify-content-center">
                                        <div className="card" key={index}>
                                            <img src={eachData.img} className="card-img-top img" alt="..." />
                                            <div className="card-body">

                                                <h4 className="card-title m-3">{eachData.title}</h4>
                                                <h6 className="card-text m-5">{eachData.des}</h6>
                                                <p className="card-text m-5">{eachData.content}</p>
                                                <a href='/single' className="btn btn-primary"  >Read More</a>
                                            </div>
                                            <div className="row">
                                                <button type="text" class="btn btn-danger" onClick={()=> handleDelete(eachData.id)} >Delete</button>
                                            </div>
                                            <div className="row">
                                                <Link to='/update'>
                                                <button type="text" class="btn btn-dark" onClick={()=> setToLocalStorage(eachData.id,eachData.title, eachData.des, eachData.content)} >Edit</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    )
                })
            }
           
        </>
    )
}
export default Read
