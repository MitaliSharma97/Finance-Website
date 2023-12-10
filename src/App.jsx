import React from 'react'
import Navbar from '../components/Navbar'
import OfferFinance from '../components/OfferFinance'
import GetStarted from '../components/GetStarted'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Payback from '../components/Payback'
import Pricing from '../components/Pricing'
import Block from '../components/Block'
import Resources from '../components/Resources'
import Footer from '../components/Footer'

const App = () => {
    return (
        <div>
            <Navbar/>
            <OfferFinance/>
            <GetStarted/>
            <HowItWorks/>
            <Features/>
            <Payback/>
            <Pricing/>
            <Block/>
            <Resources/>
            <Footer/>
        </div>
    )
}

export default App
