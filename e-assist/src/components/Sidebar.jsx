import '../assets/login.css';
import userimage from '../assets/images/userimage.jpg';
import {Link} from 'react-router-dom';
function Sidebar(props){

    let auth = localStorage.getItem("user");
    
    return( 
        
       <>
       
      
      <div className={`sidebar ${props.sidebarstatus? "open" : ""}`}>
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-12 justify-content-center'>
                    <div className='card-sidebar'>
                    <img width="96" height="96" src="https://img.icons8.com/color/96/circled-user-male-skin-type-7--v1.png" alt="circled-user-male-skin-type-7--v1"/>
                    <h5> {JSON.parse(auth).name} </h5>
                    </div>
              
                </div>
            </div>
        </div>
       <ul>
       <li>
            <Link to="/dashboard" ><i class="fas fa-chart-bar"/> Dashboard</Link>
        </li>
       <li>
            <h5>General</h5>
            <hr></hr>
        </li>
        <li>
            <Link to="/dashboard/producthunting/" ><i className="fa fa-search" aria-hidden="true"/> Product Hunting</Link>
        </li>
        <li>
        <Link to="/dashboard/productsourcing/key/key/key"><i className="fa-solid fa-truck"></i> Product Sourcing</Link>
        </li>
        <li>
        <Link to="/dashboard/productlisting/key/key/key/key"><i className="fa fa-line-chart"></i>  Product Listing</Link>
        </li>
        <li className='mt-5'>
            <h6><img width="30" height="30" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> Account Connected</h6>
            <h8>{JSON.parse(auth).storeemail}</h8>
            <hr></hr>
        </li>
       
       </ul>
      </div>
      
    
       </>
       
    )
}

export default Sidebar;