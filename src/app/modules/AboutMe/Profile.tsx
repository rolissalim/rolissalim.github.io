import CardComponent from '@app/components/Card/CardComponent'
import { biodata, biodataRight } from '@app/configs/data/biodata'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Profile() {
    const data = biodata()
    const dataRight = biodataRight()
    return (
        <CardComponent className='shadow-sm'>
            <Row>
                <Col md={6} sm={12}>
                    {data?.map((item: any, index: number) =>
                        <div key={index} className={` mb-3 ${index < (data.length - 1) ? "border-bottom" : null}`}>
                            <div key={index}>{item?.key}</div>
                            {
                                typeof item?.value == "string" ?
                                    <div>{item?.value}</div> :
                                    item?.value?.map((items: any, indexs: number) =>
                                        <div key={indexs}>{items}</div>
                                    )

                            }
                            {/* {index < (data.length - 1) ? <hr /> : null} */}

                        </div>


                    )}

                </Col>
                <Col md={6} sm={12}>

                    {dataRight?.map((item: any, index: number) =>
                        <div key={index} className={`${index < (data.length - 1) ? "border-bottom mb-3" : null}`}>

                            <div key={index}>{item?.key}</div>

                            <div>{item?.value}</div>


                            {/* {index < (data.length - 1) ? <hr /> : null} */}

                        </div>


                    )}

                </Col>

            </Row>

        </CardComponent>
    )
}

export default Profile
