import { FC, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import "./ModalVZNRateItem.scss";
import MoreDefault from "../../assets/MoreDefault";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "../ui/BottomSheet/BottomSheet";

// Страница ВЗН (Инфа о ВЗН) (Расход)

interface ModalVZNRateItemProps {}

const ModalVZNRateItem: FC<ModalVZNRateItemProps> = ({}) => {
  const [bottomSheetActive, setBottomSheetActive] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <>
      <div className={"modal-info-rate"}>
        <ModalHeader
          headerTitle={"Здесь будет элемент ВЗН (Расход)"}
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
              onClick={() => navigate("/vzn_rate-element")}
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

export default ModalVZNRateItem;
