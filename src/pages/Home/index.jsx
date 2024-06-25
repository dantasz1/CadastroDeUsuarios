import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from "../../images/trash.svg"
import api from "../../services/api"
 
// useRef 
//referencia, e conseguir pegar os elementos


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  const [users , setUsers] = useState([])


  async function getUsers() {
   const usersFromAPi =  await api.get('/usuarios')


   setUsers(usersFromAPi.data)
  }
  
  async function createUsers() {

  await api.post('/usuarios' , {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value
  })
  getUsers ();
   
  }

  async function deleteUsers(id) {
   await api.delete(`/usuarios/${id}`)
 
   getUsers ();
   
   }

useEffect(()=> {   // toda vez que minha pagina abrir a funcao getUsers vai ser chamada  // vai ate o servidor e vai trazer a variavel users
 getUsers ();
 
}, [])
  return (
    <>
      <div className='container'>
        <form >
          <h1>Cadastro de Usuarios</h1>
          <input type="text" name='name' placeholder='Digite seu Nome.' ref={inputName} />
          <input type="number" name='age' placeholder='Digite sua Idade.' ref={inputAge}/>
          <input type="email" name='email' placeholder='Digite seu Email.' ref={inputEmail}/>
          <button onClick={createUsers}>Cadastrar</button>
        </form>
        {users.map(itensUser => (
          <div key={itensUser.id} className='card'>
            <div>
              <p>Name : <span>{itensUser.name}</span> </p>
              <p>Age : <span>{itensUser.age}</span> </p>
              <p>Email : <span>{itensUser.email}</span> </p>
            </div>
            <button>
              <img src={Trash} onClick={ () => deleteUsers(itensUser.id)} />
            </button>
          </div>
        ))}

      </div>
    </>
  )
}

export default Home
