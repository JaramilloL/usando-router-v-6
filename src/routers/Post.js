import { useParams } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"

const Post = () => {
    const params = useParams()

    const {data, error, loading} = useAxios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading){
        return(
            <h2>Loading...</h2>
        )
    }
    if(error !== ''){
        return(
            <h2>{error}</h2>
        )
    }
  return (
    <div>    
            <h3 key={data.id}>{data.id}-{data.title} -<br/> {data.body}</h3>   
    </div>
  )
}

export default Post