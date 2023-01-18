import '../assets/login.css';
import { useState, useEffect } from 'react';
import Producthunting from './Producthunting';
import Dashboard from './Dashboard';
function Sidebar(props){
    return( 
        
       <>
       
      
      <div className={`sidebar ${props.sidebarstatus? "open" : "closed"}`}>
       <ul>
        <li>
            epoaiwepoae
        </li>
        <li>
            eoiaueiaueiawe
        </li>
        <li>
            epoaiwepoae
        </li>
        <li>
            eoiaueiaueiawe
        </li>
        <li>
            epoaiwepoae
        </li>
        <li>
            eoiaueiaueiawe
        </li>
        <li>
            epoaiwepoae
        </li>
        <li>
            eoiaueiaueiawe
        </li>
       </ul>
      </div>
      
    
       </>
       
    )
}

export default Sidebar;