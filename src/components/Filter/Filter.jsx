import PropTypes from 'prop-types';

import { Input } from './Filter.styled';

export const Filter = ({ search, onSearch }) => (
  <label>
    Find contact by name:
    <Input type="text" value={search} onChange={onSearch} />
  </label>
);

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
