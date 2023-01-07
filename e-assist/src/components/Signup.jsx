import '../assets/login.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-router-dom';
import googlelogo from '../assets/images/google.png';
import iconlogin from '../assets/images/iconlogin.png'
import username from '../assets/images/username.png'
import password from '../assets/images/password.png'
import logo from '../assets/images/logo.png'
import email from '../assets/images/email.png'

function Login(){
    return(
        <>
         <div className="container-fluid register">
            <div className="row">
                <div className="col-lg-7  col-md-12 col-sm-12 ">
                    <h2 className='logo mt-4 ml-3'>E-assist</h2>
                    <div className='d-flex justify-content-center '>
                        <from className="form mt-3"> 
                            <p className='mt-3 ml-2 welcome'>Sign up</p>
                                <div className='col-12 mt-4 '>
                                    <button className='googlebutton'><img src={googlelogo} width={30} height={30}/> Continue with Google</button>
                                </div>
                                <div className='col-12 d-flex justify-content-center mt-3'>
                                    <span className='or'>or</span>
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Email</label><br/>
                                    <input type="text"  className="inpuut" placeholder='Username or email'></input>
                                </div>
                                <div className='col-12 mt-4'>
                                    <label className='label' >Create Password</label><br/>
                                    <input className="inpuut" type="password" placeholder='Password'></input> 
                                </div>
                                <div className='col-12 mt-5 '>
                                    <input type="Submit" className='buton inpuut'></input>
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
