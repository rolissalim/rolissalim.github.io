import React from 'react'
import { useTranslation } from 'react-i18next'
import ListSocialMedia from '../AboutMe/ListSocialMedia'
import { Link, useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { UpperCaseEachWord } from '@app/helpers/String.helper'

function Footer() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <footer className='footer bd-footer py-4 py-md-5 mt-5 bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div>
                            <h5>Nurdin Rolissalim</h5>
                            <div className="">
                                {t("nurdin-rolissalim")}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div>
                            <h5>Links</h5>
                            <Nav className="d-flex flex-column">
                                <Link to="home" className={`nav-link me-1 footer-link`}>{UpperCaseEachWord(t("Home"))}</Link>
                                <Link to="project" className={`nav-link  me-1 footer-link`}>{UpperCaseEachWord(t("Projects"))}</Link>
                                <Link to="explore" className={`nav-link  me-1 footer-link `}>{UpperCaseEachWord(t("Explores"))}</Link>
                                <Link to="freelance" className={`nav-link  me-1 footer-link `}>{UpperCaseEachWord(t("Freelances"))}</Link>
                                <Link to="about-me" className={`nav-link me-1 footer-link`}>{UpperCaseEachWord(t("About Me"))}</Link>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div>
                            <h5>Media Social</h5>
                            <ListSocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
