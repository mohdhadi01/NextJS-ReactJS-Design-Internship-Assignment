import React from 'react'
import SimilarStore from "../SimilarStore"
function RelatedItemCard() {
    return (
        <div className="productContainer flex justify-between w-full gap-20 mt-12 mb-20">
            {SimilarStore.map((product, index) => (
                <div key={index} className="productCard ">
                    <div className="singleProduct flex flex-col ">
                        <div className="img w-full flex justify-center">
                            <img className='Img w-36' src={product.image} alt="" />
                        </div>
                        <div className="prodDesc mt-8">
                            <div className="discounts flex gap-3 text-sm text-cyan-700 mt-4 mb-3">
                                <p className='offer bg-gray-100 pl-2 pr-4 pt-1 pb-1 rounded-md'>{product.discount}</p>
                                <p className='offer bg-gray-100 pl-2 pr-4 pt-1 pb-1  rounded-md'>Limited time</p>
                            </div>
                            <p className='font-bold text-gray-500 text-center'>{product.title}</p>
                            <p className='text-gray-500 mt-2'>{product.description}</p>
                            <div className="PriceDiv flex gap-4 items-baseline mt-2">
                                <p className='text-lg text-gray-500'>{product.offerPrice}</p>
                                <p className='text-sm text-gray-400'>{product.originalPrize}</p>
                                <p className='text-sm text-red-500'>({product.discount})</p>
                            </div>
                        </div>
                    </div>
                    <button className='ViewBtn w-full text-white bg-blue-500 h-12 rounded-xl mt-3'>View</button>
                </div>
            ))}
        </div>
    )
}

export default RelatedItemCard