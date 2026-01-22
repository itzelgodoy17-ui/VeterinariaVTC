import { formValidates } from "../../utils/validates";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";


function Login({}){

    const {loginUser} = useContext(UsersContext)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: ``,
            password: ``
        },
        initialErrors: {
            username: `Requiere nombre de usuario` ,
            password: `Requiere contraseña` ,
        },
        validate: formValidates,
        onSubmit: (values) => {

          loginUser(values)
               .then((response) => {
                if(response.status === 200) {
                    Swal.fire({
                        icon: `success`,
                        title: `Usuario logueado con exito`
                    })
                }

                navigate("/")

                
            })
            .catch((errors) => {
                 Swal.fire({
                    icon: `error`,
                    title: `${errors.response.data.msg}`,
                    text: `Intentelo de nuevo`
                 })
            })
        }
    })

    return (
  <div className={styles.formContainer}>
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <h2 className={styles.formTitle}>Formulario de Inicio de sesion</h2>
      
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Nombre:</label>
        <input
          className={styles.formInput}
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
        />
        {formik.errors.username && formik.errors.username ? (
          <label className={styles.errorLabel}>{formik.errors.username}</label>
        ) : null }
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Contraseña:</label>
        <input
          className={styles.formInput}
          type="password"
          name="password"
          placeholder="●●●●●●"
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.errors.password ? (
          <label className={styles.errorLabel}>{formik.errors.password}</label>
        ) : null}
      </div>

      <button
        className={styles.formButton}
        type="submit"
        disabled={
          Object.keys(formik.errors).length > 0 ||
          !formik.values.username ||
          !formik.values.password
        }
      >
        Iniciar
      </button>
      <br/>
      <label>
        Aun no tienes una cuenta? <Link to="/register">Registrate</Link>
      </label>
    </form>
  </div>
);
}

export default Login