import { FC } from "preact/compat";
import "./Button.scss";

interface ButtonProps {
  isForSubmitting: boolean;
  isDisabled: boolean;
}

const Button: FC<ButtonProps> = ({ isForSubmitting, isDisabled, children }) => {
  return (
    <button
      className={`btn${isForSubmitting ? " submit" : " link"}`}
      type={isForSubmitting ? "submit" : "button"}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
