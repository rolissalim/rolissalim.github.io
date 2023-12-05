import CardComponent from '@app/components/Card/CardComponent'
import LazyImage from '@app/components/Image/LazyImage'
import { biodata, jobExperience } from '@app/configs/data/biodata'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProfileImage() {
    const [data, setData] = useState<any>()
    const [image, setImage] = useState<string>("")
    const [page, setPage] = useState<string>("")

    useEffect(() => {
        let data = jobExperience()
        setImage(data?.[0]?.value)
        setPage(data?.[1]?.value)
        setData(() => {
            return [...data.slice(2)]
        })
    }, [])

    return (
        <CardComponent className='mb-2 shadow-sm border-0'>
            <div className='container-image-profile mx-auto d-block'>
                <LazyImage src={image} className="fit rounded-circle " />
            </div>
            <div className='text-center'>
                Software Developer
            </div>
            <div className='text-center'>
                <Link to={page}>{page}</Link>
            </div>
            {/* <div className='text-center'>
                nurdinif14@gmail.com
            </div>
            <div className='text-center'>
                nurdin.rolissalim@gmail.com
            </div> */}
            <div className='text-center'>
                {data?.map((item: any, index: number) =>
                    <div key={index}>{item?.key} : {item?.value}</div>
                )
                }
            </div>
        </CardComponent>
    )
}

export default ProfileImage
