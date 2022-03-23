import React, { Component } from 'react';
import './HeaderRightOption.css';

export class HeaderRightOption extends Component {
  // constructor(props)
  // {
  //     super(props);
  //     
  // }
    
  render() {
    // console.log(this.props);
    return <div className='tab_option'>
        <span className='tab_name'> {this.props.details.name}</span>
    </div>;
  }
}

export default HeaderRightOption;
