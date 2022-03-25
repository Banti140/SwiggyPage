import React, { Component } from 'react';
import './HeaderRight.css';
//Importing componenents
import TabOption from './HeaderRightOption/HeaderRightOption';
import OPTIONS from './Constants/OPTIONS.js'

  function HeaderRight() {
    return <div className='tab_options'>
        {OPTIONS.map((option)=>
        {    
        return <TabOption key={option.id} details={option}/>
        })}
    </div>;
  }

export default HeaderRight;
