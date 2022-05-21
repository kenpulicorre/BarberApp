import React from "react";
import './NavBar.css'

export default function NavBar(){

    return(
      
        
    <nav class="navbar navbar-expand-lg navbar-dark p-3"  id="menu">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#servicios">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#tienda">Tienda</a>
              </li>
        
              <div class="menuNav">
                <li class="nav-item">
                  <button class="bg-dark" href="" >Registrate |</button>
                </li>
                <li class="nav-item">
                  <button class="bg-dark" href="">Ingresar</button>
                </li>
              </div>
            </ul>
            <form class="d-flex">
              <button class="btn btn-primary-outline-success" type="button">Reserva tu cita</button>
            </form>
          </div>
    </div>
    </nav>
    
    )
}