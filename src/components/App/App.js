import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  isContainName = name => {
    return Boolean(
      this.state.contacts.find(
        e => e.name.toLowerCase() === name.toLowerCase(),
      ),
    );
  };

  handleCreateContact = contact => {
    const { name, number } = contact;
    this.isContainName(name)
      ? alert(`Contact ${name} already exists.`)
      : this.setState(preState => {
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

  handleRemoveContact = contactId => {
    const { contacts } = this.state;
    const filtredContacts = contacts.filter(e => {
      return e.id !== contactId;
    });
    this.setState({ contacts: filtredContacts });
  };

  render() {
    const {
      handleCreateContact,
      handleFilterContacts,
      handleChangeFilter,
      handleRemoveContact,
    } = this;
    return (
      <div className="App">
        <h1>Phone book</h1>
        <ContactForm onCreateContact={handleCreateContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={handleChangeFilter} />
        <ContactList
          filtredContacts={handleFilterContacts()}
          onRemoveContact={handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
