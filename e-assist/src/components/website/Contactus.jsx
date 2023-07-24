import '../../assets/website.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import maps from '../../assets/images/map.jpg'
import Header from './Headerhome';
import Footer from './Footer';

function Contactus(){

    return(
        <>
          <div className='container-fluid'>
            <Header/>
                <div className='row servicebanner  p-4'>
                  <div className='col-12  justify-content-center mt-5 '>
                    <h1 className='mt-5'>Contact Us</h1>
                    <span>Read our project and softwear details below before placing any order<br></br>  items with a high potential for successand increased sales.</span>
                  </div>
                </div>
            </div>
            <div className='container mt-5 '>
                <div className='row mt-4 mb-5 p-4'>
                    <div className='col-lg-6 col-md-6 mt-4 p-4'>
                    <img src={maps} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='contact-card'>
                        <form>
                           <div className='row'>
                            <div className='col-6'>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                            </div>
                            <div className='col-6'>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div className='col-12 mt-4'>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Subject"/>
                            </div>
                            <div className='col-12 mt-4'>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Your Message'></textarea>
                            </div>
                           </div>
                            <button type="submit" class="submitbtn mt-4">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );


}
export default Contactus;