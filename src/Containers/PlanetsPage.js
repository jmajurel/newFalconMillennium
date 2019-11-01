import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlanets } from "../Store/Actions/planets";
import PlanetsList from "../Components/PlanetsList";
import Buffer from "../Components/Buffer";
import Tooltip from "../Components/Tooltip";

class PlanetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, selection: {} };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.fetchPlanets().then(() => this.setState({ loading: false }));
  }

  handlePlanetHover = (e, name) => {
    this.setState({
      selection: {
        xPosition: e.pageX,
        yPosition: e.pageY,
        name
      }
    });
  };

  render() {
    const { planets } = this.props;
    return (
      <div>
        <Tooltip selection={this.state.selection} />
        <div className="Planets" style={{ marginTop: 80 }}>
          {this.state.loading ? <Buffer /> : null}
          <PlanetsList planets={planets} onHover={this.handlePlanetHover} />
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
