import { FormEvent, useState, FC } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Authorization.scss";

import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Footer from "../Footer/Footer";
import AuthLogo from "../../assets/AuthLogo";

interface AuthorizationProps {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

const Authorization: FC<AuthorizationProps> = ({ isAuth, setIsAuth }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://92.55.15.91:8225/login.getAuthToken",
        {
          login,
          password,
        }
      );

      if (response.data.error && response.data.error.String) {
        setError("Ошибка при авторизации: " + response.data.error.String);
        return;
      }

      const authToken = response.data.authToken;

      if (authToken) {
        localStorage.setItem("authToken", authToken);
        setIsAuth(true);
      } else {
        setError("Токен не найден в ответе.");
      }
    } catch (err) {
      console.error("Ошибка при авторизации:", err);
      setError("Ошибка при авторизации. Проверьте логин и пароль.");
    }
  };

  return (
    <div
      className={isAuth ? "authorization-wrap" : "authorization-wrap active"}
    >
      <div className="authorization-main">
        <div className="authorization-main-logo">
          <AuthLogo />
          <div className="authorization-main-textwrap">
            <p>OmpMobile</p>
          </div>
        </div>
        <form className="authorization-main-inputarea" onSubmit={handleLogin}>
          <Input
            htmlFor="loginInput"
            textLabel="Логин"
            type="text"
            name="loginInput"
            setInitInputValue={setLogin}
          />
          <Input
            htmlFor="passwordInput"
            textLabel="Пароль"
            type="password"
            name="passwordInput"
            setInitInputValue={setPassword}
          />
          <Button
            className={"form__btn button__primary"}
            type="submit"
            buttonText="Войти"
          />
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Authorization;
