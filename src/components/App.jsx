import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isContact = contacts.find(item =>
      item.name.includes(newContact.name)
    );
    if (!isContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else alert(`${newContact.name} is alredy in contacts`);
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <Layout>
          {' '}
          <FormAddContact
            onSubmit={this.addContact}
            currentState={this.state}
          />
        </Layout>
        <Layout>
          <Title title="Contacts" />
          <Filter search={filter} onSearch={this.findContact} />
          {visibleContacts && (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          )}
        </Layout>
        <GlobalStyle />
      </>
    );
  }
}
