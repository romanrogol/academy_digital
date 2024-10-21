import { FC } from "react";

import "./TextArea.scss";

interface TextAreaProps {
  htmlFor: string;
  textLabel: string;
  name: string;
  placeholder: string;
  textSpan: string;
}

const TextArea: FC<TextAreaProps> = ({
  htmlFor,
  textLabel,
  name,
  placeholder,
  textSpan,
}) => {
  return (
    <div className="form__field-container">
      <label className="form__label" htmlFor={htmlFor}>
        {textLabel}
      </label>
      <textarea
        className="form__type-text-area"
        name={name}
        id={htmlFor}
        placeholder={placeholder}
      ></textarea>
      <span className="form__error">{textSpan}</span>
    </div>
  );
};

export default TextArea;
