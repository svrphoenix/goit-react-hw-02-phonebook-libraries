import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const isContactName = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactName) {
      toast.error(`${newContact.name} is alredy in contacts`);
      return;
    }
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(({ id }) => id !== contactId),
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
          <FormAddContact onSubmit={this.addContact} />
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
        <ToastContainer />
        <GlobalStyle />
      </>
    );
  }
}
