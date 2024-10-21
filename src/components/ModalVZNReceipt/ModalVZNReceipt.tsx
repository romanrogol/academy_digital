import { FC } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../ui/Button/Button";
import Options from "../../assets/Options";

import "./ModalVZNReceipt.scss";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

// Страница список ВЗН (ПРИХОД)

interface ModalVZNReceiptProps {}

const ModalVZNReceipt: FC<ModalVZNReceiptProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={"modal__vzn-receipt"}>
        <div className="wrapper__header">
          <ModalHeader headerTitle={"ВЗН УП (Приход)"} />
          <div className="header__wrapper--btn">
            <div onClick={() => navigate(-1)} className="btn-search">
              <Button
                buttonText={"Поиск"}
                className={"button__primary-small"}
                icon={<Options />}
              />
            </div>
          </div>
        </div>
        <div className="modal__vzn-content">
          <div className="list-vzn">
            <div
              onClick={() => navigate("/vzn_receipt-info")}
              className="list-vzn__item"
            >
              <p>Здесь будет БЭК приход</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModalVZNReceipt;
