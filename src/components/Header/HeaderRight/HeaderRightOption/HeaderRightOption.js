// import React, { Component } from 'react';
import './HeaderRightOption.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

HeaderRightOption.defaultProps = {
  details: {}
}

HeaderRightOption.propTypes = {
  details: PropTypes.object
}


function HeaderRightOption(props) {
  const { details } = props;
  return <div> 
    <Link to={`/${details.name}`}>
      <div className='tab_option'>{details.name}</div>
    </Link>
  </div>;
}

export default HeaderRightOption;
