import React from "react";

const Paginator = ({ pageNumber, activePage }) => (
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            { 
                new Array(pageNumber).fill(0).map((_, idx) => 
                    <li className="page-item">
                        <a className="page-link" href="#">{idx}</a>
                    </li>) 
            }
            <li className="page-item">
            <a className="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
);
export default Paginator;