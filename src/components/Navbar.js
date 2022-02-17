import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
 return (
    

    <nav class="navbar navbar-expand-lg navbar-light bg-info fixed-top">

        <div class="container">

          <a class="navbar-brand" href="#">Navbar</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li ><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
              
            <li><Link to="/contact">Contact</Link></li>
            </ul>


          </div>
        </div>

      </nav>


    /*{ <li>
     <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "red" }} exact >
      Home
     </NavLink>
    </li>
    <li>
     <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "red" }} exact>
      About
     </NavLink>
    </li>
    <li>
     <NavLink to="/contact" activeStyle={{ fontWeight: "bold", color: "red" }} exact>
      Contact
     </NavLink>
    </li> }*/
)
}

export default Navbar
