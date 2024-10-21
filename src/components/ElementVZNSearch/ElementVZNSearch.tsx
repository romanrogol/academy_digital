import { FC, FormEvent, useState } from "react";

import "./ElementVZNSearch.scss";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

// Страница добавления ТМЦ (ШАГ 1)

interface ElementVZNSearchProps {}

const ElementVZNSearch: FC<ElementVZNSearchProps> = ({}) => {
  const [initNumberCard, setInitNumberCard] = useState("");
  const [initDesignationCard, setInitDesignationCard] = useState("");
  const [initNameCard, setInitNameCard] = useState("");
  const [initCodeCard, setInitCodeCard] = useState("");

  const [elementVZNSearchActive, setElementVZNSearchActive] = useState(false);
  const [numberVZNValue, setNumberVZNValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/vzn_rate-add-tmc-choice");
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={"el-search"}>
        <ModalHeader
          headerTitle={`Элемен ВЗН №${numberVZNValue}`}
          icon={<Close />}
          goBack={closeModal}
        />
        <p className="header__dop">Поиск карточки (шаг 1)</p>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            htmlFor={"number"}
            textLabel={"№ карточки"}
            type={"text"}
            name={"number"}
            setInitInputValue={setInitNumberCard}
          />
          <Input
            htmlFor={"designation"}
            textLabel={"Обозначение"}
            type={"text"}
            name={"designation"}
            setInitInputValue={setInitDesignationCard}
          />
          <Input
            htmlFor={"name"}
            textLabel={"Наименование"}
            type={"text"}
            name={"name"}
            setInitInputValue={setInitNameCard}
          />
          <Input
            htmlFor={"code"}
            textLabel={"Заводской код"}
            type={"text"}
            name={"code"}
            setInitInputValue={setInitCodeCard}
          />
          <div className="wrapper__btn">
            <div className="btn__search-card">
              <Button
                buttonText={"Поиск карточки"}
                className={"button__primary form__btn"}
                type="submit"
              />
            </div>
            <div className="btn__cancel-card">
              <Button
                buttonText={"Отмена"}
                className={"button__secondary form__btn"}
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ElementVZNSearch;
