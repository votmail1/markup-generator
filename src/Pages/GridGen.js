import React from 'react'
import Header from "../componets/Header/Header"
import GridSideBar from "../componets/GridSideBar/GridSideBar"
import GridGenMain from "../componets/GridGenMain/GridGenMain"
import Footer from "../componets/Footer/Footer"

const FlexGen = () => {
    return (
        <>
            <Header/>
            <div className='cont w-auto m-0 p-0'>
                <GridSideBar/>
                <GridGenMain/>
            </div>
            <Footer/>
        </>
    )
}

export default FlexGen
