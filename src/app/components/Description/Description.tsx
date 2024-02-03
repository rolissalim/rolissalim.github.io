import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface IDescription{
    data:string
    height?:string
}

const Description = ({data,height="12rem"}:IDescription) => {

  return (
    <div style={{height:height}}>
      <PerfectScrollbar >
            <div>
                {data}
            </div>
      </PerfectScrollbar>
    </div>
  )
}

export default Description
