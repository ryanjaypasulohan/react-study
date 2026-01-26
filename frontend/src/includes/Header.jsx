import React from 'react'
import MainNavigation from '../components/MainNavigation'

const Header = () => {
    return (
        <>
            <div className="header_con">
                <div className="wrapper">
                    <div className="header pl-3 py-3">
                    <div className="flex justify-between items-center p-2">
                        <div className="logo">
                            <h2><span className='initial_name'>Tek</span> <span>Tekenologia</span></h2>
                        </div>
                        <div className="pagenav">
                            <MainNavigation />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header