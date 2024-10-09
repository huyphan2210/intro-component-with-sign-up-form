import { Dispatch, FC, useState } from "preact/compat";
import "./Checkbox.scss";

import checkmark from "../../assets/icons/checkmark.svg";
import { StateUpdater } from "preact/hooks";
import { IIsFormDataValid } from "../../app";

export interface CheckboxProps {
  label: string;
  setIsFormDataValid?: Dispatch<StateUpdater<IIsFormDataValid>>;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  children,
  setIsFormDataValid,
}) => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    const checkbox = document.getElementById(label) as HTMLInputElement;
    setChecked(checkbox.checked);
  };

  const handleCustomCheckbox = () => {
    const checkbox = document.getElementById(label) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
    setChecked(checkbox.checked);
    if (setIsFormDataValid && label === "terms") {
      setIsFormDataValid((prev) => ({ ...prev, terms: checkbox.checked }));
    }
  };

  return (
    <div className="checkbox-group">
      <input id={label} type="checkbox" onChange={handleCheckbox} />
      <button
        type="button"
        onClick={handleCustomCheckbox}
        className={`checkbox${checked ? " checked" : ""}`}
      >
        <img src={checkmark} loading="lazy" alt="Checkmark" />
      </button>
      <label htmlFor={label}>{children}</label>
    </div>
  );
};

export default Checkbox;
