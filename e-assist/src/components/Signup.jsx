import '../assets/login.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';


function Login(){

    const [email , setemail]= useState("");
    const [password, setpasword]= useState("");
    const [name, setusername] = useState(""); 
    const [storeemail, setStoreemail]= useState("");
    const [storepassword, setStorepassword]= useState("");
    const [accounttype, setAccounttype]= useState("");
      
    const [isempty, setempty] = useState(false);

    const navigate = useNavigate();
    const getdata=async ()=>{
        if(!email || !name || !password){
            setempty(true);
            return false;
        }
            let result= await fetch('http://localhost:5000/register',{
                method: 'POST',
                body: JSON.stringify({name,email,password,storeemail, storepassword,accounttype}),
                headers: {
                    'Content-Type': 'application/json'
                } ,
            });
            result= await result.json();
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/Dashboard');
    }

    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
            navigate('/dashboard')
        }
    })

    return(
        <>
         <div className="container-fluid register">
            <div className="row">
                <div className="col-lg-7  col-md-12 col-sm-12 ">
                    <h2 className='logo mt-4 ml-3'>E-assist</h2>
                    <div className='d-flex justify-content-center '>
                        <from className="form mt-3"> 
                            <p className='mt-3 ml-2 welcome'>Sign up</p>
                        <div className='row'>
                        <div className='col-6 mt-4'>
                                    <label className='label' >Username</label><br/>
                                    <input type="text" className="inpuut" placeholder='name' onChange={((e)=> setusername(e.target.value))} value={name}></input>
                                    <br></br>{isempty && !name && <span className='invalid-input'>Fill this Field</span>}
                                </div>
                                <div className='col-6 mt-4'>
                                    <label className='label' >Email</label><br/>
                                    <input type="text"  className="inpuut" placeholder='email' onChange={((e)=>setemail(e.target.value))} value={email}></input>
                                    <br></br>{isempty && !email && <span className='invalid-input'>Fill this Field</span>}

                                </div>
                                 
                                <div className='col-6 mt-4'>
                                    <label className='label' >Create Password</label><br/>
                                    <input className="inpuut" type="password" placeholder='Password' onChange={((e)=>setpasword(e.target.value))} value={password}></input> 
                                    <br></br>{isempty && !password && <span className='invalid-input'>Fill this Field</span>}

                                </div>
                                <div className='col-6 mt-4'>
                                    <label className='label' >Store Email</label><br/>
                                    <input className="inpuut" type="email" placeholder='store ...' onChange={((e)=>setStoreemail(e.target.value))} value={storeemail}></input> 
                                    <br></br>{isempty && !storeemail && <span className='invalid-input'>Fill this Field</span>}

                                </div>
                                <div className='col-6 mt-4'>
                                    <label className='label' >Store Password</label><br/>
                                    <input className="inpuut" type="password" placeholder='store..' onChange={((e)=>setStorepassword(e.target.value))} value={storepassword}></input> 
                                    <br></br>{isempty && !storepassword && <span className='invalid-input'>Fill this Field</span>}

                                </div>
                                <div className='col-6 mt-4'>
                                    <label className='label' >Account Type</label><br/>
                                    <input className="inpuut" type="text" placeholder='dropshipping' onChange={((e)=>setAccounttype(e.target.value))} value={accounttype}></input> 
                                    <br></br>{isempty && !accounttype && <span className='invalid-input'>Fill this Field</span>}
                                </div>
                        </div>
                              
                                
                                <div className='col-12 mt-5 '>
                                    <input type="Submit" className='buton inpuut' onClick={getdata}></input>
                                </div>  
                                <div className='col-12 mt-3'>
                                    <span className='whitetext'>Already have an account? <Link className='link' to='/login'>Login</Link></span><br/>
                                  
                                </div>
                        </from>
                    </div>
                </div>

                <div className="col-5 overlay image d-none d-lg-block">
                   
                </div>
            </div>
        </div>
        </>
    )
       
    
}
export default Login;
