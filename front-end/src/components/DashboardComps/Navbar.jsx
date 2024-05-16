import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [bool, setbool] = useState(false)
  

  useEffect(() => {
    if (bool) {

    }
  }, [])


  return (
    <>
      <div className="main flex justify-center gap-8 h-[18vh] w-full font-[Helvetica]">

        <div className="nav flex justify-between items-center w-[95%]">
          <div className="logo flex justify-center items-center gap-2">
            <a href="/"><img className='w-20 h-20 rounded-full' src="src/assets/top-view-table-full-delicious-food-composition_23-2149141352.webp" alt="" /></a>
          </div>

          <div className="elements flex gap-32 text-xl font-semibold">
            <div className="gallery cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <NavLink to="/catalog">Catalog</NavLink>
            </div>
            <div className="gallery cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <NavLink to="/gallery">Gallery</NavLink>
            </div>
            <div className="about cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="contacts cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <NavLink to="/contact">Contacts</NavLink>
            </div>
          </div>

          <div className="info flex justify-center items-center gap-5">
            <div className="btn">
              <button onClick={() => setbool(true)} className='text-lg md:text-xl font-light flex justify-center items-center border-black border-[3px] text-black py-0 md:py-1 px-2 md:px-4 rounded-full'>Sign Up</button>
            </div>
            <div className="cart">
              <NavLink to="shoppingcart">
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                  <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
