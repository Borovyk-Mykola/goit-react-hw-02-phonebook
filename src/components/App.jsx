export const App = () => {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts + 1,        
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <div>
        <input 
        type="text" 
        name="name" 
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
        title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
        required/>
        <button type="submit" onSubmit={this.addContact}>Add contact</button>
      </div>
      <h2>Contacts</h2>
      <div></div>
      <div></div>
    </div>
  );
};
