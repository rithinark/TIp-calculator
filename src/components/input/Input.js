import "./Input.css";

export default function Input(props) {
  return (
    <div className="Input-Wrapper">
      <label className="Input-Label" htmlFor={props.id}>
        {props.label}
        <span
          className="Input-Icon"
          style={{ backgroundImage: `url(${props.icon})` }}
        ></span>
      </label>
      <input
        className="Input"
        min={props.min}
        type="number"
        value={props.value}
        onChange={props.onChangeValue}
        name={props.name}
        id={props.id}
      />
    </div>
  );
}
