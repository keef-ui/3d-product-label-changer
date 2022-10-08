import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.css';


/**
 * Primary UI component for user interaction
 */
export const ToggleSwitch = ({ primary, backgroundColor, size, label, setToggle,isToggleOn,...props }) => {
  const primarySecondary = primary ? 'primary' : 'secondary';
  const mode = props.disabled ? 'disabled' : primarySecondary ;
  // ToDo: Do we need 'label' as a prop?
  

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isToggleOn}
        onClick={() => setToggle(!isToggleOn)}
      />
      <span className={styles.slider}></span>
    </label>
  );
};




ToggleSwitch.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the buttonxx be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large','wide','wide2']),
  /**
   * Buttonxx contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
