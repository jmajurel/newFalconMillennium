import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStars } from "../Store/Actions/stars";
import StarsList from "../Components/StarsList";
import Tooltip from "../Components/Tooltip";
import Buffer from "../Components/Buffer";
import Paginator from "../Components/Paginator";
import Legend from "../Components/Legend";

const StarsPage = ({ stars, fetchStars, currentPage, pageCount }) => {
  const [selectedStar, setSelectedStar] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchStars().then(() => setLoading(false));
  }, []);

  const handleStarHover = (e, starId) => {
    e.preventDefault();
    const star = stars.find(({ _id }) => _id === starId); //linear search can be improve with hashmap on ids
    setSelectedStar(star);
  };

  const handleGetPage = (e, pageIdx) => {
    e.preventDefault();

    const newUpperLimit = pageIdx * stars.length;
    const newLowerLimit = newUpperLimit - stars.length;
    fetchStars({ range: `${newLowerLimit}-${newUpperLimit}` });
  };

  return (
    <div className="StarsPage" style={{ marginTop: 80 }}>
      {loading ? <Buffer /> : null}
      {selectedStar ? <Tooltip selectedStar={selectedStar} /> : null}
      <StarsList handleStarHover={handleStarHover} stars={stars} />
      <Paginator
        pageNumber={stars.length}
        pageCount={pageCount}
        activePage={currentPage}
        onGetStars={handleGetPage}
      />
      <Legend text="Note, the color represents the temperature of the star, from white to black"></Legend>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    stars: state.stars.stars,
    currentPage: state.stars.currentPage,
    pageCount: state.stars.pageCount
  };
}

export default connect(
  mapStateToProps,
  { fetchStars }
)(StarsPage);
