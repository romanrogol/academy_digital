import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDivisions } from "../../contexts/DivisionsContext";
import ModalHeader from "../ModalHeader/ModalHeader";
import Close from "../../assets/Close";
import Footer from "../Footer/Footer";
import "./ModalListDepartments.scss";

const ModalListDepartments: FC = () => {
  const { divisions, loading, error, setSelectedDivision } = useDivisions();
  const navigate = useNavigate();

  const closeModal = () => navigate(-1);

  const handleDivisionSelect = (division: string) => {
    setSelectedDivision(division);
    closeModal();
  };

  return (
    <div className="modal-list__deport">
      <ModalHeader headerTitle="Список подразделений" icon={<Close />} goBack={closeModal} />
      <div className="modal-list__content">
        {loading ? <p>Загрузка...</p> : error ? <p>{error}</p> : (
          divisions.map((division) => (
            <div
              key={division.code}
              className="list-deport__item"
              onClick={() => handleDivisionSelect(division.name)}
            >
              {division.name}
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ModalListDepartments;

