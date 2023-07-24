import '../assets/login.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Productsourcing(props){
    const auth= localStorage.getItem("user");
    const navigate= useNavigate();
    const userid=JSON.parse(auth)._id;
    const [products, setProducts]= useState([]);
    const [sourcedproducts, setSourcedproducts] = useState([]);
    const { key1, key2, key3 } = useParams();
   
    useEffect(()=>{
        if(key1=="key"){
            navigate('/dashboard/producthunting')
        }
        getresourcer();
        getsavedresourcers();
    },[]);
   

    
    const getresourcer=async()=>{
        let result =await fetch(`http://127.0.0.1:5000/resourceproducts/${key1}/${key2}/${key3}`);
        result =await result.json();  
         
        setProducts(result);
     
   
    }

    const getsavedresourcers=async()=>{
        let result = await fetch(`http://localhost:5000/getsourcedproducts/${userid}`);
            result= await result.json();
            setSourcedproducts(result);
    }

    const saveresourcer=async(productname, price, lists, url)=>{
        let result = await fetch('http://localhost:5000/sourcedproduct',{
            method: 'POST',
            body: JSON.stringify({productname,price,lists,url, userid}),
            headers: {
                'Content-Type': 'application/json'
            },
    });
    navigate(`/dashboard/productlisting/${productname}/${price}/${lists}/${url}`)
    }
   

    return(
       <>
        <div className="content">
            <div className='container-fluid'>
                <div className='row p-4'>
                    <div className='col-12 mt-2'>
                        <span className='slug'>E-assist Product Sourcing</span>
                        <h3 className=' mt-3'>Product Sourcing<br/><span className='subgreeting'>Source your hunted products   </span></h3>
                       
                    </div>
                </div>
                <div className='row'>
                    {(products && products.length>0)?
                        products.slice(-4).map((item)=>

                        <div className='col-lg-3 col-md-6 col-sm-12 p-4'>
                        <div className='res-card p-4'>
                        <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-boxes-ecommerce-icongeek26-linear-colour-icongeek26.png" alt="external-boxes-ecommerce-icongeek26-linear-colour-icongeek26"/>
                            <h5 className='mt-2'>{item.name}</h5>
                            <h7>Lists:{item.list}</h7>
                            <h4 className='mt-3'>{item.price}</h4>
                        <button className='mt-3 mb-3' onClick={()=>saveresourcer(item.name, item.price, item.list, item.url)}>Source Product</button>
                        
                        </div>
                        </div>
                        )
                    :
                    <>
                    </>
                    
                    }
        
                </div>
                <div className='row p-4'>
                <div className='col-12 mt-2'>
                        
                        <h4 className=' mt-3'>Sourced Products<br/></h4>

                        <table className='mt-4'>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col"> Price</th>
                                        <th scope="col">Lists</th>
                                        <th scope="col">Sourcing</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                      
                                      {(sourcedproducts && sourcedproducts.length>0)?

                                        sourcedproducts.map((item)=>
                                        <tr>
                                        <td data-label="Account">{item.productname}</td>
                                        <td data-label="Due Date">{item.price}</td>
                                        <td data-label="Amount">{item.lists}</td>
                                        <td data-label="Period"><img width="48" height="48" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/></td>
                                        </tr>
                                        ):
                                        <>
                                     
                                        </>
                                    
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
export default Productsourcing;