import { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WareHouse from "../../assets/WareHouse";
import Factory from "../../assets/Factory";

const Setting: FC = () => {
  return (
    <div>
      <Header titleHeader="Настройки" />

      <main className="main-tasks">
        <ul className="menu">
          <li className="menu__item">
            <WareHouse />
            <span className="menu__link">Настройка 1</span>
          </li>
          <li className="menu__item">
            <Factory />
            <span className="menu__link">Гастройка 1</span>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Setting;
