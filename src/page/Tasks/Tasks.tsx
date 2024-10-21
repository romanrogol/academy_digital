import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WareHouse from "../../assets/WareHouse";
import Factory from "../../assets/Factory";

import "./Tasks.scss";

const Tasks: FC = () => {
  return (
    <>
      <Header titleHeader={"Задачи"} />
      <main className="main-tasks">
        <ul className="menu">
          <li className="menu__item">
            <WareHouse />
            <span className="menu__link">Складской учёт</span>
          </li>
          <li className="menu__item">
            <Factory />
            <Link className="menu__link" to="/record">
              Учёт в производстве
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Tasks;
