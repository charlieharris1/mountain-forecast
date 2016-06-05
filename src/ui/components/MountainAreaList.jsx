import React, { PropTypes } from 'react';
import Area from './Area';

export default class MountainAreaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: props.weatherData };
  }
  render() {
    const areaNodes = this.state.weatherData.map((area) =>
      (
        <Area name={area.Area} key={area.Area}>
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

MountainAreaList.propTypes = { weatherData: PropTypes.object.isRequired };

