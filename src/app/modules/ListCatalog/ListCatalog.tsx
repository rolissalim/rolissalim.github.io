import { ModalData } from '@app/components'
import CardImage from '@app/components/Card/CardImage'
import { statusConfig } from '@app/configs/status.config'
import { get } from 'lodash'
import React, { useState } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ListCatalogDetail from './ListCatalogDetail'
import { Link } from 'react-router-dom'

interface IListCatalog {
    data: any
}
const ListCatalog = ({
    data
}: IListCatalog) => {
    const { t } = useTranslation()
    const [dataSelected, setDataSelected] = useState<any>()
    const [modal, setModal] = useState<any>({
        show: false,
        size: "lg",
        title: "Data Detail"
    })
    const handleClick = (item: any) => {
        setDataSelected(() => { return item })
        setModal((prev: any) => {
            return { ...prev, show: true, title: item?.name }
        })
    }

    console.log("data", data);

    return (
        <>
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col lg={3} md={4} sm={6} xs={12} key={index}>
                        <CardImage
                            handleSelected={handleClick}
                            item={item}
                            className='shadow-sm border-0' image={item?.images?.[0] || "-"}>
                            <Card.Title className='h6'>
                                <div className='text-wrap'>{item?.name}</div>
                            </Card.Title>
                            <div> {item?.program_language} </div>
                            <div className="mb-1 fs-7 text-muted small">{item?.short_description}</div>
                            {item?.source_code ? <Link to={item?.source_code} target='_blank'>source code</Link> : null}
                            {item?.link ? <Link to={item?.link} target='_blank'>view web</Link> : null}
                            <div className="d-flex justify-content-between mb-1">
                                <div className="">{item?.period}</div>
                                <div className=""><Badge bg={get(statusConfig(), item?.status) || "primary"}>{item?.status}</Badge></div>
                            </div>
                        </CardImage >
                    </Col >
                )}
            </Row>
            <ModalData modalProps={modal} >
                <ListCatalogDetail dataSelected={dataSelected} />
            </ModalData>
        </>
    )
}

export default ListCatalog
