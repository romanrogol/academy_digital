import { FC, MouseEventHandler, useEffect, useRef, useState } from "react";

import "./Select.scss";
import DropDownDefault from "../../../assets/DropDownDefault";
import Option from "./Option";

type OptionType = { value: string; label: string };

interface SelectProps {
  selected: OptionType | null;
  options: OptionType[];
  htmlFor: string;
  textLabel: string;
  placeholder: string;
  textSpan?: string;
  status?: "default" | "invalid";
  onChange?: (selected: OptionType["value"]) => void;
  onClose?: () => void;
}

const Select: FC<SelectProps> = ({
  htmlFor,
  textLabel,
  textSpan,
  options,
  placeholder,
  selected,
  onChange,
  onClose,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: OptionType["value"]) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="form__field-container">
      <div className="form__type-select" ref={rootRef} data-is-active={isOpen}>
        <label className="form__label" htmlFor={htmlFor}>
          {textLabel}
        </label>
        <div className="select__icon-default">
          <DropDownDefault />
        </div>
        <div
          className="select__placeholder"
          data-status={status}
          data-selected={!!selected?.value}
          onClick={handlePlaceHolderClick}
          role="button"
          ref={placeholderRef}
        >
          {selected?.label || placeholder}
        </div>
        {isOpen && (
          <ul className="select__list">
            {options.map((option) => (
              <Option
                key={option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>
      <span className="form__error">{textSpan}</span>
    </div>
  );
};

export default Select;
