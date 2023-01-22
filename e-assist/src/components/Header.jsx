import '../assets/login.css';
import {useState, useEffect} from 'react';
import {Link} from 'react'
function Header(props)
{
    const [isOpen, setIsOpen] = useState(true);
    useEffect(()=>{
        props.onsidebarupdate(isOpen);
       
    },[isOpen]);
    return(
        <>
       <nav className="navbar sticky-top navbar-expand-lg ">
       <button className="togglebutton"  onClick={() => setIsOpen(!isOpen)}>
       <i class="fas fa-bars"></i>
       </button>
            <h4 className="brand-name" href="#">E-assist</h4>
           <div className='user-info ml-auto'>
           <div class="dropdown">
            <button class="logout-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user" aria-hidden="true"/> Muhammad Asad   
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#"><i class="fa fa-sign-out" aria-hidden="true"/> Logout</a>
            </div>
            </div>
           </div>
        </nav>
        </>
    )
}

export default Header;