import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import PropTypes from 'prop-types';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
    filter: PropTypes.string,
  };

  handleCreateContactsList = (name, number) => {
    this.setState(preState => {
      return {
        contacts: [...preState.contacts, { name, id: uuidv4(), number }],
      };
    });
  };
  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  handleFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filtredContacts;
  };

  render() {
    const {
      handleCreateContactsList,
      handleFilterContacts,
      handleChangeFilter,
    } = this;
    return (
      <div className="App">
        <h1>Phone book</h1>
        <ContactForm onCreateContact={handleCreateContactsList} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={handleChangeFilter} />
        <ContactList filtredContacts={handleFilterContacts()} />
      </div>
    );
  }
}

export default App;
