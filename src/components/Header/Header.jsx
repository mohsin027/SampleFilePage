import React from 'react'
import './Header.css'
import { IoIosArrowDown } from "react-icons/io";
import mailImage from '../../assets/mail.svg'


export const Header = () => {
  return (
    <header >
        <div className="header container d-flex justify-content-between align-items-center">
            <h3 className="logo fw-bold pt-2 ">LOGO</h3>
            <div className="menu">
                <div className='menu-items'>
                    <div className='circle'>

                    <img src={mailImage} alt="image" />
                    </div>
                    <span>Bulk</span>
                </div>
                <div className='menu-items'>
                    <div className='circle'>

                    <img src="src\assets\Monitor.svg" alt="image" />
                    </div>
                    <span>Monitor</span>
                </div>
                <div className='menu-items'>
                    <div className='circle'>

                    <img src="src\assets\Vector.svg" alt="image" />
                    </div>
                    <span>Single</span>
                </div>
                <div className='menu-items'>
                    <div className='circle'>

                    <img src="src\assets\Tray.svg" alt="image" />
                    </div>
                    <span>Deliverability</span>
                </div>
                <div className='menu-items'>
                    <div className='circle'>

                    <img src="src\assets\code.svg" alt="image" />
                    </div>
                    <span>API</span>
                </div>
                <div className='menu-items'>
                    <div className='rectangle'>

                    </div>
                    <span>BUY CREDITS</span>
                </div>
                <div className='menu-items'>
                    
                    <span>M</span>
                </div>
                <div className='menu-items'>
                    
                    <span><IoIosArrowDown/></span>
                </div>
            </div>
        </div>
    </header>
  )
}
