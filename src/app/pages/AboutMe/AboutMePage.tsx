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
                    <div className='animate__animated animate__zoomInDown'>
                        <ProfileImage />
                    </div>
                    <div className='animate__animated animate__zoomInUp'>
                        <Profile />
                    </div>
                    {/* <SocialMedia /> */}
                </Col>
                <Col lg={7}>
                    <div className='animate__animated animate__zoomInRight'>
                        <Experiences />
                    </div>
                    <div className='animate__animated animate__zoomInRight'>  
                        <Skills />
                    </div>      
                </Col>
            </Row>
        </>
    )
}

export default AboutMePage
