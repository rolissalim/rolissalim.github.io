import { exploreData } from '@app/configs/data/explore-data'
import { freelanceData } from '@app/configs/data/freelance-data'
import { projectData } from '@app/configs/data/project-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function HomePage() {
    const [dataProjects, setDataProjects] = useState<any>()
    const [dataExplores, setDataExplores] = useState<any>()
    const [dataFreelances, setDataFreelances] = useState<any>()
    const { t } = useTranslation()

    useEffect(() => {
        setDataProjects(() => {
            return projectData().filter((item: any) => { return item?.headline })
        })
        setDataExplores(() => {
            return exploreData().filter((item: any) => { return item?.headline })
        })
        setDataFreelances(() => {
            return freelanceData().filter((item: any) => { return item?.headline })
        })
    }, [])

    return (
        <>
            <div>
                <h2>{t("New Projects")}</h2>
                <ListCatalog data={dataProjects} />
            </div>
            <div>
                <h2>{t("New Freelances")}</h2>
                <ListCatalog data={dataFreelances} />
            </div>
            <div>
                <h2>{t("New Explores")}</h2>
                <ListCatalog data={dataExplores} />
            </div>
        </>
    )
}

export default HomePage
