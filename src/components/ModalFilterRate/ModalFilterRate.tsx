import { FC, FormEvent, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import InputSpec from "../ui/InputSpec/InputSpec";
import FolderInput from "../../assets/FolderInput";

import "./ModalFilterRate.scss";
import Button from "../ui/Button/Button";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// СТРАНИЦА ФИЛЬТР ВЗН (РАСХОД)

interface ModalFilterRateProps {
  initInputSpecSenderValue: string;
  setInitInputSpecSenderValue: (initInputSpecSenderValue: string) => void;
}

const ModalFilterRate: FC<ModalFilterRateProps> = ({
  initInputSpecSenderValue,
  setInitInputSpecSenderValue,
}) => {
  const [initInputNumberValue, setInitInputNumberValue] = useState("");
  const [initInputDateValue, setInitInputDateValue] = useState("");

  const [initInputSpecRecipientValue, setInitInputSpecRecipientValue] =
    useState("");

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
            />
            <Input
              type={"text"}
              htmlFor={"date"}
              textLabel={"Дата принятия (период)"}
              name={"date"}
              setInitInputValue={setInitInputDateValue}
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
