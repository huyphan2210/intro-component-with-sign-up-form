import { FC, HTMLInputTypeAttribute } from "preact/compat";
import "./Input.scss";

import emailSvg from "../../assets/icons/email.svg";
import passwordSvg from "../../assets/icons/password.svg";

interface InputProps {
  labelText: string;
  placeholderText: string;
  inputType: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({ inputType, labelText, placeholderText }) => {
  return (
    <div className="input-component">
      <div className="label-group">
        <label htmlFor={labelText}>{labelText}</label>
      </div>
      <div className="input">
        <input
          id={labelText}
          type={inputType}
          placeholder={placeholderText}
          autoComplete={inputType === "email" ? "current-password" : ""}
        />
        {inputType === "email" && (
          <img
            className="icon--email"
            src={emailSvg}
            loading="lazy"
            alt="Email Icon"
          />
        )}
        {inputType === "password" && (
          <img
            className="icon--password"
            src={passwordSvg}
            loading="lazy"
            alt="Password Icon"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
