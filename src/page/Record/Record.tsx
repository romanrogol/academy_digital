import { FC, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Record.scss";
import ModalFilterRate from "../../components/ModalFilterRate/ModalFilterRate";
import { Link } from "react-router-dom";

const Record: FC = () => {
  const [modalFilterRateActive, setModalRateFilterActive] =
    useState<boolean>(false);
  const [modalReceiptFilterActive, setModalReceiptFilterActive] =
    useState<boolean>(false);
  const [modalListDepartActive, setModalListDepartActive] =
    useState<boolean>(false);

  const [modalVZNRateActive, setModalVZNRateActive] = useState<boolean>(false);
  const [modalVZNReceiptActive, setModalVZNReceiptActive] =
    useState<boolean>(false);

  const [modalVZNInfoReceiptActive, setModalVZNInfoReceiptActive] =
    useState<boolean>(false);
  const [modalVZNInfoRateActive, setModalVZNInfoRateActive] =
    useState<boolean>(false);

  const [modalVZNElReceiptActive, setModalVZNElReceiptActive] =
    useState<boolean>(false);
  const [modalVZNElRateActive, setModalVZNElRateActive] =
    useState<boolean>(false);

  const [addVZNRateActive, setAddVZNRateActive] = useState<boolean>(false);
  const [modalVZNAddRateItemActive, setModalVZNAddRateItemActive] =
    useState<boolean>(false);
  const [elementVZNSearchActive, setElementVZNSearchActive] =
    useState<boolean>(false);
  const [elementVZNChoiceActive, setElementVZNChoiceActive] =
    useState<boolean>(false);
  const [elementVZNAddActive, setElementVZNAddActive] =
    useState<boolean>(false);
  const [elementVZNEditActive, setElementVZNEditActive] =
    useState<boolean>(false);

  return (
    <div>
      <Header titleHeader={"Учёт в производстве"} />
      <main className="main-record">
        <ul className="menu">
          <li className="menu__item">
            <span className="menu__link">Акты инвентаризации</span>
          </li>
          <Link to="/filter_receipt" className="menu__item">
            <span
              onClick={() => setModalReceiptFilterActive(true)}
              className="menu__link"
            >
              Внутризаводские накладные (Приход)
            </span>
          </Link>
          <Link to="/filter_rate" className="menu__item">
            <span
              onClick={() => setModalRateFilterActive(true)}
              className="menu__link"
            >
              Внутризаводские накладные (Расход)
            </span>
          </Link>
          <li className="menu__item">
            <span className="menu__link">Лимитные карты (Приход)</span>
          </li>
          <li className="menu__item">
            <span className="menu__link">Цеховая номенклатура</span>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Record;
