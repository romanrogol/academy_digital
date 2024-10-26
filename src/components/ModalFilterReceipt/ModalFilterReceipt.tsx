import { FC, FormEvent, useState, useEffect } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import InputSpec from "../ui/InputSpec/InputSpec";
import FolderInput from "../../assets/FolderInput";
import "./ModalFilterReceipt.scss";
import Button from "../ui/Button/Button";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDivisions } from "../../contexts/DivisionsContext";

interface ModalFilterReceiptProps {}

const ModalFilterReceipt: FC<ModalFilterReceiptProps> = () => {
  const [initInputNumberValue, setInitInputNumberValue] = useState("");
  const [initInputDateValue, setInitInputDateValue] = useState("");
  const [initInputSpecSenderValue, setInitInputSpecSenderValue] = useState("");
  const [initInputSpecRecipientValue, setInitInputSpecRecipientValue] = useState("");

  const { selectedDivision, activeInputs, addActiveInput, removeActiveInput } = useDivisions();
  const navigate = useNavigate();

  useEffect(() => {
    // Если выбранное подразделение изменилось, обновляем значения инпутов, если они активны
    if (selectedDivision) {
      if (activeInputs.includes("sender")) {
        setInitInputSpecSenderValue(selectedDivision);
      }
      if (activeInputs.includes("recipient")) {
        setInitInputSpecRecipientValue(selectedDivision);
      }
    }
  }, [selectedDivision, activeInputs]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/vzn_receipt");
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="modal-filter">
        <ModalHeader
          icon={<Close />}
          headerTitle="Фильтр ВЗН УП (Приход)"
          goBack={closeModal}
        />
        <div className="modal-filter__content">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              htmlFor="number"
              textLabel="Номер ВЗН"
              name="numberVZN"
              setInitInputValue={setInitInputNumberValue}
            />
            <InputSpec
              type="text"
              htmlFor="sender"
              textLabel="Отправитель"
              name="sender"
              initInputValue={initInputSpecSenderValue}
              setInitInputValue={setInitInputSpecSenderValue}
              inputIcon={<FolderInput />}
              setActiveInput={() => addActiveInput("sender")}
            />
            <InputSpec
              type="text"
              htmlFor="recipient"
              textLabel="Получатель"
              name="recipient"
              initInputValue={initInputSpecRecipientValue}
              setInitInputValue={setInitInputSpecRecipientValue}
              inputIcon={<FolderInput />}
              setActiveInput={() => addActiveInput("recipient")}
            />
            <Input
              type="text"
              htmlFor="date"
              textLabel="Дата принятия (период)"
              name="date"
              setInitInputValue={setInitInputDateValue}
            />
            <div className="wrapper__btn">
              <div className="search-btn">
                <Button
                  type="submit"
                  buttonText="Поиск"
                  className="button__primary form__btn"
                />
              </div>
              <div onClick={closeModal} className="cancel-btn">
                <Button
                  buttonText="Отмена"
                  className="button__secondary form__btn"
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
