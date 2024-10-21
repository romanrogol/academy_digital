import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";

import "./RateElementVZN.scss";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Pagination } from "../Pagination/Pagination";
=======
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7

// СТРАНИЦА ПРОСМОТР СОСТАВА (РАСХОД)

interface RateElementVZNProps {}

const RateElementVZN: FC<RateElementVZNProps> = ({}) => {
  const [modalVZNElRateActive, setModalVZNElRateActive] = useState(false);
  const [inputIssuedInitValue, setInputIssuedInitValue] = useState("");
  const [inputReceivedInitValue, setInputReceivedInitValue] = useState("");
  const [inputNumberInitValue, setInputNumberInitValue] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };
<<<<<<< HEAD

  const totalPages = 3;

=======
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7
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
<<<<<<< HEAD
        <Pagination totalPages={totalPages}/>
=======
        <div>Здесь будет пагинация</div>
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7
      </div>
      <Footer />
    </>
  );
};

export default RateElementVZN;
