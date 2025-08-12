import { useRef } from "react";
import "./App.css"

const App = () => {

    const data = { email: "", password:"" }

    // Componentes no controlados
    const loginForm = useRef()

    const submit = e => {
        e.preventDefault()
        console.log(loginForm.current)
        alert("Welcome!")
    }
    
    return(
        <div>
            <form className="container" onSubmit={submit} ref={loginForm}>
                <div className="item form__item">
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        defaultValue={data.email}
                    />
                </div>
                <div className="item form__item">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        defaultValue={data.password}
                    />
                </div>
                <div className="item form__item">
                    <input type="submit" value="Ingresar" className="button full" />
                </div>
            </form>
        </div>
    )
}

export default App;