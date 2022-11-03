import "./button.css";

export function Button(props) {
  const { children, className, ...buttonProps } = props;

  return (
    <button
      className={["button", className, buttonProps.disabled ? "disabled" : ""]
        .filter((c) => !!c)
        .join(" ")}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
