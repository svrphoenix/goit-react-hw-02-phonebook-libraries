import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

export const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
