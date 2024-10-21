import { FC, ReactNode } from "react";

import "./Button.scss";

interface ButtonProps {
  buttonText: string;
  className: string;
  icon?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: FC<ButtonProps> = ({ buttonText, className, icon, type }) => {
  return (
    <>
      <button type={type} className={className}>
        {icon}
        {buttonText}
      </button>
    </>
  );
};

export default Button;
