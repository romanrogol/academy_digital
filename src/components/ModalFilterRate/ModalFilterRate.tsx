import { FC, FormEvent } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import InputSpec from "../ui/InputSpec/InputSpec";
import FolderInput from "../../assets/FolderInput";
import { useVZN } from "../../contexts/VZNContext"; 
import { useDivisions } from "../../contexts/DivisionsContext"; 
import "./ModalFilterRate.scss";
import Button from "../ui/Button/Button";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const ModalFilterRate: FC = () => {
  const {
    initInputSpecSenderValue,
    setInitInputSpecSenderValue,
    initInputSpecRecipientValue, // Теперь используем из VZNContext
    setInitInputSpecRecipientValue,
    initInputNumberValue, // Теперь используем из VZNContext
    setInitInputNumberValue,
    initInputDateValue, // Теперь используем из VZNContext
    setInitInputDateValue,
  } = useVZN();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/vzn_rate");
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={"modal-filter"}>
        <ModalHeader
          goBack={closeModal}
          icon={<Close />}
          headerTitle="Фильтр ВЗН УП (Расход)"
        />
        <div className="modal-filter__content">
          <form onSubmit={handleSubmit} className="form">
            <Input
              type={"text"}
              htmlFor={"number"}
              textLabel={"Номер ВЗН"}
              name={"numberVZN"}
              setInitInputValue={setInitInputNumberValue}
              initInputValue={initInputNumberValue} // Добавлено
            />
            <InputSpec
              type={"text"}
              htmlFor={"sender"}
              textLabel={"Отправитель"}
              name={"sender"}
              setInitInputValue={setInitInputSpecSenderValue}
              inputIcon={<FolderInput />}
              initInputValue={initInputSpecSenderValue}
            />
            <InputSpec
              type={"text"}
              htmlFor={"recipient"}
              textLabel={"Получатель"}
              name={"recipient"}
              setInitInputValue={setInitInputSpecRecipientValue}
              inputIcon={<FolderInput />}
              initInputValue={initInputSpecRecipientValue}
            />
            <Input
              type={"text"}
              htmlFor={"date"}
              textLabel={"Дата принятия (период)"}
              name={"date"}
              setInitInputValue={setInitInputDateValue}
              initInputValue={initInputDateValue}
            />
            <div className="wrapper__btn">
              <div>
                <Button
                  type={"submit"}
                  buttonText={"Поиск"}
                  className={"button__primary form__btn"}
                />
              </div>
              <div>
                <Button
                  buttonText={"Отмена"}
                  className={"button__secondary form__btn"}
                  onClick={closeModal} // Закрываем модалку при нажатии
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

export default ModalFilterRate;
