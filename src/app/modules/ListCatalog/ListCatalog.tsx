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
    console.log();

    return (
        <>
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col lg={3} key={index}>
                        <CardImage image={item?.images?.[0] || "-"}>
                            <Card.Title>
                                <div className='text-wrap'>{item?.name}</div>
                            </Card.Title>
                            <div className="d-flex flex-row mb-1">
                                <div className="">Tools</div>
                                <div className="ms-2">{item?.program_language}</div>
                            </div>
                            <div className="d-flex flex-row mb-1">
                                <div className="">Period</div>
                                <div className="ms-2">{item?.period}</div>
                            </div>
                            <div className="d-flex flex-row mb-1">
                                <div className="">Status</div>
                                <div className="ms-2">{item?.status}</div>
                            </div>
                        </CardImage>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default ListCatalog
