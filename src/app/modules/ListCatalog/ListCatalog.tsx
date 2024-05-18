import { ModalData } from '@app/components'
import CardImage from '@app/components/Card/CardImage'
import { statusConfig } from '@app/configs/status.config'
import { get } from 'lodash'
import React, { useState } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ListCatalogDetail from './ListCatalogDetail'
import { Link } from 'react-router-dom'
import { truncate } from '@app/helpers/String.helper'
import Status from '@app/components/Status/Status'
import Time from '@app/components/Time/Time'
import LinkAccess from '@app/components/Info/LinkAccess'

interface IListCatalog {
    data: any
    className?: string
}
const ListCatalog = ({
    data,
    className = ""
}: IListCatalog) => {
    const { t } = useTranslation()
    const [dataSelected, setDataSelected] = useState<any>()
    const [modal, setModal] = useState<any>({
        show: false,
        size: "xl",
        title: "Data Detail"
    })
    const handleClick = (item: any) => {
        setDataSelected(() => { return item })
        setModal((prev: any) => {
            return { ...prev, show: true, title: item?.name }
        })
    }

    return (
        <>
            <Row >
                {data?.map((item: any, index: number) =>
                    <Col className={`mb-2 `} lg={3} md={4} sm={6} xs={12} key={index}>
                        <CardImage
                            handleSelected={handleClick}
                            item={item}
                            className={`shadow-sm ${className}`}
                            classNameBody='catalog-content'
                            image={item?.images?.[0] || "-"}>
                            <Card.Title className='h6'>
                                <div className='text-wrap' title={item?.name}>{truncate(item?.name, 29)}</div>
                            </Card.Title>
                            <div> {item?.program_language} </div>
                            <div className="mb-1 fs-7 text-muted small list-content">{item?.short_description}</div>
                            <div className="d-flex justify-content-between mb-1">
                                <LinkAccess link={item?.source_code} title='source code' />
                                <LinkAccess link={item?.link} title='view web' />
                            </div>
                            <div className=' position-absolute fixed-bottom list-footer px-3 pb-2'>
                                <div className="d-flex justify-content-between mb-1">
                                    <Time date={item?.period}/>
                                    <Status status={item?.status}/>
                                </div>
                            </div>
                        </CardImage >
                    </Col >
                )}
            </Row >
            <ModalData modalProps={modal} >
                <ListCatalogDetail dataSelected={dataSelected} />
            </ModalData>
        </>
    )
}

export default ListCatalog
