import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  JSX,
  useState,
} from "preact/compat";
import "./Input.scss";

import emailSvg from "../../assets/icons/email.svg";
import passwordSvg from "../../assets/icons/password.svg";

interface InputProps {
  labelText: string;
  placeholderText: string;
  inputType: HTMLInputTypeAttribute;
}

const errorTextRecords: Record<string, string> = {
  email: "The email is invalid",
  password: "The password is invalid",
  text: "This field requires text only",
};

const toolTipContent: Record<string, JSX.Element> = {
  email: <></>,
  password: <></>,
  text: <span>This field allows text only</span>,
};

const Input: FC<InputProps> = ({ inputType, labelText, placeholderText }) => {
  const [isValid, setIsValid] = useState(true);

  const regexHandler = (regex: RegExp, value: string) => {
    setIsValid(regex.test(value));
  };

  const validationHandler: Record<string, (value: string) => void> = {
    email: (value: string) => {
      regexHandler(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, value);
    },
    password: (value: string) => {
      regexHandler(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        value
      );
    },
    text: (value: string) => {
      regexHandler(/^[A-Za-z]+$/, value);
    },
  };

  return (
    <div className={`input-component${!isValid ? " error" : ""}`}>
      <div className="label-group">
        <label htmlFor={labelText}>{labelText}</label>
        {!isValid && (
          <label htmlFor={labelText}>{errorTextRecords[inputType]}</label>
        )}
      </div>
      <div className="input">
        <input
          id={labelText}
          type={inputType}
          placeholder={placeholderText}
          autoComplete={inputType === "email" ? "current-password" : ""}
          onChange={(e: ChangeEvent) => {
            const input = e.currentTarget as HTMLInputElement;
            validationHandler[input.type](input.value);
          }}
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
      <div className="input-tooltip">{toolTipContent[inputType]}</div>
    </div>
  );
};

export default Input;
