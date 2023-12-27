import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navsection'>
    <div className='navbar'> 

        <h2>Shoppy</h2>
        <input type="Search" placeholder='Search Products'  />
        <ul>
            <li><a href=""><i class="fa-solid fa-user"></i></a></li>
            <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
            <li><a href=""><i class="fa-solid fa-cart-plus"></i></a></li>
            
        </ul>

    </div>
    <div className='itemsdiv'>
      <ul className='items'>
        <li>Home</li>
        <li>Category</li>
        <li>Shop</li>
        <li>Deals</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="navresponsive">

      <ul className='itemsres'>
        <li>Home</li>
        <li>Category</li>
        <li>Shop</li>
        <li>Deals</li>
        <li>Contact</li>
      </ul>
      
    </div>

    </div>
  )
}
