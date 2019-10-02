import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStars } from "../Store/Actions/stars";
import StarsList from "../Components/StarsList";
import Tooltip from "../Components/Tooltip";
import Buffer from "../Components/Buffer";
import Paginator from "../Components/Paginator";

const StarsPage = ({ stars, fetchStars }) => {

  const [selectedStar, setSelectedStar] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchStars().then(() => setLoading(false));
  }, []);

  const handleStarHover = (e, starId) => {
    e.preventDefault();
    const star = stars.find(({ _id }) => _id === starId); //linear search can be improve with hasmap on ids
    setSelectedStar(star);
  };

  return (
    <div className="StarsPage" style={{marginTop: 80}}>
      { loading ? <Buffer /> : null }
      {selectedStar ? <Tooltip selectedStar={selectedStar} />: null}
      <StarsList handleStarHover={handleStarHover} stars={stars} />
      <Paginator pageNumber={stars.length} />
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
