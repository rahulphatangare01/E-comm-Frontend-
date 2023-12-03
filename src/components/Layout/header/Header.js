import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav-background">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About-us</a>
        </li> <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>   
      </ul>
      <div class="d-flex" role="search">
        <i class="fa-solid fa-magnifying-glass me-5"></i>
        <i class="fa-regular fa-user me-5"></i>
        <i class="fa-solid fa-cart-shopping me-5"></i>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header