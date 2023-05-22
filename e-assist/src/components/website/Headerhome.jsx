import '../../assets/website.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Headerhome(){
    return(
        <>
          <nav class="navbar fixed-top navbar-expand-lg ">
            <a class="navbar-brand ml-4 " href="#">E-assist</a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <div class="dropdown show">
                        <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Services
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item  mt-2" href="#">Product Hunting</a>
                            <a class="dropdown-item  mt-2" href="#">Product Listing</a>
                            <a class="dropdown-item  mt-2" href="#">Keyword Research</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i> About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-phone" aria-hidden="true"></i> Contact Us</a>
                </li>
                </ul>
            </div>
        </nav>
        </>
    );
}
export default Headerhome;