import CardComponent from '@app/components/Card/CardComponent'
import { biodata } from '@app/configs/data/biodata'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Profile() {
    const data = biodata()
    return (
        <CardComponent>
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col md={12} sm={12} key={index} className={`${index < (data.length - 1) ? "border-bottom  mb-3" : ""}`}>
                        <div>{item?.key}</div>
                        {typeof item?.value == "string" ?
                            <div>{item?.value}</div> :
                            item?.value?.map((items: any, indexs: number) =>
                                <div key={indexs}>{items}</div>
                            )

                        }

                        {/* {index < (data.length - 1) ? <hr /> : null} */}

                    </Col>
                )}
            </Row>

        </CardComponent>
    )
}

export default Profile
