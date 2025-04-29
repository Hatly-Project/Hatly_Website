import React from 'react'
import FirstSection from './MainSection'
import Screen from './Screen'
import StatsSection from './StateSection'
import HowWorks from './HowWorks'
import PlatformFeatues from './platformFeatues'
import AccordionTransition from './F&Qs'
import SecondScreen from './SecondScreen'



function Home() {
    return (
        
        <div>
            <FirstSection/>
             {/* <StatsSection /> */}
                 <Screen/>
                 <HowWorks/>
                 <SecondScreen/>
                 <PlatformFeatues/>
                 
            
            
        </div>
    )
}

export default Home
