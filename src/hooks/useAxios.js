import { useEffect, useState } from "react"

export const useAxios = (url) => {
    //detectamos el combio de url 
    const [data, setData] = useState([])
    //detectamos el error
    const [error, setError] = useState('')
    //capturamos el loading de carga
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        
        fetch(url)
        .then(res=> res.json())
        .then(data => setData(data))
        .catch(e => setError('Error de busqueda'))
        .finally(()=> setLoading(false))
        
    }, [url])
  return {data, error, loading}
}
