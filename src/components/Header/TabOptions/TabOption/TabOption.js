import React, { Component } from 'react';
import './TabOption.css';

export class TabOption extends Component {
  render() {
    return <div className='tab_option'>
        <span className='tab_name'> {this.props.details.name}</span>
    </div>;
  }
}

export default TabOption;
