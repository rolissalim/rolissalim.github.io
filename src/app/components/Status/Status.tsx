import { statusConfig } from '@app/configs/status.config'
import { get } from 'lodash'
import React from 'react'
import { Badge } from 'react-bootstrap'

interface IStatus {
    status: string
}

const Status = (params:IStatus) => {
    return (
        <Badge bg={get(statusConfig(), params?.status) || "primary"}>{params?.status}</Badge>

    )
}

export default Status