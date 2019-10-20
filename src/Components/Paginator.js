import React from "react";
import "./Paginator.css";

const Paginator = ({ pageCount, activePage, onGetStars }) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
          Previous
        </a>
      </li>
      {activePage - 1 > 0 ? (
        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={e => onGetStars(e, activePage - 2)}
          >
            {activePage - 1}
          </a>
        </li>
      ) : null}
      <li className="page-item active">
        <a href="#" className="page-link">
          {activePage}
        </a>
      </li>
      {activePage + 1 <= pageCount ? (
        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={e => onGetStars(e, activePage + 2)}
          >
            {activePage + 1}
          </a>
        </li>
      ) : null}
      <li className="page-item">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>
);
export default Paginator;
