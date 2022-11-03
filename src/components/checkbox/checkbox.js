import { useId } from "react";
import "./checkbox.css";

export function Checkbox(props) {
  const id = useId();
  const { children, disabled, id: _, ...inputProps } = props;

  return (
    <label
      htmlFor={id}
      className={["checkbox", disabled ? "checkbox--disabled" : ""]
        .filter((c) => !!c)
        .join(" ")}
      tabIndex={0}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...inputProps}
        hidden
      />
      <span className="checkbox__check" tabIndex={-1}></span>

      <span className="checkbox__text">{children}</span>
    </label>
  );
}
