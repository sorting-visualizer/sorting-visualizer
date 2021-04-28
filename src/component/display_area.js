import React from 'react'
import Bar from './bar'
export default function DisplayArea({arr,col})
{
    return(
        <div className="displayGraph">
            <center>
                {arr.map((ele, id) => (
                    <Bar ele={ele} color={col[id]} length={arr.length} id={id} />
                ))}
            </center>
        </div>

    )
}
