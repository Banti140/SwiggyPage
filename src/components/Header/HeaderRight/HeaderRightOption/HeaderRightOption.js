<<<<<<< HEAD
// import React, { Component } from 'react';
import './HeaderRightOption.css';
import PropTypes from 'prop-types';

HeaderRightOption.defaultProps = {
  details: {}
}

HeaderRightOption.propTypes = {
  details:PropTypes.object
}

function HeaderRightOption(props) {
  const { details } = props;
  return <div className='tab_option'>
    <span className='tab_name'> {details.name}</span>
  </div>;
}


=======
import React, { Component } from 'react';
import './HeaderRightOption.css';

 class HeaderRightOption extends Component {
  
  render() {
    // console.log(this.props);
    return <div className='tab_option'>
        <span className='tab_name'> {this.props.details.name}</span>
    </div>;
  }
}

>>>>>>> main
export default HeaderRightOption;
