import { FC } from "preact/compat";
import "./Button.scss";

interface ButtonProps {
  isForSubmitting: boolean;
}

const Button: FC<ButtonProps> = ({ isForSubmitting, children }) => {
  return (
    <button
      className={`btn${isForSubmitting ? " submit" : " link"}`}
      type={isForSubmitting ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
