import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants/index.js'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  // console.log(navLinks)

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`
    }>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt="logo" className="w-10 h-10" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Anabil
            <span className='sm:block hidden'>|&nbsp;MERN STACK DEV&nbsp;|</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`
            ${active === Link.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px]
            font-medium
            `}
              onClick={() => { setActive(Link.title) }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px]
          cursor-pointer object-contain'
            onClick={() => { setToggle(!toggle) }}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'}
          p-6 
          black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col item-start justify-end gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"}
                                font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => { setToggle(!toggle); setActive(Link.title) }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar