import React, { useState } from "react";
import "./Pagination.scss";
import leftDisabledIcon from "./Pagination-icons/pagination-left-disabled.svg";
import leftActiveIcon from "./Pagination-icons/pagination-left-active.svg";
import rightActiveIcon from "./Pagination-icons/pagination-right-active.svg";
import rightDisabledIcon from "./Pagination-icons/pagination-right-disabled.svg";

interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= totalPages) {
      setCurrentPage(value);
    }
  };

  return (
    <div className="pagination">
      <div
        className={` ${
          currentPage === 1 ? "page-left-disabled" : "page-left-active"
        }`}
        onClick={handlePrevious}
      >
        <div className="img-wrap">
          <img
            src={currentPage === 1 ? leftDisabledIcon : leftActiveIcon}
            alt="Previous"
          />
        </div>
      </div>
      <div className="pages-area">
        <input
          className="pages-area-input"
          type="number"
          value={currentPage}
          onChange={handleInputChange}
        />
        <h1 className="pages-area-of">из</h1>
        <p className="pages-area-lastpage">{totalPages}</p>
      </div>
      <div
        className={` ${
          currentPage === totalPages
            ? "page-right-disabled"
            : "page-right-active"
        }`}
        onClick={handleNext}
      >
        <div className="img-wrap">
          <img
            src={
              currentPage === totalPages ? rightDisabledIcon : rightActiveIcon
            }
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
};
