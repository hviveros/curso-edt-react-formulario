const Field = ({ type, value, label, name, checked, register, errors, rules }) => {
  return (
    <div className="item form__item">
      <label htmlFor={name}>{label}</label>
      
      <input
        type={type}
        id={name}
        defaultValue={value}
        defaultChecked={checked}
        {...register(name, rules)} 
      />

      {errors?.[name] && (
        <span className="color-red">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default Field;

