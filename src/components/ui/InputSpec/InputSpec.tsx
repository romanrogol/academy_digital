import { ChangeEvent, FC, ReactNode } from "react";

import "./InputSpec.scss";
import { useNavigate } from "react-router-dom";

interface InputSpecProps {
  htmlFor: string;
  textLabel: string;
  type: string;
  name: string;
  textSpan?: string;
  setInitInputValue: (value: string | number) => void;
  inputIcon: ReactNode;
  modalListDepartActive: boolean;
  setModalListDepartActive: (modalListDepartActive: boolean) => void;
  initInputValue: string | number;
}

const InputSpec: FC<InputSpecProps> = ({
  htmlFor,
  textLabel,
  type,
  name,
  textSpan,
  setInitInputValue,
  inputIcon,
  initInputValue,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInitInputValue(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/modal-list__deport");
  };

  return (
    <div className="form__field-container">
      <label htmlFor={htmlFor} className="form__label">
        {textLabel}
      </label>
      <input
        value={initInputValue}
        type={type}
        name={name}
        id={htmlFor}
        className="form__type-input-spec"
        onChange={handleChange}
        disabled
      />
      <div onClick={() => handleClick()} className="input-spec__icon">
        {inputIcon}
      </div>
      <span className="form__error">{textSpan}</span>
    </div>
  );
};

export default InputSpec;
