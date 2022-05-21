import React from "react";
import './Carrousel.css'

export default function Carrousel(){
    return(
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active" data-bs-interval="5000" id="slider1">
          </div>
          
          <div class="carousel-item" data-bs-interval="5000" id="slider2">
          </div>
 
          <div class="carousel-item" data-bs-interval="5000" id="slider3">
          </div>
 
 
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>    
    )
}