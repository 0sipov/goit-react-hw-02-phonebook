import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { onChangeFilter } = this.props;
    return (
      <label>
        Find contacts by name
        <input name="filter" type="text" onChange={onChangeFilter}></input>
      </label>
    );
  }
}

export default Filter;
