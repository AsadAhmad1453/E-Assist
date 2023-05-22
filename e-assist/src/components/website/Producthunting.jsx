import '../../assets/website.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Headerhome';
import Footer from './Footer';
import chart from '../../assets/images/chart.png';
import report from '../../assets/images/report.png';
import dollar from '../../assets/images/dollar.png';
import optimization from '../../assets/images/optimization.png';


function Producthunting(){
    return(
        <>
            <div className='container-fluid'>
            <Header/>
                <div className='row servicebanner  p-4'>
                  <div className='col-12  justify-content-center mt-5 '>
                    <h1 className='mt-5'>Product Hunting</h1>
                    <span>Product hunting is about studying and observing current market trends to choose “winning”<br></br>  items with a high potential for successand increased sales.</span>
                  </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-12 mt-4 heading-service'>
                        <h5>We gave the best</h5>
                        <h2>What We Offer</h2>
                        <span>Integer luctus maximus massa ac elementum. Donec blandit vestibulum varius. Mauris vel euismod velit. Sed congue eu nisl sed egestas.<br></br> Quisque diam est, luctus a semper in, semper nec risus.</span>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 mt-4 p-2'>
                        <div className='service-card p-5'>
                            <img src={chart} width="70px" height="70px"/>
                            <h4 className='mt-2'>Profitable Products</h4>
                            <span>We bring the right people together to challenge established thinking and drive transform in 2020</span>
                        </div>
                        
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 mt-4 p-2'>
                        <div className='service-card p-5'>
                            <img src={report} width="70px" height="70px"/>
                            <h4 className='mt-2'>Generates Daily Reports</h4>
                            <span>We bring the right people together to challenge established thinking and drive transform in 2020</span>
                        </div>
                        
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 mt-4 p-2'>
                        <div className='service-card p-5'>
                            <img src={dollar} width="70px" height="70px"/>
                            <h4 className='mt-2'>Product Price Comparison</h4>
                            <span>We bring the right people together to challenge established thinking and drive transform in 2020</span>
                        </div>
                        
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 mt-4 p-2'>
                        <div className='service-card p-5'>
                            <img src={optimization} width="70px" height="70px"/>
                            <h4 className='mt-2'>Product list optimization</h4>
                            <span>We bring the right people together to challenge established thinking and drive transform in 2020</span>
                        </div>
                        
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    );
}
export default Producthunting;