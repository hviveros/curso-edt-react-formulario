const Form = ({ children, submit, formRef }) => {
    return(
        <form className="container" onSubmit={submit} ref={formRef}>
            { children }
        </form>
    )
}

export default Form;