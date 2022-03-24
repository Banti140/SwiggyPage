import React, { Component } from 'react';
import './HeaderRight.css';
//Importing componenents
import TabOption from './HeaderRightOption/HeaderRightOption';
import HeaderRightconst from './Constants/HeaderRightconst.js'

  function HeaderRight() {
    return <div className='tab_options'>
        {HeaderRightconst.map((option)=>
        {    
        return <TabOption key={option.id} details={option}/>
        })}
    </div>;
  }

export default HeaderRight;
