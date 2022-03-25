import React, { Component } from 'react';
import './HeaderRight.css';
//Importing componenents
import HeaderRightOption from './HeaderRightOption/HeaderRightOption';
import OPTIONS from './HeaderRightOption/constants/OPTIONS'

HeaderRightOption.defaultProps = {
  details: {}
  }

  function HeaderRight() {
    return ReturnHeaderRightOption();
  }

  function ReturnHeaderRightOption(){
    return <div className='tab_options'>
    {OPTIONS.map((option)=>
    {    
    return <HeaderRightOption key={option.id} details={option}/>
    })}
  </div>;
  }


export default HeaderRight;
