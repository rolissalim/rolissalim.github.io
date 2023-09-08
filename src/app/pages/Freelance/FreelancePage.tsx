import { freelanceData } from '@app/configs/data/freelance-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'

const FreelancePage = () => {
    const data = freelanceData()
    return (
        <>
            <div>
                <h2>Data Freelances</h2>
                <hr className='text-muted' />
                <ListCatalog data={data} />
            </div >
        </>
    )
}

export default FreelancePage
