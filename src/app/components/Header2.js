"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import "./style.css";
import SignInButton from './SignInButton';

const navItems = [
    { id:1, label: "Home", href: "/" },
    { id:2, label: "About", href: "/about" },
    { id:3, label: "Service", href: "/service" },
    { id:4, label: "Contact", href: "/contact" },
    { id:5, label: "Blog", href: "/blog" }
  ]

  

const Header2 = () => {
    const [navbar, setNavbar] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const changeBackground = () => {
          if(window.scrollY >= 80){
            setNavbar(true)
          }else {
            setNavbar(false)
          }
        }
        window.addEventListener('scroll', changeBackground);
        // return () => window.removeEventListener('scroll', changeBackground);
    }, []);

  return (
    <div>
        <nav id='navbar' className={navbar ? `navbar navbar-expand-lg navbar-light bg-light fixed-top` : `navbar opacity-75 navbar-expand-lg navbar-white bg-light fixed-top`}>  {/* navbar-dark bg-light */}
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className={ pathname === `${'/'}` ? "nav-link text-danger": "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className={ pathname === `${'/about'}` ? "nav-link text-danger": "nav-link"}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/service" className={ pathname === `${'/service'}` ? "nav-link text-danger": "nav-link"}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={ pathname === `${'/contact'}` ? "nav-link text-danger": "nav-link"}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className={ pathname === `${'/blog'}` ? "nav-link text-danger": "nav-link"}>Blog</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link href="/contact" className={ pathname === `${'/contact'}` ? "nav-link text-danger": "nav-link"}>Contact Us</Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        <SignInButton />
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header2