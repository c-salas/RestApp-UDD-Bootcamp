
import { useState } from "react"
import {db} from "../firebase/firebase"
import "./ReservaForm.css"

export const ReservaForm = () => {
  const initialValue = {
    nombre: '',
    comensales: '',
    fecha: '',
    hora: '',
    correo: '',


  }
  const [reserva, setReserva] = useState(initialValue)
  const cambiar = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const enviarFormulario = async (e) =>{
    e.preventDefault()
await db.collection("reservas").add(reserva)
    console.log(reserva)
setReserva(initialValue)
  }
  return (

    <div className="container-form">
      <h1>RESERVAS</h1>
      <form className="form-reserva" onSubmit={enviarFormulario}>
        <input className="input-form" type="text" placeholder="Titular de Reserva" name="nombre" value={reserva.nombre} onChange={cambiar} />
        <input className="input-form" type="number" placeholder="Cantidad de Comensales..." name="comensales" value={reserva.comensales} onChange={cambiar} />
        <input className="input-form" type="date" name="fecha" value={reserva.fecha} onChange={cambiar} />
        <input className="input-form" type="time" name="hora" value={reserva.hora} onChange={cambiar} />
        <input className="input-form" type="email" placeholder="Correo" name="correo" value={reserva.correo} onChange={cambiar} />
        <button className="boton-form" type="submit">Reservar</button>
      </form>
    </div>
  )
}
