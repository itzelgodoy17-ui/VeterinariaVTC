export const formValidates = ( inputs ) => {

    const errors = {}

    if(!inputs.username) errors.username = `El usuario es requerido`    
    if(!inputs.password) errors.password = `La contraseña es requerida`

    if(!/^[a-zA-Z0-9]+$/.test(inputs.username)) errors.username = `El username no puede tener caracteres especiales`

    if(inputs.password.length < 8) errors.password = `La constaseña debe contener al menos 8 caracteres`
    if(!/[A-Z]/.test(inputs.password)) errors.password = `La contaseña debe contener al menos 1 letra mayuscula`
    if(!/[0-9]/.test(inputs.password)) errors.password = `La contaseña debe contener al menos 1 numero`
    if(!/[^A-Za-z0-9]/.test(inputs.password))  errors.password = `La contraseña debe contener al menos 1 caracter especial`

    return errors
}

export const registerFormValidates = (input) => {
    const errors = {};

    if (!input.name.trim()) {
        errors.name = "Se requiere nombre";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(input.name)) {
        errors.name = "El nombre debe ser valido";
    }

    if (!input.email.trim()) {
        errors.email = "Se requiere correo electronico";
    } else if (!/^\S+\.\S+$/.test(input.email)) {
        errors.email = "El correo debe ser una dirección de correo electrónico válida";
    }

    if (!input.birthdate) {
        errors.birthdate = "Se requiere fecha de nacimiento";
    } else {
        const today = new Date();
        const birthdate = new Date(input.birthdate);
        const age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        const dayDiff = today.getDate() - birthdate.getDate();

        if (
            age < 18 ||
            (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff)))
        ) {
            errors.birthdate = "El usuario debe tener al menos 18 años.";
        }
    }

    if (!input.nDni) {
        errors.nDni = "Se requiere DNI";
    } else if (!/^\d+$/.test(input.nDni)) {
        errors.nDni = "El DNI debe contener solo numeros";
    } else if (input.nDni.length < 7 || input.nDni.length > 8) {
        errors.nDni = "El DNI debe tener entre 7 u 8 digitos";
    }

    if (!input.username.trim()) {
        errors.username = "Se requiere nombre de usuario";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
        errors.username = "El nombre de usuario debe contener solo letras y numeros";
    }

    if (!input.password.trim()) {
        errors.password = "Se requiere contraseña";
    } else if (input.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos una letra mayuscula";
    } else if (!/[0-9]/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un numero";
    } else if (!/[^A-Za-z0-9]/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un caracter especial";
    }

    return errors;
}