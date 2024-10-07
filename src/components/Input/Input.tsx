import {
  ChangeEvent,
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
  JSX,
  useState,
} from "preact/compat";
import "./Input.scss";

import emailSvg from "../../assets/icons/email.svg";
import passwordSvg from "../../assets/icons/password.svg";
import { StateUpdater } from "preact/hooks";
import { IIsFormDataValid } from "../../app";

interface InputProps {
  labelText: string;
  placeholderText: string;
  inputType: HTMLInputTypeAttribute;
  setIsFormDataValid: Dispatch<StateUpdater<IIsFormDataValid>>;
}

const errorTextRecords: Record<string, string> = {
  email: "The email is invalid",
  password: "The password is invalid",
  text: "This field requires text only",
};

const toolTipContent: Record<string, JSX.Element> = {
  password: (
    <ul className="password-requirements">
      <li>Minimum of 8 characters</li>
      <li>At least one uppercase letter</li>
      <li>At least one lowercase letter</li>
      <li>At least one digit</li>
      <li>At least one special character (e.g., @, #, !, etc.)</li>
    </ul>
  ),
};

const Input: FC<InputProps> = ({
  inputType,
  labelText,
  placeholderText,
  setIsFormDataValid,
}) => {
  const [isValid, setIsValid] = useState(true);

  const validFormDataHandlerRecord: Record<string, (isValid: boolean) => void> =
    {
      email: (isValid: boolean) => {
        setIsFormDataValid((prev) => ({ ...prev, email: isValid }));
      },
      password: (isValid: boolean) => {
        setIsFormDataValid((prev) => ({ ...prev, password: isValid }));
      },
      text: (isValid: boolean) => {
        if (labelText === "First Name") {
          setIsFormDataValid((prev) => ({ ...prev, firstName: isValid }));
        } else {
          if (labelText === "Last Name") {
            setIsFormDataValid((prev) => ({ ...prev, lastName: isValid }));
          }
        }
      },
    };

  const regexHandler = (regex: RegExp, value: string) => {
    setIsValid(regex.test(value));
    validFormDataHandlerRecord[inputType](regex.test(value));
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
      {toolTipContent[inputType] && (
        <div className={`input-tooltip${!isValid ? " show" : ""}`}>
          {toolTipContent[inputType]}
        </div>
      )}
    </div>
  );
};

export default Input;
