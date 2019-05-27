import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStars } from "../Store/Actions/stars";
import StarsList from "../Components/StarsList";
import Tooltip from "../Components/Tooltip";

const StarsPage = ({ stars, fetchStars }) => {
  const [selectedStar, setSelectedStar] = useState({});

  useEffect(() => {
    fetchStars();
  }, []);

  const handleStarHover = (e, starId) => {
    e.preventDefault();
    const star = stars.find(({ _id }) => _id === starId); //linear search can be improve with hasmap on ids
    setSelectedStar(star);
  };

  return (
    <div className="StarsPage">
      <Tooltip selectedStar={selectedStar} />
      <StarsList handleStarHover={handleStarHover} stars={stars} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    stars: state.stars.stars
  };
}

export default connect(
  mapStateToProps,
  { fetchStars }
)(StarsPage);
