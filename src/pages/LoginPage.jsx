import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"



export const LoginPage = ({setLogin}) => {
const initialValue = {
  email:"",
  password:""

}
const [admin, setAdmin] = useState(initialValue)

const navigate = useNavigate()
const  cambiosForm = (e) =>{
  setAdmin({
  ...admin,
  [e.target.name]:e.target.value
  })
}
const login = async (e) =>{
e.preventDefault()
const auth = getAuth()
signInWithEmailAndPassword(auth,admin.email,admin.password).then((usuario) =>{
  setLogin(usuario)
navigate("/admin")
}).catch((error) =>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Credenciales incorrectas!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
})

}

  return (
    <>
    <center>
    <div className="div-form">
      <form onSubmit={login} className="form form-control">
        <h2>INICIAR SESIÓN</h2>
        <input onChange={cambiosForm} name="email" value={admin.email} className="input-form form-control mt-3 " type="email" placeholder="Ingrese su correo" />
        <input onChange={cambiosForm} name="password" value={admin.password} className="input-form form-control mt-3" type="password" placeholder="Ingrese su contraseña" />
        <button type="submit" className="btn  w-50 mt-1">LOGIN</button>
      </form>
    </div>
    </center>
    </>
  )
}








