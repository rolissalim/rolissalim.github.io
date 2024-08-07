import { timeFormat } from '@app/helpers/Time.helper'
import { split } from 'lodash'
import React, { useEffect, useState } from 'react'

interface ITime {
  date: any
  format?: string
}
const Time = (params: ITime) => {
  const [showTime, setShowTime] = useState<any>()

  useEffect(() => {
    let timeDate: any
    try {
      if (params?.date?.indexOf("&") > -1) {
        let splitted = params?.date.split("&");
        timeDate = `${timeFormat(splitted[0], "MMM YYYY")} - ${timeFormat(splitted[1], "MMM YYYY")}`
      } else
        timeDate = timeFormat(params?.date, "MMM YYYY")
      setShowTime(timeDate)
    } catch (error) {

    }

  }, [params.date])

  return (
    <div>
      {showTime}
    </div>
  )
}

export default Time