import '../assets/login.css';
import userimage from '../assets/images/userimage.jpg';
import {Link} from 'react-router-dom';
function Sidebar(props){


    
    return( 
        
       <>
       
      
      <div className={`sidebar ${props.sidebarstatus? "open" : ""}`}>
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-12'>
                    <h6><img src="https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"/> Muhammad Asad</h6>
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
            <Link to="/producthunting" ><i className="fa fa-search" aria-hidden="true"/> Product Hunting</Link>
        </li>
        <li>
        <Link to="/productsourcing"><i className="fa-solid fa-truck"></i> Product Sourcing</Link>
        </li>
        <li>
        <Link to="/productranking"><i className="fa fa-line-chart"></i>  Product Ranking</Link>
        </li>
      
        <li className='mt-4'>
            <h5>Tools</h5>
            <hr></hr>
        </li>
        <li>
        <Link to="/contentwriting"><i className="fa-solid fa-pen-to-square"></i>  Content Writing</Link>
        </li>
        <li>
        <Link to="/imageoptimization"><i className="fa-solid fa-camera"></i>  Image Optimization</Link>
        </li>
       
        
       </ul>
      </div>
      
    
       </>
       
    )
}

export default Sidebar;