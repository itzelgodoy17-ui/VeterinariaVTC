import { useContext } from "react"
import Styles from "./Turno.module.css"
import { UsersContext } from "../../context/UsersContext"
import Swal from "sweetalert2"

function Turno({id, date, time, status}){

    const { cancelAppointments } = useContext(UsersContext)

    const handleCancel = async () => {
        try {
            cancelAppointments(id)
            Swal.fire({
                icon: `success`,
                title: `Turno cancelado`
            })
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: `error`,
                title: `Ocurrio un error`
            })
        }
    }

    return(
        <div className={Styles.appointmentCard}>
            <div className={Styles.appointmentHeader}> 
                <h3> Turno #{id} </h3>
                <span className={status === `Active` ? Styles.statusActive : Styles.statusInactive}> {status} </span>
            </div>

            <div className={Styles.appointmentDetails}>
                <p><strong> Fecha: </strong> <span>{date}</span></p>
                <p><strong> Hora: </strong> <span>{time}</span></p>
            </div>

            <button
               className={`${Styles.cancelButton} ${
                status === "Cancelled" ? Styles.disabled : ""
               }`}
               onClick={handleCancel}
               disabled={status === "Cancelled"}
            >
                Cancelar
            </button>
        </div>
    )
}

export default Turno