import "./Custom.css";
import { useState } from "react";

export default function Custom(props) {
  const [editable, setEditable] = useState(false);
  const handleEditable = (e) => {
    setEditable(true);
  };

  return (
    <div className="Custom-Wrapper">
      <input
        type={props.type}
        className="Custom-Base"
        name={props.name}
        value={props.value}
        id={props.id}
        placeholder="Custom"
        onChange={handleEditable}
      />
      <label
        className="Custom noSelect"
        htmlFor={props.id}
        contentEditable={editable}
        placeholder={props.text}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        onKeyUp={props.onChangeValue}
      ></label>
    </div>
  );
}
