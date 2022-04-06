import React, { Component } from 'react';
import './HeaderRight.css';
//Importing componenents
import HeaderRightOption from './HeaderRightOption/HeaderRightOption';
import OPTIONS from './HeaderRightOption/constants/HeaderRight.options'

  class HeaderRight extends Component {

    addOption(option){
      return <HeaderRightOption key={option.id} details={option}/>
    }

    render(){
      return <div className='tab_options'>
      {OPTIONS.map(this.addOption)}
    </div>;
    }
  }

export default HeaderRight;
