import React, { Component } from 'react';
import './HeaderRight.css';
//Importing componenents
<<<<<<< HEAD
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
=======
import TabOption from './HeaderRightOption/HeaderRightOption';
import HeaderRightconst from './Constants/HeaderRightconst.js'

  function HeaderRight() {
    return <div className='tab_options'>
        {HeaderRightconst.map((option)=>
        {    
        return <TabOption key={option.id} details={option}/>
        })}
    </div>;
>>>>>>> main
  }

export default HeaderRight;
