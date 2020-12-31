import React, { Component } from 'react';


class Header extends Component{
    render(){
        return(
            
                <header>
                    <div className="header-main">
                        <div className="logo">
                            <h1>Cloud Bed + Breakfast</h1>
                        </div>
                        <nav className="navBar">
                            <ul className="mainNav">
                                <li>Places to Stay</li>
                                <li>Explore</li>
                                <li>Cloud Experiences</li>
                            </ul>
                        </nav>
                        <nav className="subNavBar">
                            <ul className="subNav">
                                <li>Become a Host</li>
                                <li>Contact Us</li>
                                <li>FAQs</li>
                            </ul>
                        </nav>
                    </div>
                </header>
        )
    }
}

export default Header;