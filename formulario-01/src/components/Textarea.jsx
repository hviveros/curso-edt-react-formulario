const Textarea = ({ type, value, label, name }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ name }>{ label }</label>
            <textarea 
                name={ name } 
                id={ name } 
                defaultValue={ value }
            />
        </div>
    )
}

export default Textarea;