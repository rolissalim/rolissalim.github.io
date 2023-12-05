import Experiences from '@app/modules/AboutMe/Experiences'
import Profile from '@app/modules/AboutMe/Profile'
import ProfileImage from '@app/modules/AboutMe/ProfileImage'
import Skills from '@app/modules/AboutMe/Skills'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AboutMePage() {
    return (
        <>
            <Row>
                <Col lg={5}>
                    <ProfileImage />
                    <Profile />

                    {/* <SocialMedia /> */}
                </Col>
                <Col lg={7}>
                    <Experiences />
                    <Skills />
                </Col>
            </Row>
        </>
    )
}

export default AboutMePage
