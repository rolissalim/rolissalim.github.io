import React from 'react'
import { useTranslation } from 'react-i18next'

interface ITitlePage{
    title:string
}

const TitlePage = ({title}:ITitlePage) => {
    const { t } = useTranslation()
  return (
    <>    
        <h6 className="fw-bold">{t(title)}</h6>
        <hr className='text-muted' />
    </>

  )
}

export default TitlePage
