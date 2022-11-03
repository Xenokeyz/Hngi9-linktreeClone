import "./button.css";

export function Button(props) {
  const { children, className, ...buttonProps } = props;

  return (
    <a
      className={["button", className, buttonProps.disabled ? "disabled" : ""]
        .filter((c) => !!c)
        .join(" ")}
      {...buttonProps}
    >
      {children}
    </a>
  );
}
