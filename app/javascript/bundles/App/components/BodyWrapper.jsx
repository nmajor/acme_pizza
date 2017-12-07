import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';

const BodyWrapper = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 top-bumper">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default BodyWrapper;
