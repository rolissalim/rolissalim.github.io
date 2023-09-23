import { freelanceData } from '@app/configs/data/freelance-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FreelancePage = () => {
    const data = freelanceData()
    const { t } = useTranslation()
    return (
        <>
            <div>
                <h6>{t("Freelances Data")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={data} />
            </div >
        </>
    )
}

export default FreelancePage
