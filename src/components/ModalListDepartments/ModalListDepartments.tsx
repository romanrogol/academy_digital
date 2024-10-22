import { FC } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";

import "./ModalListDepartments.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

interface ModalListDepartmentsProps {}

const ModalListDepartments: FC<ModalListDepartmentsProps> = ({}) => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate(-1);
  };
  return (
    <div className={"modal-list__deport"}>
      <ModalHeader
        headerTitle={"Список подразделений"}
        icon={<Close />}
        goBack={closeModal}
      />
      <div className="modal-list__content">
        <div className="list-deport">
          <div className="list-deport__item">
            <p>Здесь будет БЭК подразделений</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModalListDepartments;
