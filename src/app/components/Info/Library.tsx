import React from 'react'

interface ILibrary {
    text: string
}
const Library = (params: ILibrary) => {
    return (
        <>
            <div className='fw-semibold'>Library </div>
            <div className='mb-3'>{params?.text}</div>
        </>
    )
}

export default Library