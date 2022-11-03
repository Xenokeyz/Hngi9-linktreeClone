import "./textarea.css";

export function TextArea(props) {
  const { label, id, hint, error, className, ...textareaProps } = props;
  const hasError = !!error;
  const classNames = ["textarea", className];
  if (hasError) {
    classNames.unshift("textarea--error");
  }

  return (
    <div className={classNames.join(" ")}>
      <label htmlFor={id}>{label}</label>

      <textarea id={id} {...textareaProps} />

      {(!!hint || hasError) && <span>{hasError ? error : hint}</span>}
    </div>
  );
}
