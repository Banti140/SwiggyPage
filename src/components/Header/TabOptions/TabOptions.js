import React, { Component } from 'react';
import './TabOptions.css';
import TabOption from './TabOption/TabOption';
export class TabOptions extends Component {
  
  constructor()
  {
      super();
      this.options = [
          {
              name: "Help"
          },
          {
            name: "Offers"
          },
          {
            name: "Sign In"
          },
          {
            name: "Cart"
          }];

  }  
  render() {
    return <div className='tab_options'>
        {this.options.map((option)=>
        {    
        return <TabOption details={option}/>
        })}
    </div>;
  }
}

export default TabOptions;
