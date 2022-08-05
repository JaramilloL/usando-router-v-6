import React from 'react'
import { useAxios } from '../hooks/useAxios'

const Contacto = () => {
  const {data, error, loading} = useAxios(`https://jsonplaceholder.typicode.com/albums`)

  if(loading){
    return(
      <h3>Loading....</h3>
    )
  }
  if(error !== ''){
    return(
      <h3>{error}</h3>
    )
  }
  return (
    <div className='container row m-auto'>
        {
          data.map(item => (
            <div  key={item.id} className='card mb-2 col-md-4'>
              <h3 className='card-body'>{item.id}</h3>
              <h4 className='card-subtitle'>{item.title}</h4>
            </div>
          ))
        }
    </div>
  )
}

export default Contacto