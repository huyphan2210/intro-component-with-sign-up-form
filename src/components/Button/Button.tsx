import { FC } from "preact/compat";
import "./Button.scss";

interface ButtonProps {
  contentText: string;
  isForSubmitting: boolean;
}

const Button: FC<ButtonProps> = () => {
  return <button></button>;
};

export default Button;
