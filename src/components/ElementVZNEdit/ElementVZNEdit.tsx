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
<<<<<<< HEAD
import { BottomSheet } from "../BottomSheet/BottomSheet";
import { Pagination } from "../Pagination/Pagination";
=======
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7

// СТРАНИЦА РЕДАКТИРОВАНИЕ СОСТАВА

interface ElementVZNEditProps {}

const ElementVZNEdit: FC<ElementVZNEditProps> = ({}) => {
  const [inputIssuedInitValue, setInputIssuedInitValue] = useState("");
  const [inputReceivedInitValue, setInputReceivedInitValue] = useState("");
  const [inputNumberInitValue, setInputNumberInitValue] = useState("");
  const [numberVZNValue, setNumberVZNValue] = useState("");
<<<<<<< HEAD
  const [bottomSheetActive, setBottomSheetActive] = useState<boolean>(false);

  const totalPages = 2;
=======
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7

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
<<<<<<< HEAD
          <MoreDefault onClick={() => setBottomSheetActive(true)}/>
=======
          <MoreDefault />
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7
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
<<<<<<< HEAD
            <Pagination totalPages={totalPages} />
=======
            <div>Здесь будет пагинация</div>
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7
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
<<<<<<< HEAD
        <BottomSheet isOpen={bottomSheetActive} onClose={() => setBottomSheetActive(false)} />
=======
>>>>>>> 32b1e6c509d1c063bdd5ee687a2ffcd430ebe3b7
      </div>
      <Footer />
    </>
  );
};

export default ElementVZNEdit;
