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
            <div className='mb-1'>
                <h6 className="fw-bold">{t("Latest Projects")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={dataProjects} />
            </div>
            <div className='mb-1'>
                <h6 className="fw-bold">{t("Latest Freelances")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={dataFreelances} />
            </div>
            <div className='mb-1'>
                <h6 className="fw-bold">{t("Latest Explores")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={dataExplores} />
            </div>
        </>
    )
}

export default HomePage
