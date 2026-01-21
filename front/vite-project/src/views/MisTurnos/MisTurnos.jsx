import { useEffect, useState } from "react"
import Turno from "../../components/Turnos/turno"
import Styles from "./Misturnos.Module.css"
import axios from "axios"

function MisTurnos(){

    const [myApp, setMyApp] = useState([])

    useEffect( () => {
        setTimeout(() => {
            axios.get(`http://localhost:3000/appointments/`)
           .then((response) => {
                setMyApp(response.data.data)
           })
           .catch((err) => console.log(err))
        }, 2000)
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
                        <h1> Cargando turnos... </h1>
                    )
                }
            </div>

        </div>
    )
}

export default MisTurnos