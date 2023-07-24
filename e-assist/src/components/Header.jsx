import '../assets/login.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react'
function Header(props)
{
    const navigate= useNavigate();
    const auth= localStorage.getItem("user");
    const [isOpen, setIsOpen] = useState(true);
    useEffect(()=>{
        props.onsidebarupdate(isOpen);
       
    },[isOpen]);


    const logout=()=>{
        localStorage.clear();
        navigate('/login')
    }
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
            <i class="fa fa-user" aria-hidden="true"/> {JSON.parse(auth).name}  
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"/> Logout</button>
            </div>
            </div>
           </div>
        </nav>
        </>
    )
}

export default Header;