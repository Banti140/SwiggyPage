import './HeaderLeft.css'

  function HeaderLeft() {
    return (<div className='header'>
        <div className='logo_and_location'>
           <div className='logo'>
            <img className = 'logo_img' src = "https://res.cloudinary.com/swiggy/image/upload/portal/c/favicon-96x96.png" alt="Image"/>
           </div>
           <div className='location'>
           <h3>Bengaluru, Karnataka, India</h3>
           </div>
        </div>
    </div>);
  }

export default HeaderLeft;
