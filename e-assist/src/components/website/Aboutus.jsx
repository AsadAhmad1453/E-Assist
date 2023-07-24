import '../../assets/website.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Headerhome';
import Footer from './Footer';
import image1 from '../../assets/images/aboutus.jpg';
import project from '../../assets/images/projects.png';
import world from '../../assets/images/world.png';
import staff from '../../assets/images/staff.png';
import agreement from '../../assets/images/agreement.png';
import office from '../../assets/images/aboutusoffice.jpg';




function Aboutus(){

    return(

        <>
         <div className='container-fluid'>
            <Header/>
                <div className='row servicebanner  p-4'>
                  <div className='col-12  justify-content-center mt-5 '>
                    <h1 className='mt-5'>About Us</h1>
                    <span>Read our project and softwear details below before placing any order<br></br>  items with a high potential for successand increased sales.</span>
                  </div>
                </div>
            </div>
        <div className='container aboutus'>
            <div className='row mt-4 ourvision'>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-4'>
                        <img src={image1} class="img-fluid" alt="Responsive image"/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-4'>
                            <h5>Welcome to E-assist</h5>
                            <h2>The Best Amazon Automation Company</h2>
                            <span>In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. </span>
                            <div className='row'>
                            <div className='col-lg-6 mt-3 col-md-6 col-sm-12'>
                                    <div className='servicetwocard'>
                                        <h6>Managed it service</h6>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </div>
                                </div>
                                <div className='col-lg-6 mt-3 col-md-6 col-sm-12'>
                                    <div className='servicetwocard'>
                                        <h6>Cloud Security</h6>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <button className='button-aboutus'>Our Services</button>
                                </div>
                            </div>

                        </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
                    <div className='aboutus-card'>
                    <img src={project} width="60px" height="60px" />
                    <h5>427 Project </h5>
                    </div>
                
                </div>

                <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
                    <div className='aboutus-card'>
                    <img src={world} width="60px" height="60px" />
                    <h5>862 world wide clients</h5>
                    </div>
                
                </div>

                <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
                    <div className='aboutus-card'>
                    <img src={staff} width="60px" height="60px" />
                    <h5>100 company projects</h5>
                    </div>
                
                </div>

                <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
                    <div className='aboutus-card'>
                    <img src={agreement} width="60px" height="60px" />
                    <h5>$5M Capital Raised</h5>
                    </div>
                
                </div>
                
            </div>

            <div className='row aboutusbanner mt-5 p-4 mb-4'>
                        <div className='sbtwo col-lg-6 col-md-6 col-sm-12 mt-5 '>
                            <h3 className='wcu'>Why we do this ?</h3>
                            <h1 className='wwd'>History</h1>
                            <span>ravida viverra convallis. Ut vitae mauris tincidunt, pharetra turpis condimentum,<br></br> eleifend ipsum. Proin mollis bibendum odio, eu scelerisque lacus fermentum in.</span>
                            <br></br>
                            <button className='mt-4 button-get-started'>Let's Start</button>
                        </div>
                        <div className=' sbtwo col-lg-6 col-md-6 col-sm-12 mt-5'>
                             <img src={office} class="img-fluid" alt="Responsive image"/>
                        </div>
                </div>

            

        </div>
        <Footer/>
        </>
    );



}
export default Aboutus;