import { FC } from "react";
import Footer from "../Footer/Footer";
import ModalHeader from "../ModalHeader/ModalHeader";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/Close";

import "./Operation.scss";
import LineTitle from "../ui/LineTitle/LineTitle";
import Button from "../ui/Button/Button";

interface OperationProps {
  numberVZNValue: number;
}

const Operation: FC<OperationProps> = ({ numberVZNValue }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="operation__block">
        <ModalHeader
          headerTitle={"Операция"}
          goBack={closeModal}
          icon={<Close />}
        />
        <div className="operation__block-text">
          <div className="block-text-operation">
            <p className="operation-text">
              Подтвердите выполнение операции:{" "}
              <span className="operation-text-spec">
                Перевод с НеУтв на Утв
              </span>
            </p>
            <LineTitle />
            <div className="operation-text-info">
              <p>
                <span className="operation-text-spec">
                  ВЗН №{numberVZNValue}
                </span>
              </p>
              <p>
                <span className="operation-text-spec">Отправитель: </span>Цех 01
                / Участок Цеха 01
              </p>
              <p>
                <span className="operation-text-spec">Получатель: </span>Цех 01
                / Участок Цеха 01
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper-btn">
          <div className="execute">
            <Button
              buttonText={"Выполнить"}
              className={"form__btn button__primary"}
            />
          </div>
          <div onClick={() => navigate(-1)} className="cancel">
            <Button
              buttonText={"Отменить"}
              className={"form__btn button__secondary"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Operation;
