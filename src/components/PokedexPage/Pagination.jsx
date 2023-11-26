import React from "react";
import "bulma/css/bulma.css";
import './styles/pagination.css'

const Pagination = ({
  numberCards,
  currentPage,
  setCurrentPage,
  cardsPage,
}) => {
  const botones = [];

  for (let i = 1; i <= Math.ceil(numberCards / cardsPage); i++) {
    botones.push(i);
  }

  const onPreviousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    if (currentPage !== Math.ceil(numberCards / cardsPage)) setCurrentPage(currentPage + 1);
  };
  const onSpesificPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
        style={currentPage === 1 ? { pointerEvents: "none" } : {}}
        onClick={onPreviousPage}
      >
        Previous
      </a>
      <a
        className={`pagination-next ${
          currentPage >= botones.length ? "is-disabled" : ""
        }`}
        style={currentPage === Math.ceil(numberCards / cardsPage) ? { pointerEvents: "none" } : {}}
        onClick={onNextPage}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {botones.map((noPage) => (
          <li key={noPage}>
            <a
              onClick={() => onSpesificPage(noPage)}
              className={`pagination-link ${
                noPage === currentPage ? "is-current" : ""
              }`}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
