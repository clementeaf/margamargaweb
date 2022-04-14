import * as yup from 'yup';

export const userSchema = yup.object().shape({
    nombre: yup.string().required(),
    apellido_Paterno: yup.string().required(),
    apellido_Materno: yup.string().required(),
    email: yup.string().email().required(),
    fono: yup.number().positive().required(),
    rut: yup.string().max(10).required(),
    password: yup.string().min(10).max(20).required()
});