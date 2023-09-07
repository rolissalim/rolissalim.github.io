import CardImage from '@app/components/Card/CardImage'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

interface IListCatalog {
    data: any
}
const ListCatalog = ({
    data
}: IListCatalog) => {
    const { t } = useTranslation()
    return (
        <>
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col lg={3} key={index}>
                        <CardImage image={item?.images?.[0] || "-"}>
                            <Card.Title>
                                {item?.name}
                            </Card.Title>
                            <div className="d-flex flex-row mb-3">
                                <div className="">Period</div>
                                <div className="ms-2">{item?.period}</div>
                            </div>
                        </CardImage>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default ListCatalog
