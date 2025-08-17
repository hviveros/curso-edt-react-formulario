import { useEffect, useRef, useState } from "react";
import "./App.css"
import Field from "./components/Field"
import Form from "./components/Form";
import Select from "./components/Select";
import Submit from "./components/Submit";
import Textarea from "./components/Textarea";

const App = () => {
    
    const form = useRef();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("http://localhost:3050/leads/29d2")
        .then(resp => resp.json())
        .then(data=> setUser(data))
    }, [])

    const submit = e => {
        const f = form.current
        e.preventDefault()
        const data = {
            fullname: f.fullname.value,
            mail: f.mail.value,
            age: f.age.value,
            ranking: f.ranking.value,
            obs: f.obs.value,
            country: f.country.value,
            active: f.active.checked,
        }
        // console.log(data)

        fetch("http://localhost:3050/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(response => {
            console.log(response)
            f.reset();
            alert("Lead registrado");
        })
        .catch(error => console.error(error))

    }

    return(
        <>
            <Form submit={submit} formRef={form} >

                <Field type="text" name="fullname" value={ user.fullname } label="Nombre completo" />
                <Field type="email" name="mail" value={ user.mail } label="Correo electrónico" />
                <Field type="number" name="age" value={ user.age } label="Edad" />
                <Field type="range" name="ranking" value={ user.ranking } label="Calificación" />

                <Textarea name="obs" value={ user.obs } label="Observaciones" />

                <Select value={ user.country } label="País" name="country" options={
                    [
                        { val: "py", content: "Paraguay" },
                        { val: "br", content: "Brasil" },
                        { val: "ar", content: "Argentina" }
                    ]
                } />

                <Field type="checkbox" name="active" checked={ user.active } label="Suscripción activa?" />

                <Submit value="Iniciar sesión" />
            </Form>
        </>
    )
}

export default App;