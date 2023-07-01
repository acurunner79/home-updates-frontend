import React, { useState} from "react";
import RightNav from './RightNav'
import '../styles/hamburger.css'



const Hamburger = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const isOpen = () => {

        return(
            <>
                <div className="hamburger open" open={open} onClick={handleClick}>
                    <div id="line-one"></div>
                    <div id="line-two"></div>
                    <div id="line-three"></div>
                </div>
                <div className='right-nav open'>
                    <RightNav onClick={handleClick}/>
                </div>
            </>
        )
    }

    const isClosed = () => {

        return (
            <>
                <div className="hamburger open" open={open} onClick={handleClick}>
                    <div id="line-one"></div>
                    <div id="line-two"></div>
                    <div id="line-three"></div>
                </div>
                <div className='right-nav'>
                    <RightNav onClick={handleClick}/>
                </div>
            </>
        )
    }

    return (
        open ? isOpen() : isClosed()
    )
}

export default Hamburger