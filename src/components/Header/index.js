import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./style.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMouseEnter = () => setShowServices(true);
  const handleMouseLeave = () => setShowServices(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${styles["navbar_main"]} ${
            scrolled ? styles.scrolled : ""
          } myContainer bg-body-tertiary mb-3`}
        >
          <Container fluid>
            <Navbar.Brand className={styles.logo} href="/">
              Tecnologia
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-center flex-grow-1 pe-3 gap-2">
                  <Nav.Link className={styles.nav_list} href="/">
                    Home
                  </Nav.Link>
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavDropdown
                      title={
                        <span className={styles.nav_list}>
                          Services <IoMdArrowDropdown />
                        </span>
                      }
                      show={showServices}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <Nav.Link className={styles.nav_list} href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link className={styles.nav_list} href="#">
                    Company
                  </Nav.Link>
                  <Nav.Link className={styles.nav_list} href="#">
                    Contact
                  </Nav.Link>
                </Nav>
                <Button className={styles.nav_button}>Get in Touch </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
