import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../features/authSlice';
import { Errors, ValuesForm } from "./interfaceLogin";

export const LoginScreen = () => {

    const dispatch = useAppDispatch();

    return (
        <div className="form__container">
            <Formik<ValuesForm>
                initialValues={{
                    usuario: '',
                    contraseña: '',
                }}
                validate={(values) => {
                    const errors: Errors = {
                        usuario: '',
                        contraseña: '',
                    };

                    if (!values.usuario) {
                        errors.usuario = "Por favor ingrese un usuario"
                    } else if (values.usuario.length < 3) {
                        errors.usuario = "Por favor ingrese un usuario de más de 3 caracteres"
                    }

                    if (!values.contraseña) {
                        errors.contraseña = "Por favor ingrese una contraseña"
                    }

                    if (errors.usuario === "" && errors.contraseña === "") {
                        return {};
                    } else {
                        return errors;
                    }
                }}
                onSubmit={({ usuario, contraseña }, { resetForm }) => {
                    if (usuario === "david" && contraseña === "romero") {
                        dispatch(login({usuario, contraseña}))
                    } else {
                        alert("Usuario y contraseña incorrecta")
                    }
                    resetForm();
                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className='form-group'>
                            <div className='form__input-container'>
                                <label htmlFor="usuario">Usuario: </label>
                                <Field
                                    type="text"
                                    placeholder="Escribe tu usuario"
                                    id="usuario"
                                    name="usuario"
                                    className="form__input"
                                    onPaste={(e: any) => {
                                        e.preventDefault();
                                        return false;
                                    }}
                                    onCopy={(e: any) => {
                                        e.preventDefault();
                                        return false;
                                    }}
                                />
                                <ErrorMessage name="usuario" component={() => (<div> {errors.usuario} </div>)} />
                            </div>
                            <div className='form__input-container'>
                                <label htmlFor="contraseña">Contraseña: </label>
                                <Field
                                    type="password"
                                    placeholder="Escribe tu contraseña"
                                    id="contraseña"
                                    name="contraseña"
                                    className="form__input"
                                    onPaste={(e: any) => {
                                        e.preventDefault();
                                        return false;
                                    }}
                                    onCopy={(e: any) => {
                                        e.preventDefault();
                                        return false;
                                    }}
                                />
                                <ErrorMessage name="contraseña" component={() => (<div> {errors.contraseña} </div>)} />
                            </div>
                            <div>
                                <button className="btn-login" type="submit">Log In</button>
                                <button className="btn-clear" type="reset">Limpiar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
