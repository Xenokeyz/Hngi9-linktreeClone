import "./textfield.css";

export function TextField(props) {
  const { label, id, error, hint, className, ...inputProps } = props;
  const hasError = !!error;
  const classNames = ["text-field", className];
  if (hasError) {
    classNames.unshift("text-field--error");
  }

  return (
    <div className={classNames.join(" ")}>
      <label htmlFor={id}>{label}</label>

      <input id={id} {...inputProps} />

      {(!!hint || hasError) && <span>{hasError ? error : hint}</span>}
    </div>
  );
}
