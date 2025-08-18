const Textarea = ({ value, label, name, register, errors, rules }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ name }>{ label }</label>
            <textarea 
                name={ name } 
                id={ name } 
                defaultValue={ value }
                {...register(name, rules)}
            />
            
            {errors?.[name] && (
                <span className="color-red">{errors[name]?.message}</span>
            )}
        </div>
    )
}

export default Textarea;