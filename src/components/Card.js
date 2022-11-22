import "./Card.css";

export default function Card(props) {
  // Apply two classes on one element
  // https://stackoverflow.com/questions/11918491/using-two-css-classes-on-one-element
  return <div className={"card " + props.className}>{props.children}</div>;
}
