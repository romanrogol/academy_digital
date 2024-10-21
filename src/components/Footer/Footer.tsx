import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../assets/Menu";
import ScanDefault from "../../assets/ScanDefault";
import ArrowBack from "../../assets/ArrowBack";

import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const navigate = useNavigate();

  const [modalScanActive, setModalScanActive] = useState<boolean>(false);

  const goBack = () => {
    const closeModal = (setModal: (active: boolean) => void) => setModal(false);

    if (modalScanActive) {
      closeModal(setModalScanActive);
    } else {
      navigate(-1);
    }
  };

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={"/"} className="nav__link link-menu">
              <Menu />
              <span className="nav__link-text">Меню</span>
            </Link>
          </li>
          <Link className="nav__item" to={"/scan"}>
            <a className="nav__link link-scanner">
              <ScanDefault />
              <span className="nav__link-text">Сканер</span>
            </a>
          </Link>
          <li onClick={() => goBack()} className="nav__item">
            <a className="nav__link link-back">
              <ArrowBack />
              <span className="nav__link-text">Назад</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
