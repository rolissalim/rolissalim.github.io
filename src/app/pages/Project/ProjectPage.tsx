import { projectData } from '@app/configs/data/project-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectPage = () => {
    const dataProjects = projectData()
    const { t } = useTranslation()
    return (
        <>
            <div>
                <h6>{t("Projects Data")}</h6>
                <hr className='text-muted' />
                <ListCatalog data={dataProjects} />
            </div >
        </>
    )
}

export default ProjectPage
