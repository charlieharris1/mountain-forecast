import React from 'react';
import Area from './Area';

export default class MountainAreaList extends React.Component {
  render() {
    const areaNodes = this.props.weatherData.map((area) => {
      return (
        <Area name={area.Area} key={area.Area}>
          {area}
        </Area>
      );
    });

    return (
      <div className="commentList">
        {areaNodes}
      </div>
    );
  }
}
