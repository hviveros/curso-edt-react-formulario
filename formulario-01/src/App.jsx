import { useState } from "react";
import "./App.css"

const App = () => {

    const [data, setData] = useState({ email: "", password:"" })

    const changeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        console.log(data)
        alert("Welcome!")
    }
    
    return(
        <div>
            <form className="container" onSubmit={submit}>
                <div className="item form__item">
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={data.email}
                        onChange={changeData}
                    />
                </div>
                <div className="item form__item">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={data.password}
                        onChange={changeData}
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