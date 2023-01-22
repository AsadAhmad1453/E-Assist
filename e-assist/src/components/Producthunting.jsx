import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import '../assets/login.css';

function producthunting(props){
    return(
       <>
        <div className="content">
            <div className='container-fluid'>
                <div className='row p-4'>
                    <div className='col-12 mt-2 '>
                    <span className='slug'>E-assist >> Product Hunting</span>
                    <h6 className='greetings mt-3'>Product Hunting<br/><span className='subgreeting'>Let's Hunt New Products for your business!</span></h6>
                    </div>
                    <div className='col-12 mt-3'>
                    <button className="producthuntingbtn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa-solid fa-plus"/> Hunt new Products
                    </button>
                    <div className="collapse mt-2" id="collapseExample">
                        <div className="card card-body">
                           <form>
                            <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label className='label' >Product name</label><br/>
                                <input className="prdocuthuntinginput" type="text" placeholder='Water Bottle etc..'></input>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label for="sel1">Category</label>
                                    <select class=" prdocuthuntinginput " id="sel1">
                                        <option>Electronics</option>
                                        <option>Houseold</option>
                                        <option>Interior</option>
                                        <option>Decor</option>
                                    </select>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <label className='label' >Budget</label><br/>
                                <input className="prdocuthuntinginput" type="text" placeholder='$xxxx'></input>
                            </div>
                            <div className='col-12 mt-4 '>
                                <button className='producthuntingbtn float-right'>Hunt Product</button>
                            </div>
                            </div>
                            
                           </form>
                        </div>
                    </div>
                    </div>

                    <div className='row mt-4 '>
                        <div className='col-12'>
                        <div className='table-title '>
                                        <h5>Hunted Products<br></br> <span className='subgreeting'>Overview of top selling products</span></h5><hr></hr>
                                </div>
                                <table>
                                        <thead>
                                        <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Selling Price</th>
                                        <th scope="col">Market Demand</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Sourcing</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td data-label="Account">Water Bottle</td>
                                        <td data-label="Due Date">$500</td>
                                        <td data-label="Amount">1000</td>
                                        <td data-label="Period">4.4</td>
                                        <td data-label="Period"><button className='producthuntingbtn'>Source Product</button></td>
                                        </tr>
                                        <tr>
                                        <td data-label="Account">Android TV</td>
                                        <td data-label="Due Date">$1000</td>
                                        <td data-label="Amount">30</td>
                                        <td data-label="Period">3.2</td>
                                        <td data-label="Period"><button className='producthuntingbtn'>Source Product</button></td>
                                        </tr>
                                        <tr>
                                        <td data-label="Account">Iphone 12</td>
                                        <td data-label="Due Date">$1200</td>
                                        <td data-label="Amount">100</td>
                                        <td data-label="Period">5.0</td>
                                        <td data-label="Period"><button className='producthuntingbtn'>Source Product</button></td>
                                        </tr>
                                        <tr>
                                        <td data-label="Account">Electric Heater</td>
                                        <td data-label="Due Date">$70</td>
                                        <td data-label="Amount">5000</td>
                                        <td data-label="Period">4.0</td>
                                        <td data-label="Period"><button className='producthuntingbtn'>Source Product</button></td>
                                        </tr>
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
export default producthunting;