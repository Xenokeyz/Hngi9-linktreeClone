import "./button-link.css";

export function ButtonLink(props) {
  const { id, url, text } = props;

  return (
    <a id={id} href={url} className="button-link">
      {text}
    </a>
  );
}
