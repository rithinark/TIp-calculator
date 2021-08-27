import "./View.css";

export default function View(props) {
  return (
    <div className="View">
      <div className="View-Title">{props.title}</div>
      <div className="View-Result">{props.result}</div>
    </div>
  );
}
