import '../../assets/website.css';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import gmail from '../../assets/images/gmail.png';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';
import aex from '../../assets/images/amazonexpress.png';
import paypal from '../../assets/images/paypal.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function Footer(){
    return(
        <>
        <div className='footer p-4'>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-sm-6 p-4'>
                     <h1>E-assist</h1>
                     <span>Automating your Amazon Virtual Assistant can help you streamline operations, allowing you to focus on other aspects of your business.</span>
                    <h5 className='mt-3'>Suported payment methods</h5>
                    <img src={paypal} width="50px" height="50px"/>
                        <img src={aex} width="50px" height="50px"/>
                        <img src={visa} width="50px" height="50px"/>
                        <img src={mastercard} width="50px" height="50px"/>
                    
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-6'>
                    <div className='footer-heading'>
                        <h5>Product</h5>
                        <ul className='mt-3'>
                            <li className='mt-2'>Home</li>
                            <li className='mt-2'>How it works</li>
                            <li className='mt-2'>Templates</li>
                            <li className='mt-2'>Plans</li>
                            <li className='mt-2'>Blog</li>
                            <li className='mt-2'>Login</li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-6'>
                    <div className='footer-heading'>
                        <h5>Legal</h5>
                        <ul className='mt-3'>
                            <li className='mt-2'>Disclaimer</li>
                            <li className='mt-2'>Privacy Policy</li>
                            <li className='mt-2'>Terms of use</li>
                            <li className='mt-2'>Cookie Policy</li>
                        </ul>
                        <h5>Social Media</h5>
                        <img src={facebook} width="50px" height="50px"/>
                        <img src={gmail} width="50px" height="50px"/>
                        <img src={instagram} width="50px" height="50px"/>
                        <img src={linkedin} width="50px" height="50px"/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Footer;