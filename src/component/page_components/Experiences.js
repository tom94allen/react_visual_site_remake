import React, { Component } from 'react';

function Experiences(){
    return(
        <div id="experiences">
            <div className="experiences-flex">
                <div className="grid">
                    <div className="grid-item3">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience3.jpg')} />
                        </div>  
                    </div>
                    <div className="grid-item4">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience4.jpg')} />
                        </div>
                    </div>
                    <div className="grid-item2">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience2.jpg')} />
                        </div>
                    </div>
                    <div className="grid-item1">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience6.jpg')} />
                        </div>
                    </div>
                    <div className="grid-item5">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience5.jpg')} />
                        </div>
                    </div>
                    <div className="grid-item6">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience1.jpg')} />
                        </div>
                    </div>
                    <div className="grid-item7">
                        <div className="experience-card">
                            <img alt="grid photo" src={require('../img/experience7.jpg')} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience-heading">
                <h1 className="light-text">We have so many amazing experiences at your disposal</h1>
                <p className="small-text light-text">Meet so many similar people via our virtual exhibitions with similar minds</p>
            </div>
        </div>
    )
}

export default Experiences;