import '../assets/login.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState ,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Login(){

    const [email,setemail] = useState("");
    const [password,setpassword]= useState("");
    const [error , seterror] =useState(false);
    const [empty, setempty] = useState(false);
    const navigate= useNavigate();

  

    const logindata=async()=>{
        if(!email || !password){
            setempty(true);
            return false;
        }
       
        let result = await fetch('http://localhost:5000/login',{
                    method: 'POST',
                    body: JSON.stringify({email,password}),
                    headers: {
                        'Content-Type': 'application/json'
                    } ,
            });

            result= await result.json();
            console.log(result)
            if(result.email){

                localStorage.setItem("user", JSON.stringify(result));
                navigate("/dashboard");

            }
            else{
                seterror(true);
            }

        
    }
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/dashboard")
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
                            <p className='mt-3 ml-2 welcome'>Log in</p>
                            <div className='col-12 d-flex justify-content-center'>
                           {error && <span className='invalid-input'>Email or password is incorrect</span>} 

                            </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Email</label><br/>
                                    <input type="text"  className="inpuut" placeholder='Username or email' onChange={((e)=>setemail(e.target.value))} value={email}></input>
                                    <br></br>{empty && !email && <span className='invalid-input'>Fill this field</span>}
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Password</label><br/>
                                    <input className="inpuut" type="password" placeholder='Password' onChange={((e)=>setpassword(e.target.value))} value={password}></input>
                                    <br></br>{empty && !password && <span className='invalid-input'>Fill this field</span>}
                                    <span className='whitetext float-right'><Link className='link' to='/signup'>Forgot Password?</Link></span>
                                </div>
                                <div className='col-12 mt-5 '>
                                    <input type="Submit" className='buton inpuut' onClick={logindata}></input>
                                </div>  
                                <div className='col-12 mt-3'>
                                    <span className='whitetext'>Do not have an account? <Link className='link' to='/signup'>Signup</Link></span>
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
