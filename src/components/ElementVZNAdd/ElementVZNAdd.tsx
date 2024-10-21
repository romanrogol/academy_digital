import { FC, FormEvent, useState } from "react";

import "./ElementVZNAdd.scss";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import Change from "../../assets/Change";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// СТРАНИЦА ВЗН Добавление ТМЦ

interface ElementVZNAddProps {}

const ElementVZNAdd: FC<ElementVZNAddProps> = ({}) => {
  const [inputIssuedInitValue, setInputIssuedInitValue] = useState("");
  const [inputReceivedInitValue, setInputReceivedInitValue] = useState("");
  const [inputNumberInitValue, setInputNumberInitValue] = useState("");
  const [numberVZNValue, setNumberVZNValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/vzn_rate-add-vzn-info");
  };

  const closeModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={"modal-el-add"}>
        <ModalHeader
          headerTitle={`Элемент ВЗН №${numberVZNValue}`}
          icon={<Close />}
          goBack={closeModal}
        />
        <div className="modal__content-info-el">
          <div className="info-el">
            <p>№ карточки:</p>
            <p>Обозначение:</p>
            <p>Наименование:</p>
            <p>Заводской код:</p>
            <p>Тип продукции:</p>
          </div>
          <div
            onClick={() => navigate("/vzn_rate-add-tmc-add")}
            className="change-card__btn"
          >
            <Button
              buttonText={"Сменить карточку"}
              className={"button__primary-small"}
              icon={<Change />}
            />
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="wrapper__btn">
              <div className="btn__add-card">
                <Button
                  buttonText={"Добавить"}
                  className={"button__primary form__btn"}
                  type="submit"
                />
              </div>
              <div onClick={() => closeModal()} className="btn__cancel-card">
                <Button
                  buttonText={"Отмена"}
                  className={"button__secondary form__btn"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ElementVZNAdd;
