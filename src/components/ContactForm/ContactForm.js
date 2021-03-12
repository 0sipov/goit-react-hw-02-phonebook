import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onCreateContact: PropTypes.func,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    const { onCreateContact } = this.props;
    const { handleChange } = this;
    return (
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          onCreateContact(name, number);
        }}
      >
        <label>
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            className={styles.input}
            name="number"
            type="text"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
        <button className={styles.addButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
