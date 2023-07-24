import '../assets/login.css';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboardhome(props){

        const [huntingcount, setHuntingcount]= useState(0);
        const [sourcingcount, setSourcingcount]= useState(0);
        const [listingcount, setlistingcount] = useState(0);
        const [products, setProducts] = useState([]);
        const navigate= useNavigate();
        const auth= localStorage.getItem("user");
         const userid=JSON.parse(auth)._id;



       useEffect(()=>{
                gethuntingcount();
                getsourcingcount();
                getlistingcount();
                trendingproduct();
       },[]);

       const trendingproduct=async()=>{
        let result= await fetch(`http://127.0.0.1:5000/getproducts/fashion/10/100`);
        result=await result.json();
        setProducts(result);
       }

       const gethuntingcount=async()=>{
                let result= await fetch(`http://localhost:5000/getcounthunting/${userid}`);
                result= await result.json();
                
                setHuntingcount(result)
       }
       const getsourcingcount=async()=>{
        let result= await fetch(`http://localhost:5000/getcountsourcing/${userid}`);
        result= await result.json();
        setSourcingcount(result)
        }

        const getlistingcount=async()=>{
                let result= await fetch(`http://localhost:5000/getcountlisitng/${userid}`);
                result= await result.json();
                setlistingcount(result);
        }

    return(
       <>
        <div className="content">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-12 mt-2 p-4'>
                        <span className='slug'>E-assist  Dashboard</span>
                        <h6 className='greetings mt-3'>Hey,{JSON.parse(auth).name} <br/><span className='subgreeting'>Here is what hapenning with your store today!</span></h6>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Hunted Products</h5>
                                    <span className='orders ' > {huntingcount}</span>
                                    <div className='card-details'>
                                    <i class="fa fa-shopping-bag" aria-hidden="true"/>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Resourced Products</h5>
                                    <span className='orders ' >{sourcingcount}</span>
                                    <div className='card-details'>
                                    <i class="fas fa-dollar-sign"></i>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>Listed Products</h5>
                                    <span className='orders ' >{listingcount}</span>
                                    <div className='card-details'>
                                    <i class="fa fa-user" aria-hidden="true"/>
                                    </div>
                            </div>
                    </div>
                    <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-2'>
                            <div className='analytics-card'>
                                    <h5 className=' card-title mb-2'>My balance</h5>
                                    <span className='orders ' >$ 5000</span>
                                    <div className='card-details'>
                                    <i class="fa-solid fa-wallet"/>
                                    </div>
                            </div>
                    </div>    
                </div>

                <div className='row mt-4'>
                        <div className='col-lg-12 col-md-12 col-sm-12  mt-4 text-align-center'>
                                <div className='table-title '>
                                        <h5>Top Selling Products<br></br> <span className='subgreeting'>Overview of top selling products</span></h5><hr></hr>
                                </div>
                                
                                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product</th>
                                       
                                        <th scope="col">Price Range</th>
                                        
                                        <th scope="col">Profit</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                                {(products && products.length>0)?
                                                products.map((item)=>
                                                <tr>
                                                <td data-label="Account">{item.name}</td>
                                              
                                                <td data-label="Amount">{item.price}</td>
                                               
                                                <td data-label="Period"><button className='mainnn' onClick={()=>{navigate('/dashboard/producthunting')}}>Let's Start</button></td>
                                                </tr>
                                                
                                                )    :<></>    
                                        }
                                       
                                        </tbody>
                                </table>
                              
                               
                        </div>
                       
                        
                </div>
            </div>
      </div>
       </>
    )
}
export default Dashboardhome;