import { ImageViewHorizontal, LazyImage } from "@app/components";
import React, { useEffect, useState } from "react";

export default function CarouselImage({
    height = "30rem",
    images,
    heightHorinzotal = "5rem",
    widthHorinzotal = "8rem"
}: ICarouselManual) {
    const [image, setImage] = useState<any>()
    const [dataImages, setDataImages] = useState<any>([])
    useEffect(() => {
        let data: any
        if (images && images.length > 0) {
            data = images?.[0] || "-"
        }
        setDataImages(images)
        setImage(data)
    }, [images])

    return (
        <>
            <div>
                <div className="" style={{ height: height }}>
                    <LazyImage src={image || "-"} className="object-contain card-img-top" />
                </div>
            </div>
            <ImageViewHorizontal
                data={dataImages}
                handleClick={setImage}
                height={heightHorinzotal}
                width={widthHorinzotal} />
        </>
    )
}
interface ICarouselManual {
    height?: string
    heightHorinzotal?: string
    widthHorinzotal?: string
    images?: any[any]
}   