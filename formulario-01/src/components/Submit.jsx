const Submit = ({ value }) => {
    return(
        <div className="item form__item">
            <input type="submit" value={value} className="button full" />
        </div>
    )
}

export default Submit;