import React, { PropTypes } from 'react';
import Area from './Area';

export default class MountainAreaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: props.weatherData };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ weatherData: nextProps.weatherData });
  }
  render() {
    const areaNodes = this.state.weatherData.map((area) =>
      (
        <Area name={area.Area} key={area.Area} uri={area.URI} risk={area.Risk}>
          {area}
        </Area>
      )
    );

    return (
      <div className="mountainAreaList">
        {areaNodes}
      </div>
    );
  }
}

MountainAreaList.propTypes = { weatherData: PropTypes.array.isRequired };

