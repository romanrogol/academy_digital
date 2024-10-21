import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import './Autorization.css';
import autorizationMainLogo from './Autorization_icons/autorization-main-logo.svg';
import Button from "../../components/ui/Button/Button";

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
                navigate("/main");
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
                    <fieldset className="form-number">
                        <legend className="legend"><p>Логин</p></legend>
                        <input
                            type="text"
                            id="numberInput"
                            name="numberInput"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="form-number">
                        <legend className="legend"><p>Пароль</p></legend>
                        <input
                            type="password"
                            id="senderInput"
                            name="senderInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>
                    {error && <div className="error-message">{error}</div>}
                    <Button className="form-btn"
                         type="submit"  buttonText = 'Войти'/>
                    
                </form>
            </div>
        </div>
    );
};
