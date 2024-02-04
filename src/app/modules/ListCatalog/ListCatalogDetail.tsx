import React from 'react'
import CarouselImage from '../Carousel/CarouselImage'
import { Col, Row } from 'react-bootstrap';
import Description from '@app/components/Description/Description';

interface IListCatalogDetail {
    dataSelected?: any
}
function ListCatalogDetail({
    dataSelected
}: IListCatalogDetail) {
    console.log("dataSelected",dataSelected);
    
    return (
        <>
            <Row>
                <Col lg={8}><CarouselImage images={dataSelected?.images} /></Col>
                <Col lg={4}>
                    <Description data={dataSelected?.description}/>
                </Col>

            </Row>
        </>
    )
}

export default ListCatalogDetail
