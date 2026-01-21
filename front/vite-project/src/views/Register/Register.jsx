import { useFormik } from "formik";
import styles from "./Register.module.css";
import { registerFormValidates } from "../../utils/validates";
import axios from "axios"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


function Register(){

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: "",
        },
        initialErrors:{
            name: "Se requiere Nombre",
            email: "Se requiere correo electronico",
            birthdate: "Se requiere fecha de nacimiento",
            nDni: "Se requiere DNI",
            username: "Se requiere nombre de usuario",
            password: "Se requiere contraseña",
        },
        validate: registerFormValidates,
        onSubmit: (values) => {
            axios.post(`http://localhost:3000/users/register`, values)
            .then(() => {
                Swal.fire({
                    icon: `success`,
                    title: `Usuario registrado con exito`
                })
            })
            .catch( err => {
                if(err.response.data.msg.includes(`username`)){
                    Swal.fire({
                        icon: `error`,
                        title: `${err.response.data.msg}`
                    })
                }
                if(err.response.data.msg.includes(`email`)){
                    Swal.fire({
                        icon: `error`,
                        title: `Ya existe el usuario con el correo ${formik.values.email}`
                    })
                }
                if(err.response.data.msg.includes(`nDni`)){
                    Swal.fire({
                        icon: `error`,
                        title: `Ya existe un usuario con el DNI ${formik.values.nDni}`
                    })
                }
            })
        }
    })

    return (
  <div className={styles.formContainer}>
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <h2 className={styles.formTitle}>Formulario de Registro</h2>
      
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Nombre:</label>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.errors.name ? (
          <label className={styles.errorLabel}>{formik.errors.name}</label>
        ) : null}
      </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email:</label>
              <input
                className={styles.formInput}
                type="text"
                name="email"
                placeholder="mail@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.name && formik.errors.name ? (
            <label className={styles.errorLabel}>{formik.errors.name}</label>
            ) : null}
           </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Fecha de nacimiento</label>
                <input
                  className={styles.formInput}
                  type="date"
                  name="birthdate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthdate}
                />  
                {formik.errors.birthdate && formik.errors.birthdate ? (
                    <label className={styles.errorLabel}>{formik.errors.birthdate}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>DNI:</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="nDni"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nDni}
                />
                {formik.errors.nDni && formik.errors.nDni ? (
                    <label className={styles.errorLabel}>{formik.errors.nDni}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre de usuario:</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.errors.username && formik.errors.username ? (
                    <label className={styles.errorLabel}>{formik.errors.username}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Contraseña:</label>
                <input
                  className={styles.formInput}
                  type="password"
                  name="password"
                  placeholder="⚫⚫⚫⚫⚫"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
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
                    !formik.values.name ||
                    !formik.values.email ||
                    !formik.values.birthdate ||
                    !formik.values.nDni ||
                    !formik.values.username ||
                    !formik.values.password 
                }
            >
                Registrarse
            </button>
            <br/>
            <label>
                Ya tienes una cuenta? <Link to="/login"> Iniciar Sesion</Link>
            </label>
        </form>
    </div>
    );
}

export default Register