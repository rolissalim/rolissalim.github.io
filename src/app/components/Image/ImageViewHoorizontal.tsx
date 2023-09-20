import React from "react";
import { LazyImage } from "@app/components";

export default function ImageViewHorizontal({
    data,
    handleClick,
    height = "5rem",
    width = "8rem"
}: IImageViewHorizontal) {

    const handleSelected = (item: any) => {
        if (handleClick) {
            handleClick(item)
        }
    }
    return (
        <>
            <div className="me-2 d-flex justify-content-start my-2">
                {data?.map((item: any, index: number) =>
                    <div key={index} className="me-1 pointer" style={{ height: height, width: width }} onClick={() => handleSelected(item)} >
                        <LazyImage src={item || "-"} className="fit" />
                    </div>
                )}
            </div>
        </>
    )
}
interface IImageViewHorizontal {
    data: any
    handleClick?: any
    width?: any
    height?: any
}