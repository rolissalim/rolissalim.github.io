import { exploreData } from '@app/configs/data/explore-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'

function ExplorePage() {
    const dataExplores = exploreData()
    return (
        <>
            <div>
                <h2>Data Explores</h2>
                <ListCatalog data={dataExplores} />
            </div >
        </>
    )
}

export default ExplorePage
