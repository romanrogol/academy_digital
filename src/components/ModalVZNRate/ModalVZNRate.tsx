import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../ui/Button/Button";
import Options from "../../assets/Options";
import Add from "../../assets/Add";

import "./ModalVZNRate.scss";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// Страница ВЗН УП (Расход)

interface ModalVZNRateProps {}

const ModalVZNRate: FC<ModalVZNRateProps> = ({}) => {
  const [modalVZNRateActive, setModalVZNRateActive] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className={"modal__vzn-rate"}>
        <div className="wrapper__header">
          <ModalHeader headerTitle={"ВЗН УП (Расход)"} />
          <div className="header__wrapper--btn">
            <div onClick={() => navigate(-1)} className="btn-search">
              <Button
                buttonText={"Поиск"}
                className={"button__primary-small"}
                icon={<Options />}
              />
            </div>
            <div
              onClick={() => navigate("/vzn_rate-add-vzn")}
              className="btn-add"
            >
              <Button
                buttonText={"Создать"}
                className={"button__primary-small"}
                icon={<Add />}
              />
            </div>
          </div>
        </div>
        <div className="modal__vzn-content">
          <div className="list-vzn">
            <div
              onClick={() => navigate("/vzn_rate-info")}
              className="list-vzn__item"
            >
              <p>Здесь будет БЭК Расход</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModalVZNRate;
