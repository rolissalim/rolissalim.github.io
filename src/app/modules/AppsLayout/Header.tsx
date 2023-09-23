import { UpperCaseEachWord } from '@app/helpers/String.helper'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
    const { t } = useTranslation()
    return (
        <>
            <Navbar expand="sm" className="navbar navbar-expand-sm" bg="dark" data-bs-theme="dark">
                {/* <Navbar expand="sm" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark"> */}
                <Container>
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Link to="home" className='nav-link'>{UpperCaseEachWord(t("home"))}</Link>
                                <Link to="project" className='nav-link'>{UpperCaseEachWord(t("project"))}</Link>
                                <Link to="explore" className='nav-link'>{UpperCaseEachWord(t("explore"))}</Link>
                                <Link to="freelance" className='nav-link'>{UpperCaseEachWord(t("freelance"))}</Link>
                                <Link to="about-me" className='nav-link'>{UpperCaseEachWord(t("about me"))}</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
