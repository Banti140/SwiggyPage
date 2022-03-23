import React, { Component } from 'react';
import TabOptions from './TabOptions/TabOptions';
import './Header.css'




export class Header extends Component {
  render() {
    return (<div className='header'>
        <div className='logo_and_location'>
           <div className='logo'>
            <img className = 'logo_img' src = "https://res.cloudinary.com/swiggy/image/upload/portal/c/favicon-96x96.png"/>
           </div>
           <div className='location'>
           <h3>Bengaluru, Karnataka, India</h3>
           </div>
        </div>
        <div className='tab_options'>
        <TabOptions/>
        </div>
    </div>);
  }
}

export default Header;
