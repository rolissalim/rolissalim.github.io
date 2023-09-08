import CardComponent from '@app/components/Card/CardComponent'
import { socialMediaData } from '@app/configs/data/social-media'
import React from 'react'

function SocialMedia() {
    const data = socialMediaData()
    return (
        <CardComponent>
            {data?.map((item: any, index: number) =>
                <div key={index} className='d-flex justify-content-between'>
                    <div>
                        {item?.name}
                    </div>
                    <div>

                    </div>

                </div>
            )}
        </CardComponent>
    )
}

export default SocialMedia
