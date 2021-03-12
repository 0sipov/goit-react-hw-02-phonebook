import React, { Component } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onChangeFilter: PropTypes.func,
  };

  render() {
    const { onChangeFilter } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          className={styles.input}
          name="filter"
          type="text"
          onChange={onChangeFilter}
        ></input>
      </label>
    );
  }
}

export default Filter;
