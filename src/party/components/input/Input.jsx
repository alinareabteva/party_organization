import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({
  id,
  className = '',
  label = '',
  error = '',
  ...attrs
}) => {
  const classes = classNames(
    'input',
    className,
    { error },
  );

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label
          && <label className="inputLabel" htmlFor={id}>{label}</label>
        }
      </div>
      <div className="inputWithErrors">
        {error
          && <span className="inputError">{error}</span>
        }
        <input
          name={id}
          id={id}
          className={classes}
          {...attrs}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Input;