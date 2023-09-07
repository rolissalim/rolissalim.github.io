import CardComponent from '@app/components/Card/CardComponent'
import React from 'react'

function ProfileImage() {
    return (
        <CardComponent className='mb-2'>
            <div className='text-center'>
                Full Stack Developer
            </div>
            <div className='text-center'>
                <div>
                    Frontend : React JS, Webpack, PHP,
                </div>
                <div>
                    Backend : node JS, Express JS
                </div>
                <div>
                    Bandung, West Java
                </div>
            </div>
        </CardComponent>
    )
}

export default ProfileImage
