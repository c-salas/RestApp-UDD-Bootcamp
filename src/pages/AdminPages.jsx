import { useEffect, useState } from "react";
import { db } from "../firebase/firebase"
import "./AdminPages.css"


export const AdminPages = () => {
    const [reservas, setReservas] = useState([])
    const getRESERVAS = async () => {
        db.collection('reservas').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setReservas(docs)
        }
        );
    };
    const deleteReservas = async (id) => {
        if (Swal.fire({
            title: 'Esta seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#74DB24',
            cancelButtonColor: '#F82A20',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: 'Eliminada!',
                        icon: 'success',
                        confirmButtonColor: '#74DB24',
                        text: "Su reserva fue eliminada!"
                    }



                )
                db.collection('reservas').doc(id).delete()
            }
        })) return;

    }
    useEffect(() => {
        getRESERVAS()
    }, [])

    return (
        <div className="adminPage">
            <h1>RESERVAS</h1>
            <div className="container2">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th className="titulo">NOMBRE</th>
                            <th className="titulo">CANTIDAD DE COMENSALES</th>
                            <th className="titulo">FECHA</th>
                            <th className="titulo">HORA</th>
                            <th className="titulo">MAIL</th>
                            <th className="titulo">ELIMINAR</th>
                        </tr>
                    </thead>
                    <tbody id="tablabody">
                        {reservas.map((reserva) => (

                            <tr key={reserva.id}>
                                <td>{reserva.nombre}</td>
                                < td>{reserva.comensales}</ td>
                                < td>{reserva.fecha}</ td>
                                < td>{reserva.hora}</ td>
                                < td>{reserva.correo}</ td>
                                <td td><button onClick={() => deleteReservas(reserva.id)} className="delete">ELIMINAR</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
