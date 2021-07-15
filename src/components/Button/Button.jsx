import ButtonEl from './Button.styled';
import PropTypes from 'prop-types';

function Button({ btnName }) {
  return <ButtonEl type="button">{btnName}</ButtonEl>;
}

export default Button;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};
