import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const primarySecondary = primary ? 'primary' : 'secondary';
  const mode = props.disabled ? 'disabled' : primarySecondary ;
  // ToDo: Do we need 'label' as a prop?
  

  return (
    <button
      type="button"
      className={ `${styles.button} ${styles[size]} ${styles[mode]}`}
      style={backgroundColor && { backgroundColor }}
     
      {...props}
    > 
      {label} {props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large','wide','wide2']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
