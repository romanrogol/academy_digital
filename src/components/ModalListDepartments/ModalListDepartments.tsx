// src/components/ModalListDepartments/ModalListDepartments.tsx
import { FC } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Footer from "../Footer/Footer";
import "./ModalListDepartments.scss";
import { useDivisions } from "../../contexts/DivisionsContext";
import { useNavigate } from "react-router-dom";

interface ModalListDepartmentsProps {
  onDevisionSelect: (division: string) => void;
}

const ModalListDepartments: FC<ModalListDepartmentsProps> = ({
  onDevisionSelect,
}) => {
  const navigate = useNavigate();
  const { divisions, loading, error } = useDivisions(); // Используем контекст

  const closeModal = () => {
    navigate(-1);
  };

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
