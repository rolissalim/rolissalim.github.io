import CardComponent from '@app/components/Card/CardComponent'
import { socialMediaData } from '@app/configs/data/social-media'
import React from 'react'
import { Link } from 'react-router-dom'

function ListSocialMedia() {
    const data = socialMediaData()
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
