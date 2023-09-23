import { exploreData } from '@app/configs/data/explore-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'
import { useTranslation } from 'react-i18next'

function ExplorePage() {
    const dataExplores = exploreData()
    const { t } = useTranslation()

    return (
        <>
            <div>
                <h6>{t("Explores Data")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={dataExplores} />
            </div >
        </>
    )
}

export default ExplorePage
