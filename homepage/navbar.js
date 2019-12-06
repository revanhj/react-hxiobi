import React from 'react'
import {Link} from 'react-router-dom'
 const navitems=[
  {
    "logo":"fa fa-home",
    "name":"Home"
  },
   {
    "logo":"logo",
    "name":"About Hospital"
  },
   {
    "logo":"logo",
    "name":"Departments"
  },
   {
    "logo":"logo",
    "name":"Doctors"
  },
   {
    "logo":"logo",
    "name":"Services"
  },
   {
    "logo":"logo",
    "name":"Contact"
  }
];

const navbar=()=>
<React.Fragment>
<nav className="navbar navbar-expand-lg justify-content-between shadow p-0">
  <Link className="navbar-brand text-dark" to="/">LOGO</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="fa fa-bars text-dark"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     {navitems.map((item)=>
      <li className="nav-item active mr-5 text-dan" key={item.name}>
      <Link className="nav-link text-dark" to={item.name}>{item.name}</Link>
</li> 
       )}
      
    </ul>
  </div>
</nav>
</React.Fragment>

export default navbar;