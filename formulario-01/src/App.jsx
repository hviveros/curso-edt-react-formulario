import { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import "./App.css"
import Field from "./components/Field"
import Form from "./components/Form";
import Select from "./components/Select";
import Submit from "./components/Submit";
import Textarea from "./components/Textarea";

const App = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit = (data) => {
        // console.log(data);
        fetch("http://localhost:3050/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
            resp.json()
            reset();
            alert("Lead registrado");
        })
        .catch(error => console.error(error))
    };
    
    const form = useRef();

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3050/leads/")
        .then(resp => resp.json())
        .then((data) => {
            setUsers(data);
            // console.log(data);
        })        
    }, [users]);

    return(
        <div>
            <Form submit={handleSubmit(submit)} formRef={form} >

                <Field
                    type="text"
                    name="fullname"
                    label="Nombre completo"
                    register={register}
                    errors={errors}
                    rules={{ required: "El nombre es obligatorio" }}
                />
                <Field
                    type="email"
                    name="mail"
                    label="Correo electrónico"
                    register={register}
                    errors={errors}
                    rules={{ required: "El correo electrónico es obligatorio" }}
                />
                <Field
                    type="number"
                    name="age"
                    label="Edad"
                    register={register}
                    errors={errors}
                    rules={{ required: "El campo edad es obligatorio" }}
                />
                <Field
                    type="range"
                    name="ranking"
                    label="Calificación"
                    register={register}
                />                
                <Textarea 
                    name="obs" 
                    value="" 
                    label="Observaciones" 
                    register={register}
                    errors={errors}
                    rules={{ required: "Adicione una observación" }}
                />
                <Select 
                    name="country"
                    value="" 
                    label="País"  
                    options={
                        [
                            { val: "py", content: "Paraguay" },
                            { val: "br", content: "Brasil" },
                            { val: "ar", content: "Argentina" }
                        ]
                    }
                    register={register}
                    errors={errors}
                    rules={{ required: "Debe seleccionar un país" }}
                />                
                <Field 
                    type="checkbox" 
                    name="active" 
                    label="Suscripción activa?" 
                    checked=""
                    register={register} 
                />
                <Submit value="Iniciar sesión" />

            </Form>

        <table className="container">
            <caption>
                <h3>Lista de Leads</h3>
            </caption>
            <thead>
                <tr>
                    <th>Nombre completo</th>
                    <th>Correo electrónico</th>
                    <th>Calificación</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.fullname}</td>
                    <td>{user.mail}</td>
                    <td>{user.ranking}</td>
                </tr>
            ))}
            </tbody>
        </table>

        </div>
    )
}

export default App;