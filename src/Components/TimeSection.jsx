import React from 'react'
import TickImg from '../Assets/TickImg.svg'
import InfoImg from '../Assets/InfoImg.svg'
import './TimeSection.css'
function TimeSection() {
    return (
        <div>
            <hr className='mb-3 border' />
            <div className="timeSection">
                <img className='midTextIcon' src={TickImg} alt="" /><p className='midText'> Last Updated - February 22, 2020</p>
                <img className='midTextIcon' src={InfoImg} alt="" /> <p className='midText'> Advertising Disclosure</p>
                <select className='topSelect' name="filter" id="">
                    <option value="Top Relevant">Top Relevant</option>
                    <option value="Recommended">Recommended</option>
                    <option value="Most Rated">Most Rated</option>
                </select>
            </div>
            <hr className='mt-3 border' />
        </div>
    )
}

export default TimeSection