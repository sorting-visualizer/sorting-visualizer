import React from 'react'
import DisplayArea from './display_area'


function Visualize({ size, arr, col }) {

    return (
        <div>
            <DisplayArea arr={arr} col={col} />
        </div>
    )
}

export default Visualize