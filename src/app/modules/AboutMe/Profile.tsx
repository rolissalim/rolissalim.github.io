import CardComponent from '@app/components/Card/CardComponent'
import { biodata } from '@app/configs/data/biodata'
import React from 'react'

function Profile() {
    const data = biodata()
    return (
        <CardComponent>
            {data?.map((item: any, index: number) =>
                <div key={index}>
                    <div>{item?.key}</div>
                    <div>{item?.value}</div>
                    <hr />
                </div>
            )}
        </CardComponent>
    )
}

export default Profile
