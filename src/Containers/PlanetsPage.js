import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlanets } from "../Store/Actions/planets";
import PlanetsList from "../Components/PlanetsList";
import Buffer from "../Components/Buffer";

class PlanetsPage extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: false }
  }

  componentDidMount() {
    this.setState({loading: true});
    this.props.fetchPlanets()
    .then(() => this.setState({loading: false}));
  }

  render() {
    const { planets } = this.props;
    return (
      <div>
        <div className="Planets" style={{marginTop: 80}}>
          { this.state.loading ? <Buffer /> : null }
          <PlanetsList planets={planets} />
        </div>
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
