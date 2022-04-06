// import React, { Component } from 'react';
import './HeaderRightOption.css';

HeaderRightOption.defaultProps = {
    details: {}
    }

  function HeaderRightOption(props){
    const {details}=props;
    return <div className='tab_option'>
        <span className='tab_name'> {details.name}</span>
    </div>;
  }


export default HeaderRightOption;
