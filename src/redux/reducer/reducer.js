
const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG": {
            const newBlog = action.payload
            const updatedState = [...state, newBlog]
            return updatedState;
        }
        case "DELETE_BLOG": {
            const updatedStateWithDelete = state.filter((blog,index)=> {
                return index !== action.payload
            })
           return updatedStateWithDelete
        }
        case "UPDATE_BLOG": {
            const UpdatedBlog = state.filter((blog,index)=>{
                if(index===action.payload){
                    UpdatedBlog.title = blog.title
                    UpdatedBlog.description = blog.description
                    UpdatedBlog.content = blog.content
                }
               
            })
            return UpdatedBlog
        }
        case "INITAL_ADD" : {
            const allBlogs = action.payload
            const updatedBlogs = allBlogs
            return updatedBlogs
        }
        default:
            return state
    }


}

export default reducer
