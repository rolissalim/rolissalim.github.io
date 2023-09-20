import React from 'react'
import CarouselImage from '../Carousel/CarouselImage'

interface IListCatalogDetail {
    dataSelected?: any
}
function ListCatalogDetail({
    dataSelected
}: IListCatalogDetail) {
    console.log("dataSelected", dataSelected);

    return (
        <>
            <CarouselImage images={dataSelected?.images} />
        </>
    )
}

export default ListCatalogDetail
