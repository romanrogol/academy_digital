import { FC, FormEvent, useEffect, useState } from "react";

import "./ModalScan.scss";
import ModalHeader from "../ModalHeader/ModalHeader";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import Close from "../../assets/Close";
import Button from "../ui/Button/Button";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

interface ModalScanProps {}

const ModalScan: FC<ModalScanProps> = ({}) => {
  const [initSelectValue, setInitSelectValue] = useState("");
  const [initInputValue, setInitInputValue] = useState("");

  const [modalScanActive, setModalScanActive] = useState(false);

  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const options = [
    {
      value: "",
      label: "",
    },
    {
      value: "Внутризаводская накладная УП (Расход)",
      label: "Внутризаводская накладная УП (Расход)",
    },
    {
      value: "Внутризаводская накладная УП (Приход)",
      label: "Внутризаводская накладная УП (Приход)",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (initInputValue.trim().length > 0 && initSelectValue.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [initInputValue, initSelectValue]);

  const checkParams = () => {
    if (initInputValue.toString().length > 0 && initSelectValue.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  const handleSelect = (value: string) => {
    setInitSelectValue(value);
    checkParams();
  };

  const handleInputChange = (value: string) => {
    setInitInputValue(value);
    checkParams();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      initInputValue &&
      initSelectValue === "Внутризаводская накладная УП (Расход)"
    ) {
      setButtonActive(true);
      navigate("/vzn_rate-info");
    } else if (
      initInputValue &&
      initSelectValue === "Внутризаводская накладная УП (Приход)"
    ) {
      setButtonActive(true);
      navigate("/vzn_receipt-info");
    }
  };
  const selected = options.find((item) => item.value === initSelectValue);

  const closeModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={"modal"}>
        <ModalHeader
          goBack={closeModal}
          icon={<Close />}
          headerTitle="Сканировать номер объекта"
        />
        <div className="modal__content">
          <p className="modal__content--text">
            Сканируйте штрихкод с номером объекта или введите его вручную.
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type={"text"}
              htmlFor={"number"}
              textLabel={"Номер объекта*"}
              name={"numberObj"}
              setInitInputValue={handleInputChange}
            />
            <Select
              htmlFor={"typeObj"}
              textLabel={"Тип объекта БО*"}
              options={options}
              selected={selected || null}
              onChange={handleSelect}
              placeholder={""}
            />
            <div className="wrapper__btn">
              <Button
                className={
                  buttonActive
                    ? "button__primary form__btn"
                    : "disabled form__btn"
                }
                buttonText="Перейти"
              />
              <Button
                className="button__secondary form__btn"
                buttonText="Отмена"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModalScan;
