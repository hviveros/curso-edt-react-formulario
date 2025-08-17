const Select = ({ value="", label, name, options=[] }) => {
    return(
        <div className="item form__item">
            <label htmlFor={ name }>{ label }</label>
            <select name={ name } id={ name } value={ value }>
                <option value="">- Seleccionar -</option>
                 {
                    options.map(({val, content}) => (
                        <option key={val} value={ val }>{ content }</option>
                    ))
                 }
            </select>
        </div>
    )
}

export default Select;