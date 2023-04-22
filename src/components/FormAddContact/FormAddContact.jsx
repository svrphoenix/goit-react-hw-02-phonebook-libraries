import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Title } from 'components/Title/Title';
import {
  StyledForm,
  FormContainer,
  Input,
  Button,
} from './FormAddContact.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = nanoid();
  contactNumberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Title title="Add contact" />
        <FormContainer>
          <div>
            <label htmlFor={this.contactNameId}>Name</label>
            <Input
              type="text"
              name="name"
              value={name}
              id={this.contactNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor={this.contactNumberId}>Phone number</label>
            <Input
              type="tel"
              name="number"
              value={number}
              id={this.contactNumberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </StyledForm>
    );
  }
}
