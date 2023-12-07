import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-background">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About-us</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>   
      </ul>
      <div className="d-flex" role="search">
        <i className="fa-solid fa-magnifying-glass me-5"></i>
        <i className="fa-regular fa-user me-5"></i>
        <i className="fa-solid fa-cart-shopping me-5"></i>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header