import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';

function Producthunting(props){
    const [products, setProducts]= useState([]);
    const [prevproducts, setPrevproducts]= useState([]);
    const [sproducts, setSproducts]= useState([]);
    const [productcategory, setProductcategory]= useState("");
    const [minprice, setMinprice] = useState(0);
    const [maxprice, setMaxprice] =useState(0);
    const [empty, setEmpty] = useState(false);
    const [error, setError]= useState(false);
    const auth= localStorage.getItem("user");
    const userid=JSON.parse(auth)._id;
    const navigate= useNavigate();
    useEffect(()=>{
           getproducts();
           getpreviousproducts();
            suggestedproducts();
           
    },[]);

    const suggestedproducts=async()=>{
        let result= await fetch(`http://127.0.0.1:5000/getproducts/Trending/10/100`);
        result=await result.json();
        setSproducts(result);
    }

    const getpreviousproducts=async()=>{
            let result = await fetch(`http://localhost:5000/gethuntedproducts/${userid}`);
            result= await result.json();
            setPrevproducts(result);
    }

    const getproducts=async()=>{
            let result= await fetch(`http://127.0.0.1:5000/getproducts/${productcategory}/${minprice}/${maxprice}`);
            result=await result.json();
            setProducts(result);
            
    }

    const saveproduct=async(productname, sellingprice, recommendedprice)=>{
    
        if(recommendedprice>0){
            let result = await fetch('http://localhost:5000/huntedproduct',{
                    method: 'POST',
                    body: JSON.stringify({productname,sellingprice,recommendedprice, userid}),
                    headers: {
                        'Content-Type': 'application/json'
                    },
            });
            navigate(`/dashboard/productsourcing/${productname}/${minprice}/${maxprice}`);
        }
        setError(true);

       
   
    }

    const callapi=()=>{
        if(!productcategory || !minprice || !maxprice){
            setEmpty(true);
            return(false);
        }
        getproducts();

    }
    return(
       <>
        <div className="content">
            <div className='container-fluid'>
                <div className='row p-4'>
                    <div className='col-12 mt-2 '>
                    <span className='slug'>E-assist Product Hunting</span>
                    <h6 className='greetings mt-3'>Product Hunting<br/><span className='subgreeting'>Let's Hunt New Products for your business!</span></h6>
                    </div>
                    <div className='col-12 mt-3'>
                    <button className="producthuntingbtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa-solid fa-plus"/> Hunt new Products
                    </button>
                    <div className="collapse mt-2" id="collapseExample">
                        <div className="card card-body">
                           
                            <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label className='label' >Product Category</label><br/>
                                <input className="prdocuthuntinginput" type="text" placeholder='Electronics etc..' onChange={((e)=>setProductcategory(e.target.value))} value={productcategory}></input>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label for="sel1">Min price</label>
                                <input className="prdocuthuntinginput" type="text" placeholder='$xxx' onChange={((e)=>setMinprice(e.target.value))} value={minprice}></input>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label className='label' >Max price</label><br/>
                                <input className="prdocuthuntinginput" type="text" placeholder='$xxxx' onChange={((e)=>setMaxprice(e.target.value))} value={maxprice}></input>
                            </div>
                            <div className='col-12 mt-4 '>
                                <button className='producthuntingbtn float-right' onClick={()=>callapi()}>Hunt Product</button>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    
                    <div className='row mt-4 '>
                   
                        <div className='col-12 mt-4'>
                        <div className='table-title '>
                                        <h5>Hunted Products<br></br> <span className='subgreeting'>Overview of top selling products</span></h5><hr></hr>
                                </div>
                                {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        You are unable to resource product without <strong>Product Hunting</strong> 
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>}
                                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Selling Price</th>
                                        <th scope="col">Recomended Price</th>
                                        <th scope="col">Sourcing</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                      
                                      {(products && products.length>0)?

                                        products.map((item)=>
                                        <tr>
                                        <td data-label="Account">{item.name}</td>
                                        <td data-label="Due Date">{item.price}</td>
                                        <td data-label="Amount">${parseInt(item.price.slice(-5))-(((parseInt(item.price.slice(-5))/100)*35))}</td>
                                        <td data-label="Period"><button className='producthuntingbtn' onClick={()=>saveproduct(item.name, item.price, (parseInt(item.price.slice(-5))-(((parseInt(item.price.slice(-5))/100)*35))))}>Source Product</button></td>
                                        </tr>
                                        ):
                                        <>
                                        <span className='alert-danger'>No new hunted products</span>
                                        </>
                                    
                                        }
                                        </tbody>
                                </table>
                        </div>
                        <div className='col-12 mt-2 '>
                 
                    <h6 className='greetings mt-3'>Suggested Products<br/><span className='subgreeting'>Let's Hunt New Products for your business!</span></h6>
                    </div>
                        {(sproducts && sproducts.length>0)?
                            sproducts.slice(0, 4).map((item)=>
                            <div className='col-lg-3 col-md-6 d-flex justify-content-center col-sm-12 mt-5'>
                            <div className='analytics-card'>
                                    <h7 className=' card-titleee mb-2'>{item.name}</h7><br></br>
                                    <span className='order' >{item.price}</span>
                                    <div className='card-detail mt-4'>
                                    <button onClick={()=>saveproduct(item.name, item.price, (parseInt(item.price.slice(-5))-(((parseInt(item.price.slice(-5))/100)*35))))}>Source</button>
                                    </div>
                            </div>
                            </div>
                            
                            )
                            
                            :<></>    
                    }
                        
                    
                    </div>

                    <div className='row mt-4 '>
                        <div className='col-12'>
                        <div className='table-title '>
                                        <h5>Previously Hunted Products<br></br> <span className='subgreeting'>Your Resourced Products</span></h5><hr></hr>
                                </div>
                                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Selling Price</th>
                                        <th scope="col">Recomended Price</th>
                                        <th scope="col">Selected</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                      
                                      {(prevproducts && prevproducts.length>0)?

                                        prevproducts.map((item)=>
                                        <tr>
                                        <td data-label="Account">{item.productname}</td>
                                        <td data-label="Due Date">{item.sellingprice}</td>
                                        <td data-label="Amount">${item.recommendedprice}</td>
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
      </div>
       </>
    )
}
export default Producthunting;