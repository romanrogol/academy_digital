import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Button from "../ui/Button/Button";
import Change from "../../assets/Change";
import Input from "../ui/Input/Input";

import "./ElementVZNEdit.scss";
import MoreDefault from "../../assets/MoreDefault";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { Pagination } from "../Pagination/Pagination";

// СТРАНИЦА РЕДАКТИРОВАНИЕ СОСТАВА

interface ElementVZNEditProps {}

const ElementVZNEdit: FC<ElementVZNEditProps> = ({}) => {
  const [inputIssuedInitValue, setInputIssuedInitValue] = useState("");
  const [inputReceivedInitValue, setInputReceivedInitValue] = useState("");
  const [inputNumberInitValue, setInputNumberInitValue] = useState("");
  const [numberVZNValue, setNumberVZNValue] = useState("");
  const [bottomSheetActive, setBottomSheetActive] = useState<boolean>(false);

  const totalPages = 2;

  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={"modal-el-edit"}>
        <ModalHeader
          headerTitle={`Элемент ВЗН №${numberVZNValue}`}
          icon={<Close />}
          goBack={closeModal}
        />
        <div className="icon__bottom-sheet">
          <MoreDefault onClick={() => setBottomSheetActive(true)}/>
        </div>
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
          <form>
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
            <Pagination totalPages={totalPages} />
            <div className="wrapper__btn">
              <div
                onClick={() => navigate("/vzn_rate-add-vzn-info")}
                className="btn__add-card"
              >
                <Button
                  buttonText={"Сохранить"}
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
        <BottomSheet isOpen={bottomSheetActive} onClose={() => setBottomSheetActive(false)} />
      </div>
      <Footer />
    </>
  );
};

export default ElementVZNEdit;
