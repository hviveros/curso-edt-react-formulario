import "./App.css"
import Field from "./components/Field"
import Submit from "./components/Submit";
import Form from "./components/Form";
import useForm from "./hooks/useForm";
import Textarea from "./components/Textarea";
import Select from "./components/Select";

const App = () => {
    
    const [data, loginForm, submit] = useForm({ email: "", password:"" })

    return(
        <>
            <Form submit={submit} formRef={loginForm} >

                <Field type="text" name="fullname" value={data.name} label="Nombre completo" />
                <Field type="email" name="mail" value={data.email} label="Correo electrónico" />
                <Field type="number" name="age" value={data.age} label="Edad" />
                <Field type="range" name="ranking" value={data.ranking} label="Calificacion" />

                <Textarea name="obs" value={data.obs} label="Observaciones" />

                <Select label="País" name="country" options={
                    [
                        { val: "py", content: "Paraguay" },
                        { val: "br", content: "Brasil" },
                        { val: "ar", content: "Argentina" }
                    ]
                } />

                <Field type="checkbox" name="active" checked label="Suscripción activa?" />

                <Submit value="Iniciar sesión" />
            </Form>
        </>
    )
}

export default App;