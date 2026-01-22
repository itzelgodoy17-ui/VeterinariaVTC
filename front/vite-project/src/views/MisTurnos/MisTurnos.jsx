import { useContext, useEffect } from "react"
import Turno from "../../components/Turnos/turno"
import Styles from "./Misturnos.Module.css"
import { UsersContext } from "../../context/UsersContext"

function MisTurnos(){

    const { myApp, getUserAppointments } = useContext(UsersContext)

    useEffect( () => {
        try {
            getUserAppointments()
        } catch (error) {
            Swal.fire({
                icon: `error`,
                title: `Ocurrio un error al solicitar los turnos`,
                text: error.msg
            })
            
        }
        
    }, [])

    return(
        <div className={Styles.contenedor}>
            <div className={Styles.contenedorH1}>
                <h1> Mis Turnos </h1>
            </div>

            <div className={Styles.containerTurns}>
                {
                    myApp.length > 0 ?  myApp.map( app => {
                    return <Turno
                    key={app.id}
                    id={app.id}
                    date={app.date}
                    time={app.time}
                    status={app.status}
                    />
                    }) : (
                        <h1> No hay turnos </h1>
                    )
                }
            </div>

        </div>
    )
}

export default MisTurnos