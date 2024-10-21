import { FC } from "react";
import "./Header.scss";

interface HeaderProps {
  titleHeader: string;
}

const Header: FC<HeaderProps> = ({ titleHeader }) => {
  return (
    <header className="header">
      <h4 className="header__title">{titleHeader}</h4>
    </header>
  );
};

export default Header;
