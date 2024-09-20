import { FC, HTMLInputTypeAttribute } from "preact/compat";
import "./Input.scss";

interface InputProps {
  labelText: string;
  placeholderText: string;
  inputType: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({ inputType, labelText, placeholderText }) => {
  return (
    <div class="input">
      <label htmlFor={labelText}>{labelText}</label>
      <input id={labelText} type={inputType} placeholder={placeholderText} />
    </div>
  );
};

export default Input;
