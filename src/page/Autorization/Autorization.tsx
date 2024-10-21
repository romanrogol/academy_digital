import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import './Autorization.css';
import autorizationMainLogo from './Autorization_icons/autorization-main-logo.svg';
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Footer from "../../components/Footer/Footer";

export const Autorization: React.FC = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate(); 

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 


        try {
            const response = await axios.post("http://92.55.15.91:8225/login.getAuthToken", {
                login,
                password,
            });

            if (response.data.error) {
                setError("Ошибка при авторизации: " + response.data.error.String);
                return;
            }

            const authToken = response.data.authToken; 

            if (authToken) {
                localStorage.setItem("authToken", authToken);
                navigate("/");
            } else {
                setError("Токен не найден в ответе.");
            }

        } catch (err) {
            console.error("Ошибка при авторизации:", err);
            setError("Ошибка при авторизации. Проверьте логин и пароль.");
        }
    };

    return (
        <div className="autorization-wrap">
            <div className="autorization-main">
                <div className="autorization-main-logo">
                    <img src={autorizationMainLogo} alt="logo" />
                    <div className="autorization-main-textwrap">
                        <p>OmpMobile</p>
                    </div>
                </div>
                <form className="autorization-main-inputarea" onSubmit={handleLogin}>
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
                        className="form__btn button__primary"
                        type="submit"  
                        buttonText = 'Войти'
                         />
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
            <Footer />
        </div>
    );
};
