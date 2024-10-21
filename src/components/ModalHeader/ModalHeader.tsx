import { FC, ReactNode } from "react";

import "./ModalHeader.scss";
import { useNavigate } from "react-router-dom";

interface ModalHeaderProps {
  headerTitle: string;
  icon?: ReactNode;
  goBack?: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({ headerTitle, icon, goBack }) => {
  const defaultState = () => {
    return;
  };

  const handleClick = () => {
    (goBack || defaultState)();
  };

  return (
    <div className="modal-header">
      <div onClick={() => handleClick()} className="modal-header__icon">
        {icon}
      </div>
      <h4 className="modal-header__title">{headerTitle}</h4>
    </div>
  );
};

export default ModalHeader;
