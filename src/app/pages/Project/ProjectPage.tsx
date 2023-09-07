import { projectData } from '@app/configs/data/project-data'
import ListCatalog from '@app/modules/ListCatalog/ListCatalog'
import React from 'react'

const ProjectPage = () => {
    const dataProjects = projectData()
    return (
        <>
            <div>
                <h2>Data Projects</h2>
                <ListCatalog data={dataProjects} />
            </div >
        </>
    )
}

export default ProjectPage
