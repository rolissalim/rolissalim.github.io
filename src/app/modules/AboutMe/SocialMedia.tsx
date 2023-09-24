import CardComponent from '@app/components/Card/CardComponent'
import { socialMediaData } from '@app/configs/data/social-media'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SocialMedia() {
    const data = socialMediaData()
    return (
        <Row>
            {data?.map((item: any, index: number) =>
                <Col key={index} sm={12} md={6}>
                    <Link to={item?.link} className='nav-link' target="_blank" rel="noopener noreferrer">
                        <CardComponent key={index} >
                            <h6 className='text-center'>
                                <i className={item?.icon}></i>  {item?.name}
                            </h6>
                        </CardComponent>
                    </Link>
                </Col>
            )
            }
        </Row>
    )
}

export default SocialMedia
