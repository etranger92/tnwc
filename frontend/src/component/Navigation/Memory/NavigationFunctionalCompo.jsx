/*

import React, { useRef, useState } from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import IconHome from '../../ElementsHTML/Icons/IconHome';
import NavBar from '../NavBar';

interface IStyle {
    transition: string;
    opacity: number;
    height: string;
}

const Navigation: React.FC = () => {
    //References
    // const burger = React.useRef<HTMLDivElement>(null);
    let navMobileDisplay: IStyle = {
        transition: 'all 1s',
        opacity: 1,
        height: '100%',
    };
    //Function
    let handleClick:Function = () => {
return setClick(!click)
    }
    const [click, setClick] = useState<Boolean>(false);
    return (
        <nav className="nav_container">
            <div className="nav_desktop">
                <NavBar />
            </div>
            <div className="nav_mobile">
       
                 <div id="burger" onClick={() => setClick(!click)} className={click ? 'cross' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            
                <div className="menu_mobile" style={click ? navMobileDisplay : {}}>
                    <NavBar />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
*/
