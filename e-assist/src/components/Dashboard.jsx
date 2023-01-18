import '../assets/login.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Producthunting from './Producthunting';

function Dashboard(){

    const [sidebar, setsidebar] = useState("");

    return(
        <div className='container-fluid px-0'>
            <Header onsidebarupdate={setsidebar}/>
            <div className="sidebar-container">
                    <Sidebar sidebarstatus={sidebar}/>
                    <div className={`content ${sidebar? "" : "full-width"}`}>
                        <h1>hellooooooooooooooooooooooooooooooooooo</h1>
                    </div>
                
            </div>
      
    
        </div>
    )
}
export default Dashboard;