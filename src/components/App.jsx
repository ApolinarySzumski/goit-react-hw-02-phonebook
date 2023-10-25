import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    //  console.log(this);
    //   console.log(e);
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          id: nanoid(),
          name: prev.name,
          number: prev.number,
        },
      ],
    }));
  };

  handleChange = e => {
    console.log(e.target.name);
    const { value, name } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  // handleFilter = e => {
  //   const { value, name } = e.target;
  //   this.setState(prev => {
  //     console.log([...prev.contacts]);
  //     console.log({
  //       [name]: value,
  //       contacts: [
  //         ...prev.contacts,
  //         [...prev.contacts].filter(contact =>
  //           contact.name.toLowerCase().includes(value.toLowerCase())
  //         ),
  //       ],
  //     });
  //     return {
  //       [name]: value,
  //       contacts: [
  //         [...prev.contacts].filter(contact =>
  //           contact.name.toLowerCase().includes(value.toLowerCase())
  //         ),
  //       ],
  //     };
  //   });
  // };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add Contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <p>Find contacts by name</p>
          <input
            type="tel"
            name="filter"
            value={this.state.filter}
            title="Find contacts by name"
            onChange={this.handleFilter}
          />
          <ul>
            {this.state.contacts.map(contact => (
              <li key={nanoid()}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
