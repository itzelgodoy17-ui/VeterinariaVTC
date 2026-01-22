import { useContext } from "react";
import { dateTimeValidates } from "../../utils/validates";
import styles from "./AgendarTurnos.module.css";
import { useFormik } from "formik"
import { UsersContext } from "../../context/UsersContext";
import Swal from "sweetalert2";


function AgendarTurno() {

    const {scheduleAppointments} = useContext(UsersContext)

    const formik = useFormik({
        initialValues: {
            date: "",
            time: ""
        },
        initialErrors: {
            date: "Se requiere fecha",
            time: "Se requiere horario"
        },
        validate: dateTimeValidates,
        onSubmit: async (values) => {

            try {
                const response = await scheduleAppointments(values)
                Swal.fire({
                    icon: `success`,
                    title: `Turno pedido con exito`
                })
            } catch (error) {
                Swal.fire({
                    icon: `error`,
                    title: `No se pudo pedir el turno`
                })
            }
        }
    })

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Pedir Turno</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Fecha</label>
                <input
                   id="date"
                   name="date"
                   type="date"
                   min={new Date().toISOString().split("T")[0]}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.date}
                   className={
                    formik.touched.date && formik.errors.date
                      ? styles.errorInput
                      : styles.input
                   }
                />
                {formik.errors.date ? (
                    <>
                      <div className={styles.error}>{formik.errors.date}</div>
                    </>
                ) : null }
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="time">Hora</label>
                <input
                   id="time"
                   name="time"
                   type="time"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.time}
                   className={
                       formik.touched.time && formik.errors.time
                       ? styles.errorInput
                       : styles.input
                    }
                />
                {formik.errors.time ? (
                    <div className={styles.error}>{formik.errors.time}</div>
                ) : null }
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={Object.keys(formik.errors).length > 0}
              >
                Pedir
              </button>
            </form>
        </div>
    );
}



export default AgendarTurno