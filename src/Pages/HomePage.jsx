import React from 'react'
import NavBar from '../Components/NavBar'
import './HomePage.css'
import Footer from '../Components/Footer'
import TimeSection from '../Components/TimeSection'
import MidOptionLine from '../Components/MidOptionLine'
import SignUpContainer from '../Components/SignUpContainer'
import PrevPageInfo from '../Components/PrevPageInfo'
import StoreItemCard from '../Components/StoreItemCard'
import RelatedItemCard from '../Components/RelatedItemCard'
function HomePage() {
    return (
        <div className='MainScreen'>
            <NavBar />
            <main>
                <h1 className='WebIntro'>Best Website builders in the US</h1>
                <TimeSection />
                <MidOptionLine />
                <PrevPageInfo />
                <StoreItemCard />
                <p className='RelatedComp text-slate-700 text-3xl'> Related deals you might like for</p>
                <RelatedItemCard />
                <SignUpContainer />
            </main>


            <Footer />
        </div>
    )
}

export default HomePage