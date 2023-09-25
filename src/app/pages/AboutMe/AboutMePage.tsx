import CardComponent from '@app/components/Card/CardComponent'
import Experiences from '@app/modules/AboutMe/Experiences'
import Profile from '@app/modules/AboutMe/Profile'
import ProfileImage from '@app/modules/AboutMe/ProfileImage'
import SocialMedia from '@app/modules/AboutMe/SocialMedia'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutMePage() {
    return (
        <>
            <Row>
                <Col lg={5}>
                    <ProfileImage />
                    <SocialMedia />
                </Col>
                <Col lg={7}>
                    <Profile />
                    <Experiences />
                </Col>
            </Row>
        </>
    )
}

export default AboutMePage
