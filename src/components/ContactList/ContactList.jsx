import PropTypes from 'prop-types';
import { List, Contact, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <>
    <List>
      {contacts.map(item => (
        <Contact key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <Button type="button" onClick={() => onDelete(item.id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
