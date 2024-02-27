import React from 'react'
import Store from "../Store";
import downArrow from '../Assets/downArrow.svg'
import blueTickIcon from '../Assets/blueTick.svg'
import fullStarIcon from '../Assets/star.svg';
import halfStarIcon from '../Assets/Half star.svg';
import emptyStarIcon from '../Assets/empty star.svg';


function StoreItemCard() {
    function generateStarIcons(star) {
        const fullStars = Math.floor(star);
        const hasHalfStar = star - fullStars >= 0.5;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<img key={`full_${i}`} src={fullStarIcon} alt="full star" />);
        }

        if (hasHalfStar) {
            stars.push(<img key="half" src={halfStarIcon} alt="half star" />);
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img key={`empty_${i}`} src={emptyStarIcon} alt="empty star" />);
        }

        return stars;
    }
    return (

        <div className="card">
            {Store.map((product, index) => (<>
                {product.trendingTitle ? (<p className='trendingIconDiv bg-orange-500 flex w-32 rounded-r-lg text-white justify-center p-1.5 mb-5 gap-2'><img src={product.trendingtitleIcon} alt="" />{product.trendingTitle}</p>) : null}
                <div key={index} className="card flex mb-3 gap-7 mb-14">
                    <div className="imgDiv w-1/4 ">
                        <p className='index border-gray-300 flex justify-center items-center border w-10 h-10 rounded-full text-lg text-gray-600'>{product.index}</p>
                        <div className="productImg flex flex-col items-center">
                            <img src={product.image} className="card-img-top w-36" alt={product.title} />
                            <p className='ImgName text-gray-500 mt-3 text-sm'>{product.imageName}</p>
                        </div>
                    </div>
                    <div className="card-body w-1/2">
                        <h5 className="card-title font-bold text-slate-600">{product.title}</h5>
                        <p className="card-text  text-gray-500">{product.description}</p>
                        {product.discount ? (<p className='text-sm text-blue-800 bg-slate-400 w-16 h-5 mt-2 rounded-sm text-center bg-opacity-15'>{product.discount}</p>) : null}
                        <p className=' font-bold mt-1'>Main highlights</p>
                        <p className="card-text  text-gray-500 mt-2 ml-4">{product.recieveInfo}</p>
                        {product.recieverPoints ? (<div className="recieverRatingDiv ml-5 pt-1 pb-2 bg-pink-100 bg-opacity-65 w-full rounded-xl">
                            {product.recieverPoints && product.recieverPoints.map((point, index) => (
                                <p className="card-text  text-gray-500 mt-2 ml-5" key={index}>{point}</p>
                            ))}</div>) : null}
                        {product.recieverRating ? (<p className=' mt-5 text-slate-700'>Why we love it</p>) : null}
                        {product.recieverRating ? (product.recieverRating.map((point, index) => (<>
                            <p className="card-text  text-gray-500 mt-2 ml-5 flex gap-2" key={index}><img src={blueTickIcon} alt="" /> {point}</p>
                        </>))) : null}
                        <p className='mt-4 text-sky-500 flex gap-1 cursor-pointer'>Show more <img src={downArrow} alt="" /></p>
                    </div>
                    <div className="RatingCard w-1/4 flex flex-col justify-between items-center">
                        <div className="ratingContainer flex flex-col justify-center bg-sky-100 bg-opacity-45 h-28 w-1/2 rounded-b-xl">
                            <p className="card-text text-3xl text-center text-gray-600">{product.rating}</p>
                            <p className="card-text text-center mt-2 text-sm text-gray-500">{product.comment}</p>
                            <p className='StarRaing flex gap-0.5 mt-2 justify-center'>{generateStarIcons(product.star)}</p>
                        </div>
                        <button className='ViewBtn w-56 text-white bg-blue-500 h-12 rounded-xl '>View</button>


                    </div>

                </div>
            </>))}
        </div>
    )
}

export default StoreItemCard
