import { FC, useState } from "react";

import "./ModalVZNAddItem.scss";
import ModalHeader from "../ModalHeader/ModalHeader";
import MoreDefault from "../../assets/MoreDefault";
import Button from "../ui/Button/Button";
import Add from "../../assets/Add";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// СТРАНИЦА ВЗН (ИНФА О ВЗН) (РАСХОД)

interface ModalVZNAddRateItemProps {}

const ModalVZNAddRateItem: FC<ModalVZNAddRateItemProps> = ({}) => {
  const [numberVZNValue, setnumberVZNValue] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <div className={"modal-vzn-add"}>
        <ModalHeader
          headerTitle={`ВЗН №${numberVZNValue} (Расход)`}
          icon={<MoreDefault />}
        />
        <div className="header__info">
          <p>Отправитель:</p>
          <p>Получатель:</p>
          <p>Статус:</p>
          <p>Дата выдачи:</p>
        </div>
        <div
          onClick={() => navigate("/vzn_rate-add-tmc-add")}
          className="btn-rate__add"
        >
          <Button
            buttonText={"Создать"}
            className={"button__primary-small"}
            icon={<Add />}
          />
        </div>
        <div className="modal-vzn-add__content">
          <div className="list-detail">
            <div
              onClick={() => navigate("/vzn_rate-edit-tmc-element")}
              className="list-detail__item"
            >
              <p>Здесь будет БЭК деталий</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModalVZNAddRateItem;
