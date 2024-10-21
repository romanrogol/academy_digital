import { FC, FormEvent, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import InputSpec from "../ui/InputSpec/InputSpec";

import "./AddVZNRate.scss";
import FolderInput from "../../assets/FolderInput";
import Input from "../ui/Input/Input";
import LeftArrow from "../../assets/LeftArrow";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

// Страница Создать ВЗН (РАСХОД)

interface AddVZNRateProps {}

const AddVZNRate: FC<AddVZNRateProps> = ({}) => {
  const [numberVZNValue, setNumberVZNValue] = useState(0);
  const [senderVZNValue, setSenderVZNValue] = useState("");
  const [recipientVZNValue, setRecipientVZNValue] = useState("");
  const [nameVZNValue, setNameVZNValue] = useState("");
  const [nameRecVZNValue, setNameRecVZNValue] = useState("");
  const [dateVZNValue, setDateVZNValue] = useState("");

  const [addVZNRateActive, setAddVZNRateActive] = useState(false);

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
      <div className={"add-vzn-rate"}>
        <ModalHeader
          headerTitle={"Создание ВЗН (Расход)"}
          icon={<Close />}
          goBack={closeModal}
        />
        <div className="modal__content">
          <form className="form" onSubmit={handleSubmit}>
            <InputSpec
              htmlFor={"numberVZN"}
              textLabel={"№ ВЗН"}
              type={"text"}
              name={"numberVZN"}
              initInputValue={numberVZNValue}
              setInitInputValue={setNumberVZNValue}
              inputIcon={<LeftArrow />}
            />
            <InputSpec
              htmlFor={"sender"}
              textLabel={"Отправитель*"}
              type={"text"}
              name={"sender"}
              setInitInputValue={setSenderVZNValue}
              inputIcon={<FolderInput />}
            />
            <InputSpec
              type={"text"}
              htmlFor={"recipient"}
              textLabel={"Получатель*"}
              name={"recipient"}
              setInitInputValue={setRecipientVZNValue}
              inputIcon={<FolderInput />}
            />
            <InputSpec
              htmlFor={"name"}
              textLabel={"Выдал МОЛ*"}
              type={"text"}
              name={"name"}
              setInitInputValue={setNameVZNValue}
              inputIcon={<FolderInput />}
            />
            <Input
              htmlFor={"date"}
              textLabel={"Дата выдачи*"}
              type={"text"}
              name={"date"}
              setInitInputValue={setDateVZNValue}
            />
            <InputSpec
              htmlFor={"nameRec"}
              textLabel={"Принял МОЛ*"}
              type={"text"}
              name={"nameRec"}
              setInitInputValue={setNameRecVZNValue}
              inputIcon={<FolderInput />}
            />
            <div className="wrapper__btn">
              <div className="add-button">
                <Button
                  buttonText={"Создать"}
                  className={"button__primary form__btn"}
                  type="submit"
                />
              </div>
              <div className="cancel-button">
                <Button
                  buttonText={"Отмена"}
                  className={"button__secondary form__btn "}
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

export default AddVZNRate;
