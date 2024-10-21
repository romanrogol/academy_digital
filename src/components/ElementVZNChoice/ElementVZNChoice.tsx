import { FC, FormEvent, useState } from "react";

import "./ElementVZNChoice.scss";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// СТРАНИЦА ВЗН ДОБАВЛЕНИЯ ТМЦ (ШАГ 2)

interface ElementVZNChoiceProps {}

const ElementVZNChoice: FC<ElementVZNChoiceProps> = ({}) => {
  const [numberVZNValue, setNumberVZNValue] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={"el-choice"}>
        <ModalHeader
          headerTitle={`Элемен ВЗН №${numberVZNValue}`}
          icon={<Close />}
          goBack={closeModal}
        />
        <p className="header__dop">Выбор карточки (шаг 2)</p>
        <div className="modal-list__content">
          <div className="list-choice">
            <div
              onClick={() => navigate("/vzn_rate-add-tmc-element")}
              className="list-choice__item"
            >
              <p>Здесь будет БЭК карточек</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ElementVZNChoice;
