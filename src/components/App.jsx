import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  hasContact = ({ name }) =>
    this.state.contacts.find(item => item.name === name);

  addContact = data => {
    if (this.hasContact(data))
      return alert(`${data.name} is already in contacts`);

    this.setState(prevState => {
      const id = nanoid();
      const contact = { ...data, id };
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  onFilterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFiltered = () => {
    const { contacts, filter } = this.state;
    if (!filter) return [...contacts];

    const normilizedFilter = filter.toUpperCase();

    return contacts.filter(({ name }) =>
      name.toUpperCase().includes(normilizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          onFilterChange={this.onFilterChange}
          value={this.state.filter}
        />
        <ContactList list={this.getFiltered()} />
        <GlobalStyle />
      </div>
    );
  }
}
