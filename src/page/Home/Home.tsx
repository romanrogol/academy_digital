import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";
import BriefCase from "../../assets/BriefCase";
import InfoCircle from "../../assets/InfoCircle";
import SettingIcon from "../../assets/SettingIcon";
import Authorization from "../../components/Authorization/Authorization";

const Home: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Header titleHeader="Меню" />
      <main className="main-home">
        <ul className="menu">
          <li className="menu__item">
            <BriefCase />
            <Link className="menu__link" to="/task">
              Задачи
            </Link>
          </li>
          <li className="menu__item">
            <SettingIcon />
            <Link className="menu__link" to="/setting">
              Настройки
            </Link>
          </li>
          <li className="menu__item">
            <InfoCircle />
            <span className="menu__link">О системе</span>
          </li>
        </ul>
      </main>
      <Footer />
      <Authorization isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
};

export default Home;
