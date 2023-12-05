import React from 'react'
import { ProgressBar } from 'react-bootstrap'

interface ICustomProgressBar {
    progress: number,
    variant?: string
}

function CustomProgressBar({
    progress,
    variant = "primary"
}: ICustomProgressBar) {
    return (
        <div>
            <ProgressBar now={progress} variant={variant} />
        </div>
    )
}

export default CustomProgressBar
