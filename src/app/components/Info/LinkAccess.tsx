import React from 'react'
import { Link } from 'react-router-dom'

interface ILinkAccess {
  link: string
  title:string
}

const LinkAccess = (params: ILinkAccess) => {
  return (
    <>
      {params?.link ?
        <>
          <Link to={params?.link} target='_blank'>{params?.title}</Link>
        </>
        : null}
    </>
  )
}

export default LinkAccess
