const Field = ({ type, value, label, name, checked }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ name }>{ label }</label>
            <input 
                type={ type } 
                name={ name } 
                id={ name } 
                defaultValue={ value }
                checked={ checked }
            />
        </div>
    )
}

export default Field;