import '../../assets/website.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Headerhome';
import Footer from './Footer';
import producthunting from '../../assets/images/searching.png';
import productsourcing from '../../assets/images/shipping.png';
import productlisting from '../../assets/images/listing.png';
import tick from '../../assets/images/tick.png';
import firstdiv from '../../assets/images/first-banner.jpg';
import camera from '../../assets/images/camera.png';
import search from '../../assets/images/search.png';
import ranking from '../../assets/images/ranking.png';
import user from '../../assets/images/username.png';
import tickorange from '../../assets/images/tickorange.png'





function Home(){
    return(
       <>
        <Header/>
       <div className='container-fluid'>
            <div className='row banner'>
                <div className='col-12 '>
                    <h1>Amazon Virtual Assistant Automation</h1>
                    <span>It's an excellent platform for amazon sellers to run their business without human interaction on amazon<br></br> without any risk involved.</span>
                    <div className='buttons mt-4'>
                        <button className='btn-left'>Get started</button>
                        <button className='btn-right'>Learn More</button>
                    </div>
                </div>
            
            </div>
        </div>
        <div className='container'>

        <div className='row mt-4'>
            <div className='col-md-6 col-lg-6 col-sm-12'>
            <img src={firstdiv} class="img-fluid" alt="Responsive image"/>
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12 mt-4 p-4'>
                <div className='head-title'>
                    <h3>The Design recipe for the growth in<br></br>e-commerce</h3>
                </div>
                <div className='first-content mt-3'>
                    <ul>
                        <li className='mt-2'><img src={tickorange}/>Easy to use</li>
                        <li className='mt-2'><img src={tickorange}/>Amazon Integration</li>
                        <li className='mt-2'><img src={tickorange}/>Image Generator</li>
                        <li className='mt-2'><img src={tickorange}/>Visual Listing optimization</li>
                        <li className='mt-2'><img src={tickorange}/>High Quality Support</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='row mt-4'>
            <div className='col-12 mt-3 services'>
                <h2>Our Top Services</h2>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={producthunting}/>Product Hunting</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={productsourcing}/>Product Resourcing</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={productlisting}/>Product Listing</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={ranking}/>Product Ranking</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={camera}/>Image Optimization</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4 service-block'>
                <a href=''>
                <div className='cardd'>
                        <h5><img src={search}/>Keyword Research</h5>
                        <div className='card-content p-2'>
                            <span>
                             We offer product hunting to automate the process of hunting products manually and give you the best possible results 
                            </span>
                        </div>
                </div>
                </a>         
            </div>
        </div>
</div>  

            <div className='container-fluid mt-4 '>
                <div className='row service-banner-two mt-5 p-4'>
                        <div className='sbtwo col-lg-6 col-md-6 col-sm-12 '>
                            <h3 className='wcu'>Why Choose us</h3>
                            <h1 className='wwd'>What we do?</h1>
                            <span>Nulla ac eros vel neque mattis maximus. In et feugiat neque,<br></br> vel porta ante. Morbi at justo justo. Etiam eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida viverra convallis. Ut vitae mauris tincidunt, pharetra turpis condimentum,<br></br> eleifend ipsum. Proin mollis bibendum odio, eu scelerisque lacus fermentum in.</span>
                            <div className='row mt-4'>
                                <div className='col-6'>
                                    <ul>
                                        <li><img src={tickorange}/>Customer Funnel Booster</li>
                                        <li><img src={tickorange}/>Remarketing Blueprint</li>
                                        <li><img src={tickorange}/>Lead Nurturing Scheme</li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li><img src={tickorange}/>Vulputate massa</li>
                                        <li><img src={tickorange}/>Phasellus odio dolor</li>
                                        <li><img src={tickorange}/>Aliquam sed finibus</li>
                                    </ul>
                                </div>  
                            </div>
                        </div>
                        <div className=' sbtwo col-lg-6 col-md-6 col-sm-12'>
                            <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='transparent-card'>
                                    <h5>Data Driven</h5>
                                    <span>We bring the roght people together to challenge established thinking and drive transform in 2020</span>
                                </div>
                                <div className='transparent-card mt-4'>
                                    <h5>Market Analys</h5>
                                    <span>We bring the roght people together to challenge established thinking and drive transform in 2020</span>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='transparent-card'>
                                    <h5>Tech Support</h5>
                                    <span>We bring the roght people together to challenge established thinking and drive transform in 2020</span>
                                </div>
                                <div className='transparent-card mt-4'>
                                    <h5>Data Secure</h5>
                                    <span>We bring the roght people together to challenge established thinking and drive transform in 2020</span>
                                </div>
                            </div>
                            </div>
                          
                            
                        </div>
                </div>
            </div>

        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12  services'>
                        <h2>Our Customers</h2>
                    </div>
                <div class="col-md-4 col-lg-4 col-sm-12 mt-4">
                    <div class="review-card p-3">
                    <div>
                        <img src={user} width="70px" height="70px"/>
                        <span className='ml-2'>Theresa.</span>
                    <span class="rating ml-3"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span> 
                    </div>
                    <div class="mt-2">
                        <span>I tuly beileive that they are giving their best to find quality product that will rank on amazon and give profitable earning </span>

                    </div>
                    </div>
                </div>

                <div class="col-md-4 col-lg-4 col-sm-12 mt-4">
                    <div class="review-card p-3">
                    <div>
                        <img src={user} width="70px" height="70px"/>
                        <span className='ml-2'>John</span>
                    <span class="rating ml-3"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span> 
                    </div>
                    <div class="mt-2">
                        <span>I tuly beileive that they are giving their best to find quality product that will rank on amazon and give profitable earning </span>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12 mt-4">
                    <div class="review-card p-3">
                    <div>
                        <img src={user} width="70px" height="70px"/>
                        <span className='ml-2'>Alice</span>
                    <span class="rating ml-3"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span> 
                    </div>
                    <div class="mt-2">
                        <span>I tuly beileive that they are giving their best to find quality product that will rank on amazon and give profitable earning </span>

                    </div>
                    </div>
                </div>
            </div>


            <div className='row mt-4'>
                <div className='col-12  services'>
                    <h2>Pricing</h2>
                </div>
                <div className='col-md-6 d-flex justify-content-center p-4'>
                    <div className='price-card'>
                        <div className='heading'>
                            <h4>Monthly</h4>
                            <div className='price mt-3'>
                            <h3>15$/month</h3>
                            </div>
                        </div>
                        <div className='content-price mt-4'>
                            <ul>
                                <li className='mt-3'><img src={tickorange} />Up to 5 Templates</li>
                                <li className='mt-3'><img src={tickorange} />1 Brand</li>
                                <li className='mt-3'><img src={tickorange} />25 listing</li>
                                <li className='mt-3'><img src={tickorange} />50 image background</li>
                                <li className='mt-3'><img src={tickorange} />50 keyword Search</li>
                                <li className='mt-3'><img src={tickorange} />3 Amazon INtegration</li>
                                <li className='mt-3'><img src={tickorange} />1M Free Stock Photos</li>
                                <li className='mt-3'><img src={tickorange} />250MB Storage</li>
                            </ul>
                            <div className='mt-3 d-flex justify-content-center'>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 d-flex justify-content-center p-4'>
                    <div className='price-card'>
                        <div className='heading'>
                            <h4>Yearly</h4>
                            <div className='price mt-3'>
                            <h3>100$/year</h3>
                            </div>
                        </div>
                        <div className='content-price mt-4'>
                            <ul>
                                <li className='mt-3'><img src={tickorange} />Up to 10 Templates</li>
                                <li className='mt-3'><img src={tickorange} />3 Brand</li>
                                <li className='mt-3'><img src={tickorange} />50 listing</li>
                                <li className='mt-3'><img src={tickorange} />200 image background</li>
                                <li className='mt-3'><img src={tickorange} />200 keyword Search</li>
                                <li className='mt-3'><img src={tickorange} />6 Amazon INtegration</li>
                                <li className='mt-3'><img src={tickorange} />2M Free Stock Photos</li>
                                <li className='mt-3'><img src={tickorange} />1GB Storage</li>
                            </ul>
                            <div className='mt-3 d-flex justify-content-center'>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
        
       </div>
       <Footer/>
       </>
    )
       
    
}
export default Home;