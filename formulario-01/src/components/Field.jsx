const Field = ({ type, value, label }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ type }>{ label }</label>
            <input 
                type={ type } 
                name={ type } 
                id={ type } 
                defaultValue={ value }
            />
        </div>
    )
}

export default Field;