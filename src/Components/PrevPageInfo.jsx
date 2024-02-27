import React from 'react'
import forwardIcon from '../Assets/rightArrow.svg'
function PrevPageInfo() {
    return (
        <div className='PrevPageInfo text-zinc-500 text-sm ml-2 flex gap-3 mb-8'>
            <p>Home</p><img src={forwardIcon} alt="" /><p> Hosting for all </p><img src={forwardIcon} alt="" /><p> Hosting </p><img src={forwardIcon} alt="" /><p>Hosting6 </p><img src={forwardIcon} alt="" /><p>Hosting5</p>
        </div>
    )
}

export default PrevPageInfo;