import React, { FC, useContext } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import InputSpec from "../ui/InputSpec/InputSpec";
import "./AddVZNRate.scss";
import FolderInput from "../../assets/FolderInput";
import Input from "../ui/Input/Input";
import LeftArrow from "../../assets/LeftArrow";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useVZN } from "../../contexts/VZNContext";
import axios from "axios"; // Импортируем axios
import Footer from "../Footer/Footer";
import { useImmer } from "use-immer";
import { AuthContext } from "../../contexts/AuthContext"; // Импортируем AuthContext

const AddVZNRate: FC = () => {
  const { numberVZNValue, setNumberVZNValue } = useVZN();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext); // Получаем состояние аутентификации

  const [inputSender, updateInputSender] = useImmer({
    value: "",
    isNull: false,
  });

  const [inputRecipient, updateInputRecipient] = useImmer({
    value: "",
    isNull: false,
  });

  const [inputName, updateInputName] = useImmer({
    value: "",
    isNull: false,
  });

  const [inputDate, updateInputDate] = useImmer({
    value: "",
    isNull: false,
  });

  const [inputNameRec, updateInputNameRec] = useImmer({
    value: "",
    isNull: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateFields()) {
      const token = isAuth ? 'ваш токен' : null; // Получаем токен аутентификации из контекста
      const data = {
        Num: numberVZNValue,
        DocDate: inputDate.value,
        Sender: inputSender.value,
        Receiver: inputRecipient.value,
        LeaveMoveDate: inputDate.value,
        ArrivalMoveDate: inputDate.value,
        bo: {
          so: {
            attrs: [{
              Code: 0, // Укажите нужные значения
              IsNull: false,
              MeasCode: 0,
              Value: inputName.value,
            }]
          }
        }
      };

      try {
        const response = await axios.post('http://92.55.15.91:8225/stock/wsInplants.insert', {
          authToken: token,
          data: data
        });

        console.log(response); // Логируем ответ сервера
        navigate("/vzn_rate-add-vzn-info"); // Переход на другую страницу при успешном создании
      } catch (error) {
        console.error("Ошибка создания новой ВЗН УП:", error); // Логируем ошибку
      }
    }
  };

  const validateFields = () => {
    let isValid = true;

    if (!inputSender.value) {
      updateInputSender((draft) => {
        draft.isNull = true;
      });
      isValid = false;
    } else {
      updateInputSender((draft) => {
        draft.isNull = false;
      });
    }

    if (!inputRecipient.value) {
      updateInputRecipient((draft) => {
        draft.isNull = true;
      });
      isValid = false;
    } else {
      updateInputRecipient((draft) => {
        draft.isNull = false;
      });
    }

    if (!inputName.value) {
      updateInputName((draft) => {
        draft.isNull = true;
      });
      isValid = false;
    } else {
      updateInputName((draft) => {
        draft.isNull = false;
      });
    }

    if (!inputDate.value) {
      updateInputDate((draft) => {
        draft.isNull = true;
      });
      isValid = false;
    } else {
      updateInputDate((draft) => {
        draft.isNull = false;
      });
    }

    if (!inputNameRec.value) {
      updateInputNameRec((draft) => {
        draft.isNull = true;
      });
      isValid = false;
    } else {
      updateInputNameRec((draft) => {
        draft.isNull = false;
      });
    }

    return isValid;
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={"add-vzn-rate"}>
        <ModalHeader
          headerTitle={"Создание ВЗН (Расход)"}
          icon={<Close />}
          goBack={closeModal}
        />
        <div className="modal__content">
          <form className="form" onSubmit={handleSubmit}>
            <InputSpec
              htmlFor={"numberVZN"}
              textLabel={"№ ВЗН"}
              type={"text"}
              name={"numberVZN"}
              initInputValue={numberVZNValue}
              setInitInputValue={setNumberVZNValue}
              inputIcon={<LeftArrow />}
            />
            <InputSpec
              htmlFor={"sender"}
              textLabel={"Отправитель*"}
              type={"text"}
              name={"sender"}
              initInputValue={inputSender.value}
              setInitInputValue={(value: string) => updateInputSender((draft) => { draft.value = value; })}
              inputIcon={<FolderInput />}
              isNull={inputSender.isNull}
              textError="Поле не может быть пустым"
            />
            <InputSpec
              type={"text"}
              htmlFor={"recipient"}
              textLabel={"Получатель*"}
              name={"recipient"}
              initInputValue={inputRecipient.value}
              setInitInputValue={(value: string) => updateInputRecipient((draft) => { draft.value = value; })}
              inputIcon={<FolderInput />}
              isNull={inputRecipient.isNull}
              textError="Поле не может быть пустым"
            />
            <InputSpec
              htmlFor={"name"}
              textLabel={"Выдал МОЛ*"}
              type={"text"}
              name={"name"}
              initInputValue={inputName.value}
              setInitInputValue={(value: string) => updateInputName((draft) => { draft.value = value; })}
              inputIcon={<FolderInput />}
              isNull={inputName.isNull}
              textError="Поле не может быть пустым"
            />
            <Input
              htmlFor={"date"}
              textLabel={"Дата выдачи*"}
              type={"text"}
              name={"date"}
              initInputValue={inputDate.value}
              setInitInputValue={(value: string) => updateInputDate((draft) => { draft.value = value; })}
              isNull={inputDate.isNull}
              textError="Поле не может быть пустым"
            />
            <InputSpec
              htmlFor={"nameRec"}
              textLabel={"Принял МОЛ*"}
              type={"text"}
              name={"nameRec"}
              initInputValue={inputNameRec.value}
              setInitInputValue={(value: string) => updateInputNameRec((draft) => { draft.value = value; })}
              inputIcon={<FolderInput />}
              isNull={inputNameRec.isNull}
              textError="Поле не может быть пустым"
            />
            <div className="wrapper__btn">
              <div className="add-button">
                <Button
                  buttonText={"Создать"}
                  className={"button__primary form__btn"}
                  type="submit"
                />
              </div>
              <div className="cancel-button">
                <Button
                  buttonText={"Отмена"}
                  className={"button__secondary form__btn"}
                  onClick={closeModal}
                />
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddVZNRate;
