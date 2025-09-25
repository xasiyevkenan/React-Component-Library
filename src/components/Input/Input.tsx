import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineClose,
} from "react-icons/ai";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable,
  value,
  onChange,
  ...props
}) => {
  const [visible, setVisible] = useState(type !== "password");

  return (
    <div className="input-container">
      <input
        type={visible ? "text" : "password"}
        value={value ?? ""}
        onChange={onChange}
        {...props}
        className="input-field"
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="input-icon input-toggle"
          style={{ right: clearable ? 17 : 5 }}
        >
          {visible ? (
            <AiOutlineEyeInvisible size={17} />
          ) : (
            <AiOutlineEye size={17} />
          )}
        </button>
      )}

      {clearable && value && (
        <button
          type="button"
          onClick={() => onChange?.({ target: { value: "" } } as any)}
          className="input-icon input-clear"
        >
          <AiOutlineClose size={15} />
        </button>
      )}
    </div>
  );
};
