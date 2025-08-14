<<<<<<< HEAD
=======
import { useForm } from 'react-hook-form'
>>>>>>> 82aee62
import "./App.css"
import Field from "./components/Field"
import Submit from "./components/Submit";
import Form from "./components/Form";
import useForm from "./hooks/useForm";

const App = () => {
<<<<<<< HEAD
=======

    const { register, handleSubmit, watch, formState:{ errors } } = useForm()

    const submit = data => {
        console.log(data)
    }

    // console.log(watch("email"))
    console.log(errors)
>>>>>>> 82aee62
    
    const [data, loginForm, submit] = useForm({ email: "", password:"" })

    return(
<<<<<<< HEAD
        <>
            <Form submit={submit} formRef={loginForm} >
                <Field type="email" value={data.email} label="Correo electrónico" />

                <Field type="password" value={data.password} label="Contraseña" />
                
                <Submit value="Iniciar sesión" />
            </Form>
        </>
=======
        <div>
            <form className="container" onSubmit={handleSubmit(submit)} >
                <div className="item form__item">
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        { ...register("email", { required: "El correo es obligatorio" }) }
                        type="email" 
                        name="email" 
                        id="email" 
                        defaultValue=""
                    />
                    { errors?.email && 
                        <span className="color-red">
                            { errors?.email?.message }
                        </span> 
                    }
                </div>
                <div className="item form__item">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        { ...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: 4,
                            maxLength: { value: 10, message: "No puede exceder 10 caracteres" }
                        })}
                        type="password" 
                        name="password" 
                        id="password" 
                        defaultValue=""
                    />
                    { errors?.password && 
                        <span className="color-red">
                            { errors?.password?.message }
                        </span> 
                    }
                </div>
                <div className="item form__item">
                    <input type="submit" value="Ingresar" className="button full" />
                </div>
            </form>
        </div>
>>>>>>> 82aee62
    )
}

export default App;