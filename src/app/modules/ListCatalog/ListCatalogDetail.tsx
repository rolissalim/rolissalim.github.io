import React from 'react'
import CarouselImage from '../Carousel/CarouselImage'
import { Col, Row } from 'react-bootstrap';

interface IListCatalogDetail {
    dataSelected?: any
}
function ListCatalogDetail({
    dataSelected
}: IListCatalogDetail) {
    return (
        <>
            <Row>
                <Col lg={12}><CarouselImage images={dataSelected?.images} /></Col>
                {/* <Col lg={4}><CarouselImage images={dataSelected?.images} /></Col> */}

            </Row>
        </>
    )
}

export default ListCatalogDetail
