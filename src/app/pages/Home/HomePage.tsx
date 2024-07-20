import TitlePage from '@app/components/Title/TitlePage'
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
            return projectData().filter((item: any) => { return item?.headline=="true" })
        })
        setDataExplores(() => {
            return exploreData().filter((item: any) => { return item?.headline=="true" })
        })
        setDataFreelances(() => {
            return freelanceData().filter((item: any) => { return item?.headline=="true" })
        })
    }, [])


    return (
        <>
            <div className='mb-1'>
                <TitlePage title='Latest Projects'/>
                <ListCatalog data={dataProjects} className='animate__animated animate__slideInLeft' />
            </div>
            <div className='mb-1'>
                <TitlePage title='Latest Freelances'/>
                <ListCatalog data={dataFreelances}  className='animate__animated animate__slideInRight'  />
            </div>
            <div className='mb-1'>
                <TitlePage title='Latest Explores'/>
                <ListCatalog data={dataExplores}   className='animate__animated animate__slideInLeft' />
            </div>
        </>
    )
}

export default HomePage
