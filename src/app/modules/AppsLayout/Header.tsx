import { UpperCaseEachWord } from '@app/helpers/String.helper'
import React, { useEffect, useState } from 'react'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { t } = useTranslation()
    const [page, setPage] = useState<any>("/")
    const location = useLocation()
    useEffect(() => {
        let page = location.pathname != "/" ? location.pathname : "/"
        setPage(page)
    }, [location.pathname])

    return (
        <>
            <Navbar expand="xs" className="navbar navbar-expand-sm" bg="dark" data-bs-theme="dark">
                {/* <Navbar expand="sm" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark"> */}
                <Container>
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton className='border-bottom'>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Link to="home" className={`nav-link me-1 ${page == "/home" ? "active" : ""}`}>{UpperCaseEachWord(t("Home"))}</Link>
                                <Link to="project" className={`nav-link  me-1 ${page == "/project" ? "active" : ""}`}>{UpperCaseEachWord(t("Projects"))}</Link>
                                <Link to="explore" className={`nav-link  me-1 ${page == "/explore" ? "active" : ""}`}>{UpperCaseEachWord(t("Explores"))}</Link>
                                <Link to="freelance" className={`nav-link  me-1 ${page == "/freelance" ? "active" : ""}`}>{UpperCaseEachWord(t("Freelances"))}</Link>
                                <Link to="about-me" className={`nav-link me-1 ${page == "/about-me" ? "active" : ""}`}>{UpperCaseEachWord(t("About Me"))}</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
