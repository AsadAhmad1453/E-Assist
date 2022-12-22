import '../assets/login.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import iconlogin from '../assets/images/iconlogin.png'
import username from '../assets/images/username.png'
import password from '../assets/images/password.png'
import logo from '../assets/images/logo.png'
import email from '../assets/images/email.png'

function Login(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 text-center col-md-12 col-sm-12">
                    <img src={logo} className="logo rounded mt-5 " />
                    <p className='mt-4 welcome'><img src={iconlogin} width={40} height={40}/>  Welcome To E-assist</p>
                    <p className='slogan'>Register Yourself</p>
                    <from> 
                        <div className='col-12 mt-4'>
                          <img src={username}  width={40} height={40}/>  <input type="text"  className="inpuut" placeholder='Username'></input>
                        </div>
                        <div className='col-12 mt-4'>
                          <img src={email}  width={40} height={40}/>  <input type="text"  className="inpuut" placeholder='Email address'></input>
                        </div>
                        <div className='col-12 mt-4'>
                           <img src={password}  width={40} height={40}/> <input className="inpuut" type="password" placeholder='Password'></input>
                        </div>
                        <div className='col-12 mt-4'>
                            <input type="checkbox"/><span > Remember Me</span>
                        </div>
                        <div className='col-12 mt-2'>
                            <input type="Submit" className='buton inpuut'></input>
                        </div>  
                        <div className='col-12 mt-2'>
                            <span>Already have an account? <a href="/login">Signin</a></span>
                        </div> 
                        
                    </from>
                </div>

                <div className="col-5 image d-none d-lg-block">
                   
                </div>
            </div>
        </div>
            
        </>
    )
       
    
}
export default Login;
