import CardComponent from '@app/components/Card/CardComponent'
import CustomProgressBar from '@app/components/ProgressBar/CustomProgressBar'
import { skillExperience } from '@app/configs/data/skill-data'
import React from 'react'

function Skills() {
    const data = skillExperience()
    return (
        <>
            <CardComponent className='mb-2 shadow-sm '>

                {data?.map((item: any, index: number) =>
                    <div key={index} className='my-2'>
                        <div>{item?.name}</div>
                        <CustomProgressBar progress={item?.progress} />
                    </div>
                )}
            </CardComponent>

        </>
    )
}

export default Skills
