const Select = ({ value="", label, name, options=[], register, errors, rules }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ name }>{ label }</label>
            <select name={ name } id={ name } defaultValue={ value } {...register(name, rules)}>
                <option value="">- Seleccionar -</option>
                 {
                    options.map(({val, content}) => (
                        <option key={val} value={ val }>{ content }</option>
                    ))
                 }
            </select>

            {errors?.[name] && (
                <span className="color-red">{errors[name]?.message}</span>
            )}
        </div>
    )
}

export default Select;