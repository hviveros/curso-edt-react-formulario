import { useForm } from 'react-hook-form'
import "./App.css"

const App = () => {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm()

    const submit = data => {
        console.log(data)
    }

    // console.log(watch("email"))
    console.log(errors)
    
    return(
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
    )
}

export default App;