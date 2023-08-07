"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const navItems = [
  { id:1, label: "Home", href: "/" },
  { id:2, label: "About", href: "/about" },
  { id:3, label: "Service", href: "/service" },
  { id:4, label: "Contact", href: "/contact" },
  { id:5, label: "Blog", href: "/blog" }
]

const Header = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="bg-body-tertiary  sticky-top">
      <Container>
        <Link className="nav-link" href="/">Remlex Tech</Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="ms-auto">
          { navItems.map(link => {
              <Link key={link.id} href={link.href} className={ pathname === `${'/'}` ? "nav-link text-red": "nav-link"}>{link.label}</Link>
          })}
          </Nav> */}
          <Nav className="ms-auto">
            <Link href="/" className={ pathname === `${'/'}` ? "nav-link text-danger": "nav-link"}>Home</Link>
            <Link href="/about" className={ pathname === `${'/about'}` ? "nav-link text-primary": "nav-link"}>About</Link>
            <Link href="/service" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/blog" className="nav-link">Blogs</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header