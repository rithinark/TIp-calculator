import "./Button.css";
export default function Button(props) {
  return (
    <div className="Button-Wrapper">
      <input
        type={props.type}
        className="Button-Base"
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChangeValue}
        {...(props.onClick ? { onClick: props.onClick } : {})}
      />
      <label className="Button noSelect" htmlFor={props.id}>
        {props.text}
      </label>
    </div>
  );
}
