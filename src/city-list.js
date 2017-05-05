import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reloadWeather, removeCity } from './redux/actions';

class CityList extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.weather.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.name} >
          <div className="row">
            <div className="col-md-4">
              {item.name}
            </div>
            <div className="col-md-4">
              {item.weather[0].description}
            </div>
            <div className="col-md-4">
              <div className='col-md-5'></div>
              <div className='col-md-1' onClick={() => this.props.removeCity(item.id)}>
                <span className="glyphicon glyphicon-remove"></span>
              </div>
              <div className='col-md-1' onClick={() => this.props.reloadWeather(item.id)}>
                <span className="glyphicon glyphicon-repeat"></span>
              </div>
              <div className='col-md-5'></div>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderItems() }
      </ul>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

function mapDIspatchToProps(dispatch) {
  return bindActionCreators({ reloadWeather , removeCity }, dispatch);
}

export default connect(mapStateToProps, mapDIspatchToProps)(CityList);
