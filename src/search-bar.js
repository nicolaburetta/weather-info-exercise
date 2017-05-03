import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './redux/actions';
import { cities } from './data/cities.json';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.state = { term: '' };
  }

  onInputChange(item) {
    this.setState({ term: item.label });
    this.props.fetchWeather(item.value);
  }

  getOptions() {
    return cities.map(city => {
      return {
        value: city,
        label: city.name
      };
    });
  }

  render() {
    return (
      <div className="form-group">
        <Select
          options={this.getOptions()}
          onChange={this.onInputChange}
          value={this.state.term} />
      </div>
    );
  }
}

function mapDIspatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDIspatchToProps)(SearchBar);
