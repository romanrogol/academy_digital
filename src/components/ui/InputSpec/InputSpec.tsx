import { ChangeEvent, FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDivisions } from "../../../contexts/DivisionsContext";
import "./InputSpec.scss";

interface InputSpecProps {
  htmlFor: string;
  textLabel: string;
  type: string;
  name: string;
  textSpan?: string;
  initInputValue: string | number; // Здесь можем оставить как string | number
  setInitInputValue: (value: string | number) => void; // Оставляем как string | number
  inputIcon: ReactNode;
}

const InputSpec: FC<InputSpecProps> = ({
  htmlFor,
  textLabel,
  type,
  name,
  textSpan,
  initInputValue,
  setInitInputValue,
  inputIcon,
}) => {
  const { selectedDivision, setSelectedDivision, activeInputs, addActiveInput, removeActiveInput } = useDivisions();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeInputs.includes(name) && selectedDivision) {
      setInitInputValue(selectedDivision);
      setSelectedDivision(''); // Сбрасываем значение после отображения
      removeActiveInput(name); // Удаляем инпут из активных после установки значения
    }
  }, [selectedDivision, activeInputs, name, setInitInputValue, setSelectedDivision, removeActiveInput]);
  
  const handleClick = () => {
    addActiveInput(name); // Устанавливаем активный инпут
    navigate("/modal-list__deport", { state: { inputName: name } }); // Передаем имя инпута
  };
  
  return (
    <div className="form__field-container">
      <label htmlFor={htmlFor} className="form__label">{textLabel}</label>
      <input
        value={initInputValue} // Предполагается, что это строка
        type={type}
        name={name}
        id={htmlFor}
        className="form__type-input-spec"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInitInputValue(e.target.value)} // Передаем строку
        disabled
      />
      <div onClick={handleClick} className="input-spec__icon">
        {inputIcon}
      </div>
      <span className="form__error">{textSpan}</span>
    </div>
  );
};

export default InputSpec;
