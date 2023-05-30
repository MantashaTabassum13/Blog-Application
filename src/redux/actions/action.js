export function addBlog(blog){
    return(
        {
            type:"ADD_BLOG",
            payload: blog
        }
    )
}

export function deleteBlog(id){
    return(
        {
            type:"DELETE_BLOG",
            payload: id
        }
    )
}

export function updateBlog(blog){
    return(
        {
            type:"DELETE_BLOG",
            payload: blog
        }
    )
}
