import React from 'react'
import CarouselImage from '../Carousel/CarouselImage'
import { Col, Row } from 'react-bootstrap';
import Description from '@app/components/Description/Description';
import Status from '@app/components/Status/Status';
import Library from '@app/components/Info/Library';
import Time from '@app/components/Time/Time';
import LinkAccess from '@app/components/Info/LinkAccess';

interface IListCatalogDetail {
    dataSelected?: any
}
function ListCatalogDetail({
    dataSelected
}: IListCatalogDetail) {
    return (
        <>
            <Row>
                <Col lg={8}><CarouselImage images={dataSelected?.images} /></Col>
                <Col lg={4}>
                    <div className='d-flex justify-content-between mb-3'>
                        <Status status={dataSelected?.status} />
                        <Time date={dataSelected?.period} />
                    </div>
                    <Library text={dataSelected?.library} />
                    <div className="d-flex justify-content-between mb-3">
                        <LinkAccess link={dataSelected?.source_code} title='source code' />
                        <LinkAccess link={dataSelected?.link} title='view web' />
                    </div>
                    <Description data={dataSelected?.description} />

                </Col>

            </Row>
        </>
    )
}

export default ListCatalogDetail
