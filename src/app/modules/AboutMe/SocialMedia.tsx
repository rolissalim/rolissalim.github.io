import CardComponent from '@app/components/Card/CardComponent'
import { socialMediaData } from '@app/configs/data/social-media'
import React from 'react'

function SocialMedia() {
    const data = socialMediaData()
    return (
        <CardComponent>
            {data?.map((item: any, index: number) =>
                <div key={index} className='mb-2'>
                    <h6>
                        {item?.name}
                    </h6>
                    <div className='ms-3 text-muted fs-6'>
                        {item?.link}
                    </div>

                </div>
            )}
        </CardComponent>
    )
}

export default SocialMedia
