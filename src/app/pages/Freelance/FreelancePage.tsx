import TitlePage from '@app/components/Title/TitlePage'
import { freelanceData } from '@app/configs/data/freelance-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'

const FreelancePage = () => {
    const data = freelanceData()
    return (
        <>
            <div>
                <TitlePage title='Freelances Data'/>
                <ListCatalog data={data} />
            </div >
        </>
    )
}

export default FreelancePage
