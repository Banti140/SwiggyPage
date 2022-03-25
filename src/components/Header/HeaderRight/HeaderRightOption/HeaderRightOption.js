import React, { Component } from 'react';
import './HeaderRightOption.css';

  function HeaderRightOption(props){
    const {key,details}=props;
    return <div className='tab_option'>
        <span className='tab_name'> {details.name}</span>
    </div>;
  }


export default HeaderRightOption;
