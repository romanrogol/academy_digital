import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";

import "./ReceiptElementVZN.scss";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// Страница Просмотр Состава (ПРИХОД)

interface ReceiptElementVZNProps {}

const ReceiptElementVZN: FC<ReceiptElementVZNProps> = ({}) => {
  const [inputIssuedInitValue, setInputIssuedInitValue] = useState("");
  const [inputReceivedInitValue, setInputReceivedInitValue] = useState("");
  const [inputNumberInitValue, setInputNumberInitValue] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={"modal-el"}>
        <ModalHeader
          headerTitle={"Элемент ВЗН №"}
          icon={<Close />}
          goBack={closeModal}
        />
        <div className="modal__content-info-el">
          <div className="info-el">
            <p>№ карточки:</p>
            <p>Обозначение:</p>
            <p>Наименование:</p>
          </div>
          <div className="el__block-input">
            <div className="el__block-input-quantity">
              <Input
                htmlFor={"issued"}
                textLabel={"Выдано (шт)*"}
                type={"text"}
                name={"issued"}
                setInitInputValue={setInputIssuedInitValue}
              />
              <Input
                htmlFor={"received"}
                textLabel={"Получено (шт)*"}
                type={"text"}
                name={"received"}
                setInitInputValue={setInputReceivedInitValue}
              />
            </div>
            <div className="el__block-input-number">
              <Input
                htmlFor={"number"}
                textLabel={"№ Заказа"}
                type={"text"}
                name={"number"}
                setInitInputValue={setInputNumberInitValue}
              />
            </div>
          </div>
        </div>
        <div>Здесь будет пагинация</div>
      </div>
      <Footer />
    </>
  );
};

export default ReceiptElementVZN;
