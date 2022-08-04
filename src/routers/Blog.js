import React from 'react'
import { Link} from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

const Blog = () => {
    const {data, error, loading} = useAxios('https://jsonplaceholder.typicode.com/posts')

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
        {
            data.map(item => (
                <div className='container m-auto'>
                    <h4 key={item.userId}>
                    <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </h4>
                </div>
            ))
        }
    </div>
  )
}

export default Blog