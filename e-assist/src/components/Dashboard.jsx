import '../assets/login.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Producthunting from './Producthunting';
import Productsourcing from './Productsourcing';
import Dashboardhome from './Dashboardhome';
import Productlisting from './Productlisting';

function Dashboard(props){

    const [sidebar, setsidebar] = useState("");

    return(
        <div className='container-fluid  px-0'>
            <Header onsidebarupdate={setsidebar}/>
            <div className="sidebar-container">
                    <Sidebar sidebarstatus={sidebar}/>
                    <div className={`content dash-content ${sidebar? "shrink" : ""}`}>
                    {props.component=="dashboardhome" && <Dashboardhome/>}
                    {props.component=="producthunting" && <Producthunting/>}
                    {props.component=="productsourcing" && <Productsourcing/>}
                    {props.component=="productlisting" && <Productlisting/>}
                    </div>
                
            </div>
      
    
        </div>
    )
}
export default Dashboard;