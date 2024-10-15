import { Dispatch, FC } from "preact/compat";
import "./ConfirmBox.scss";
import { StateUpdater, useState } from "preact/hooks";

interface ConfirmBoxProps {
  setIsConfirmBoxRevealed: Dispatch<StateUpdater<boolean>>;
  handleSubmit: (e?: SubmitEvent) => void;
}

const ConfirmBox: FC<ConfirmBoxProps> = ({
  handleSubmit,
  setIsConfirmBoxRevealed,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  return (
    <div className={`confirm-box ${isFadingOut ? "fading-out" : ""}`}>
      <h3>
        Do you want to claim your free trial with the provided information?
      </h3>
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsConfirmBoxRevealed(false);
            }, 300);
          }}
        >
          No
        </button>
        <button type="button" onClick={() => handleSubmit()}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default ConfirmBox;
