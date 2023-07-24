import '../assets/login.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Productlisting(props){
    const { key1, key2, key3, key4 } = useParams();
    const productname= key1;
    const [prevproducts, setPrevproducts]= useState([]);
    const auth= localStorage.getItem("user");
    const userid=JSON.parse(auth)._id;
    const navigate= useNavigate();
    const storename="Shopify";
    const accounttype=JSON.parse(auth).accounttype;
    const email=JSON.parse(auth).storeemail;
    const password=JSON.parse(auth).storepassword;
    

    useEffect(()=>{
        if(key1=="key"){
            navigate('/dashboard/producthunting')
        }
       getprevproducts();
       console.log(email,password)
    },[]);

    const getprevproducts=async()=>{
        let result = await fetch(`http://localhost:5000/getlistedproducts/${userid}`);
            result= await result.json();
            setPrevproducts(result);
    }

    const savelistedproduct=async()=>{
        let result= await fetch("http://localhost:5000/productlisting",{
            method: 'POST',
            body: JSON.stringify({productname,storename,accounttype, userid}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    const listingapi=async()=>{
        let result = await fetch(`http://127.0.0.1:5000/listproduct/${key4}/${email}/${password}`)
        savelistedproduct();
        getprevproducts();
    }

    return(
       <>
        <div className="content">
          <div className='container-fluid'>
            <div className='row p-4'>
            <div className='col-12 mt-2'>
                        <span className='slug'>E-assist Product Listing</span>
                        <h3 className=' mt-3'>Product Listing<br/><span className='subgreeting'>List your Sourced products   </span></h3>
    
            </div>

            <div className='col-12 p-3'>
                <div className='list-product'>
                    <div className='row'>
                        <div className='col-8'>
                        <h4>Name: {key1}</h4>
                        <h4>Price: {key2}</h4>
                        <h4>Lists: {key3}</h4>
                        <h5>Product is Ready For Listing</h5>
                        <button onClick={()=>listingapi()}>List Product</button>
                        </div>
                        <div className='col-4'>
                        <img width="80" height="80" src="https://img.icons8.com/flat-round/128/checkmark.png" alt="checkmark" className='float-right'/>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className='col-12 mt-2'>
                       
                        <h3 className=' mt-3'>Listed Products</h3>
                        <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Store name</th>
                                        <th scope="col">Account Type</th>
                                        <th scope="col">Listed</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                      
                                      {(prevproducts && prevproducts.length>0)?

                                        prevproducts.map((item)=>
                                        <tr>
                                        <td data-label="Account">{item.productname}</td>
                                        <td data-label="Due Date">{storename}</td>
                                        <td data-label="Amount">{accounttype}</td>
                                        <td><img width="48" height="48" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/></td>
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
export default Productlisting;