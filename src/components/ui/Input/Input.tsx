import { ChangeEvent, FC } from "react";
import "./Input.scss";

interface InputProps {
  htmlFor: string;
  textLabel: string;
  type: string;
  name: string;
  setInitInputValue: (value: number) => void; 
  initInputValue: number; 
}


const Input: FC<InputProps> = ({
  htmlFor,
  textLabel,
  type,
  name,
  textSpan,
  setInitInputValue,
  autoComplete, 
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Приводим значение к string
    setInitInputValue(e.target.value); // Передаем строку
  };

  return (
    <div className="form__field-container">
      <label htmlFor={htmlFor} className="form__label">{textLabel}</label>
      <input
        type={type}
        name={name}
        id={htmlFor}
        className="form__type-input"
        onChange={handleChange}
        autoComplete={autoComplete} 
      />
      <span className="form__error">{textSpan}</span>
    </div>
  );
};

export default Input;
