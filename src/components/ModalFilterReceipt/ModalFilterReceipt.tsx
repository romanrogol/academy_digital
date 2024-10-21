import { FC, FormEvent, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import InputSpec from "../ui/InputSpec/InputSpec";
import FolderInput from "../../assets/FolderInput";

import "./ModalFilterReceipt.scss";
import Button from "../ui/Button/Button";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// Страница Фильтр ВЗН Приход !!!!!!!!!

interface ModalFilterReceiptProps {}

const ModalFilterReceipt: FC<ModalFilterReceiptProps> = ({}) => {
  const [initInputNumberValue, setInitInputNumberValue] = useState("");
  const [initInputDateValue, setInitInputDateValue] = useState("");
  const [initInputSpecSenderValue, setInitInputSpecSenderValue] = useState("");
  const [initInputSpecRecipientValue, setInitInputSpecRecipientValue] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/vzn_receipt");
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={"modal-filter"}>
        <ModalHeader
          icon={<Close />}
          headerTitle="Фильтр ВЗН УП (Приход)"
          goBack={closeModal}
        />
        <div className="modal-filter__content">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type={"text"}
              htmlFor={"number"}
              textLabel={"Номер ВЗН"}
              name={"numberVZN"}
              setInitInputValue={setInitInputNumberValue}
            />
            <InputSpec
              type={"text"}
              htmlFor={"sender"}
              textLabel={"Отправитель"}
              name={"sender"}
              setInitInputValue={setInitInputSpecSenderValue}
              inputIcon={<FolderInput />}
            />
            <InputSpec
              type={"text"}
              htmlFor={"recipient"}
              textLabel={"Получатель"}
              name={"recipient"}
              setInitInputValue={setInitInputSpecRecipientValue}
              inputIcon={<FolderInput />}
            />
            <Input
              type={"text"}
              htmlFor={"date"}
              textLabel={"Дата принятия (период)"}
              name={"date"}
              setInitInputValue={setInitInputDateValue}
            />
            <div className="wrapper__btn">
              <div className="search-btn">
                <Button
                  type={"submit"}
                  buttonText={"Поиск"}
                  className={"button__primary form__btn"}
                />
              </div>
              <div onClick={() => closeModal()} className="cancel-btn">
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

export default ModalFilterReceipt;
