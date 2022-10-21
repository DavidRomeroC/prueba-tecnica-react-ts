import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { MainLayout } from "../../../components/layout/MainLayout"
import { EmployeeErrors, EmployeeForm } from "./interfaceAddEmployee";

export const AddEmployee = () => {

    return (
        <MainLayout>
            <div className="form__container">
                <h2>Agregar Empleado</h2>
                <Formik<EmployeeForm>
                    initialValues={{
                        name: '',
                        last_name: '',
                        birthday: "",
                    }}
                    validate={(values) => {
                        const errors: EmployeeErrors = {
                            name: '',
                            last_name: '',
                            birthday: "",
                        };

                        if (!values.name) {
                            errors.name = "Por favor ingrese un usuario"
                        } else if (values.name.length < 3) {
                            errors.name = "Por favor ingrese un usuario de más de 3 caracteres"
                        } else if (values.name.length > 30) {
                            errors.name = "A excedido el limite de 30 caracteres"
                        }

                        if (!values.last_name) {
                            errors.last_name = "Por favor ingrese un usuario"
                        } else if (values.last_name.length < 3) {
                            errors.last_name = "Por favor ingrese un usuario de más de 3 caracteres"
                        } else if (values.last_name.length > 30) {
                            errors.last_name = "A excedido el limite de 30 caracteres"
                        }

                        if (!values.birthday) {
                            errors.birthday = "Por favor ingrese una fecha"
                        }

                        if (errors.name === "" && errors.last_name === "" && errors.birthday === "") {
                            return {};
                        } else {
                            return errors;
                        }
                    }}
                    onSubmit={({ name, last_name, birthday }, { resetForm }) => {
                        const data = {
                            name,
                            last_name,
                            birthday: new Date(birthday).getTime(),
                        }
                        axios
                            .post(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/david_romero`, data)
                            .then(response => {
                                alert("Datos enviados")
                            })
                            .catch(error => {
                                alert("Error al enviar los datos")
                            })
                        resetForm();
                    }}
                >
                    {({ errors }) => (
                        <Form>
                            <div className="form-group">
                                <div className="form__input-container">
                                    <label htmlFor="name">Nombre: </label>
                                    <Field
                                        type="text"
                                        placeholder="Nombre del empleado"
                                        id="name"
                                        name="name"
                                        className="form__input"
                                    />
                                    <ErrorMessage name="name" component={() => (<div> {errors.name} </div>)} />
                                </div>
                                <div className="form__input-container">
                                    <label htmlFor="last_name">Apellido: </label>
                                    <Field
                                        type="text"
                                        placeholder="Apellido del empleado"
                                        id="last_name"
                                        name="last_name"
                                        className="form__input"
                                    />
                                    <ErrorMessage name="last_name" component={() => (<div> {errors.last_name} </div>)} />
                                </div>
                                <div className="form__input-container">
                                    <label htmlFor="birthday">Fecha de nacimiento: </label>
                                    <Field
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        className="form__input"
                                    />
                                    <ErrorMessage name="birthday" component={() => (<div> {errors.birthday} </div>)} />
                                </div>
                                <button className="btn-login" type="submit">Enviar</button>
                                <button className="btn-login" type="reset">Limpiar</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </MainLayout>
    )
}