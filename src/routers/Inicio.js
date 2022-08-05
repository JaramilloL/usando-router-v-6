import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UseProvider'

const Inicio = () => {
  const {user, signIn, signOut} = useContext(userContext)
  

  return (
    <div className='container'>
      <h2>
        {
          user ? "Conectado" : "Desconectado"
        }
      </h2>
      {
          user ? (
            <>
              <button className='btn btn-primary' 
                      onClick={signOut}>Desconectar
              </button>
              <Link to='/RutaProtegida'
                    className='btn btn-danger'>Protegida</Link>
            </>
          ) : (
            <button className='btn btn-primary' 
                    onClick={signIn}>Conectar
            </button>
          )
        }
    </div>
  )
}

export default Inicio