import { UpperCaseEachWord } from '@app/helpers/StringHelper'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
    const { t } = useTranslation()
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    {/* <Link to="home" className='navbar-brand'>Logo</Link> */}
                    <Nav className="me-auto">
                        <Link to="home" className='nav-link'>{UpperCaseEachWord(t("home"))}</Link>
                        <Link to="project" className='nav-link'>{UpperCaseEachWord(t("project"))}</Link>
                        <Link to="explore" className='nav-link'>{UpperCaseEachWord(t("explore"))}</Link>
                        <Link to="freelance" className='nav-link'>{UpperCaseEachWord(t("freelance"))}</Link>
                        <Link to="about-me" className='nav-link'>{UpperCaseEachWord(t("about me"))}</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
