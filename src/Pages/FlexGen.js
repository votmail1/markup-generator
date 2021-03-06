import React from 'react'
import Header from "../componets/Header/Header"
import FlexSideBar from "../componets/FlexSideBar/FlexSideBar"
import FlexGenMain from "../componets/FlexGenMain/FlexGenMain"
import Footer from "../componets/Footer/Footer"

const FlexGen = () => {
    return (
        <>
            <Header/>
            <div className='cont w-auto m-0 p-0'>
                <FlexSideBar/>
                <FlexGenMain/>
            </div>
            <Footer/>
        </>
    )
}

export default FlexGen
