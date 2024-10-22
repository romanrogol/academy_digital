import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import MoreDefault from "../../assets/MoreDefault";

import "./ModalVZNReceiptItem.scss";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "../ui/BottomSheet/BottomSheet";

// Страница ВЗН (ИНФА о ВЗН) (ПРИХОД)

interface ModalVZNReceiptItemProps {}

const ModalVZNReceiptItem: FC<ModalVZNReceiptItemProps> = ({}) => {
  const [bottomSheetActive, setBottomSheetActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={"modal-info-vzn"}>
        <ModalHeader
          headerTitle={"Здесь будет элемент ВЗН (Приход)"}
          icon={<MoreDefault onClick={() => setBottomSheetActive(true)} />}
        />
        <div className="header__info">
          <p>Отправитель:</p>
          <p>Получатель:</p>
          <p>Статус:</p>
          <p>Дата выдачи:</p>
        </div>
        <div className="modal-list__content">
          <div className="list-detail">
            <div
              onClick={() => navigate("/vzn_receipt-element")}
              className="list-detail__item"
            >
              <p>Здесь будет БЭК деталий</p>
            </div>
          </div>
        </div>
        <BottomSheet
          isOpen={bottomSheetActive}
          onClose={() => setBottomSheetActive(false)}
        />
      </div>
      <Footer />
    </>
  );
};

export default ModalVZNReceiptItem;
