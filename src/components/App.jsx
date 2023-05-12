import React from 'react';
import ContactList from './ContackList/ContactList'
import { nanoid } from 'nanoid';

const CONTACT_KEY = 'Add contact'

export class App extends React.Component {
  state = {contacts: [], filter: ''}

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleOnChange = e => {
    this.setState({contacts: [{name: `${e.currentTarget.value}`, id: `${nanoid()}`}]});
    if(JSON.parse(localStorage.getItem(CONTACT_KEY)) !== null) {
      this.setState(prevState =>
      localStorage.setItem(CONTACT_KEY, JSON.stringify((prevState.contacts).push(JSON.parse(localStorage.getItem(CONTACT_KEY))))))
    } else {return}
  };

  addContact = e => {
    e.preventDefault();
    localStorage.setItem(CONTACT_KEY, JSON.stringify(this.state.contacts));
  };
  
  render() {
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        fontSize: 28,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <form onSubmit={this.addContact}>
        <input 
        type="text"
        name="name" 
        value={this.state.contacts.name}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
        title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
        required
        onChange={this.handleOnChange}
        />
        <button type="submit" onClick={this.addNewContact}>Add contact</button>
      </form>
      <h2>Contacts</h2>
      {JSON.parse(localStorage.getItem(CONTACT_KEY)) !== '' ?
        <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}></ContactList>
      : ''}
      <div></div>
    </div>
  )}
};
