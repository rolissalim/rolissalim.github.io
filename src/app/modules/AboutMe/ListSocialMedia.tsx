import CardComponent from '@app/components/Card/CardComponent'
import { socialMediaData } from '@app/configs/data/social-media'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IListSocialMedia {
    type?: string
}

function ListSocialMedia({ type = "media-social" }: IListSocialMedia) {
    const [data, setData] = useState<any>()
    useEffect(() => {
        let data = socialMediaData()
        setData(() => {
            return data.filter((item: any) => { return item?.type == type })
        })
    }, [])
    return (
        <>
            {data?.map((item: any, index: number) =>
                <Link to={item?.link} className='nav-link' target="_blank" rel="noopener noreferrer" key={index}>
                    <div className='d-flex justify-content-start' >
                        <div className='me-2' style={{ width: "1.8rem" }}><i className={`${item?.icon} fs-4`}></i></div>
                        <div className='d-flex align-items-center'>
                            {item?.name}
                        </div>
                    </div>
                </Link>
            )
            }
        </>
    )
}

export default ListSocialMedia
