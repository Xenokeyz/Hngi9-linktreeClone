import "./textfield.css";

export function TextField(props) {
  const { label, id, hint, className, ...inputProps } = props;

  return (
    <div className={["text-field", className].join(" ")}>
      <label htmlFor={id}>{label}</label>

      <input id={id} {...inputProps} />

      {!!hint && <span>{hint}</span>}
    </div>
  );
}
