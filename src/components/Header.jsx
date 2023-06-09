  import React from 'react'
  import { Link } from 'react-router-dom'

  const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/" >TEXI-SERVICE-PROVIDER</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/" >HOME</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/form" >BOOK-TEXI</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/about" >ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

  export default Header
