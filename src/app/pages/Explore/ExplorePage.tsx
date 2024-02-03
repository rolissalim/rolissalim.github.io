import TitlePage from '@app/components/Title/TitlePage'
import { exploreData } from '@app/configs/data/explore-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'

function ExplorePage() {
    const dataExplores = exploreData()

    return (
        <>
            <div>
                <TitlePage title='Explores Data'/>
                <ListCatalog data={dataExplores} />
            </div >
        </>
    )
}

export default ExplorePage
