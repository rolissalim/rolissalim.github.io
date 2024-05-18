import React from 'react'

interface ITime {
  date: any
  format?: string
}
const Time = (params: ITime) => {
  return (
    <div>
      {params?.date}
    </div>
  )
}

export default Time