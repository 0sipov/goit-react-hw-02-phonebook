import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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
        onSubmit={e => {
          e.preventDefault();
          onCreateContact(name, number);
        }}
      >
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Number
          <input
            name="number"
            type="text"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
