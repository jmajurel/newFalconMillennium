import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlanets } from "../Store/Actions/planets";
import PlanetsList from "../Components/PlanetsList";

class PlanetsPage extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }
  render() {
    const { planets } = this.props;
    return (
      <div className="Planets">
        <PlanetsList planets={planets} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    planets: state.planets.planets
  };
};

export default connect(
  mapStateToProps,
  { fetchPlanets }
)(PlanetsPage);
