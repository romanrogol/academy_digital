import { FC, useEffect, useState } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./ModalListDepartments.scss";
import { useNavigate } from "react-router-dom";

interface Division {
  code: number;
  name: string;
}

interface ModalListDepartmentsProps {
  onDevisionSelect: (division: string) => void;
}

const ModalListDepartments: FC<ModalListDepartmentsProps> = ({
  onDevisionSelect,
}) => {
  const navigate = useNavigate();
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const closeModal = () => {
    navigate(-1);
  };

  const fetchDivisions = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      setError("Токен аутентификации отсутствует.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://92.55.15.91:8225/divisions/storeDivisions.avDivisions",
        {
          authToken: authToken,
          params: {
            CurrentDivType: 105,
            IsFilter: true,
          },
        }
      );

      console.log("Ответ от сервера:", response.data); // Логируем ответ

      // Проверяем, есть ли массив divisions в ответе
      if (response.data && Array.isArray(response.data.divisions)) {
        setDivisions(response.data.divisions); // Устанавливаем массив подразделений
      } else {
        setError("Полученные данные не являются массивом.");
      }
    } catch (err) {
      console.error("Ошибка при загрузке подразделений:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError(`Ошибка: ${err.response.data.String || "Неизвестная ошибка"}`);
      } else {
        setError("Ошибка при загрузке подразделений");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  return (
    <div className={"modal-list__deport"}>
      <ModalHeader
        headerTitle={"Список подразделений"}
        icon={<Close />}
        goBack={closeModal}
      />
      <div className="modal-list__content">
        <div className="list-deport">
          {loading && <p>Загрузка...</p>}
          {error && <p>{error}</p>}
          {!loading && divisions.length === 0 && (
            <p>Нет доступных подразделений</p>
          )}
          {divisions.map((division) => (
            <div
              key={division.code}
              className="list-deport__item"
              onClick={() => onDevisionSelect(division.name)}
            >
              <p>
                {division.code}: {division.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModalListDepartments;