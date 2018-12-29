import React, { Component } from 'react';
import { LandingButtons } from '../Components/Buttons.js'

class Landing extends Component {
    render(){
        return(
            <section className="landing scr__panel">
                {/* Heading */}
                <h1 className="display1">myHerupa</h1>
                <h2 className="display5 landing__subtitle">For all your academic needs.</h2>
                <LandingButtons/>
                {/* Deprecated Functionality of Scrollify */}
                <a onClick="scrollifyClick()">
                    <img src="img/icons/navHovD.png" className="landing__arrow" alt="" />
                </a>
            </section>
        )
    }
}

export default Landing;