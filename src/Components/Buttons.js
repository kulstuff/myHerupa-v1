import React, { Component } from 'react';

// Contact Us Button
export class ContactUsButtton extends Component {
    render(){
        return(
            <a href="http://bit.ly/myherupawhatsapp" target="_blank">
                <i className="fab fa-whatsapp display4 contact-us" title="Contact Us"></i>
            </a>
        )
    }
}


// Landing Button Wrap
export class LandingButtons extends Component {
    render() {
        return (
            <div className='landing__btn-wrap'>
                <a href="pages/first-year.html"
                    className="col col-md-6 col-sm-12 col-lg-6 btn__landing display4" >
                    <div className="btn__landing--first-year--text">First Year</div>
                </a>
                <a href="pages/second-year.html"
                    className="col col-md-6 col-sm-12 col-lg-6 btn__landing display4">
                    <div className="btn__landing--second-year--text">Second Year</div>
                </a>
            </div>    
        )
    }
}

// Functionaity (More Stuff) Buttons
export class FunctionaityButtons extends Component {
    render(){
        return(
            <div className="more-stuff__btn-wrap">
                <a
                    href="pages/gpa.html"
                    className="col col-xs-12 col-sm-12 col-lg-12 col-md-12 btn__more"
                    >
                    <h6 className="btn__more--title display5">GPA Calculator</h6>
                    <p className="btn__more--data hide-phone display7">
                        Just enter your grades, we give you your GPA. Simple.
                    </p>
                </a>
                <a
                    href="pages/time-table.html"
                    className="col col-xs-12 col-sm-12 col-lg-12 col-md-12 btn__more"
                    >
                    <h6 className="btn__more--title display5">myTimeTable</h6>
                    <p className="btn__more--data hide-phone display7">
                        The most intuitive and amazing time-table for you.
                    </p>
                </a>
                <a
                    href="https://drive.google.com/open?id=1AmoNFF5D4j8Q-QH9kxSk3Jur2rYB725h"
                    target="_blank"
                    className="col col-xs-12 col-sm-4 col-lg-4 col-md-4 btn__more"
                    >
                    <h6 className="btn__more--title display5">Academic Calendar</h6>
                </a>
                <a
                    href="pages/wifi.html"
                    className="col col-xs-12 col-sm-4 col-lg-4 col-md-4 btn__more"
                    >
                    <h6 className="btn__more--title display5">WiFi & passwords</h6>
                </a>
                <a
                    href="https://drive.google.com/open?id=1CCXW_VBcdcsPjpg51TfVE1e3wFGHiOf4"
                    target="_blank"
                    className="col col-xs-12 col-sm-4 col-lg-4 col-md-4  btn__more"
                    >
                    <h6 className="btn__more--title display5">Holiday Calendar</h6>
                    </a>
                <a
                    href="pages/societies.html"
                    className="col col-xs-12 col-sm-12 col-lg-6 col-md-6  btn__more"
                    >
                    <h6 className="btn__more--title display5">Societies & Fests</h6>
                    <p className="btn__more--data hide-phone display7">
                        All societies from Thapar Institute Of Engineering and Technology
                        right at one place.
                    </p>
                </a>
                <a
                    href="pages/food.html"
                    className="col col-xs-12 col-sm-12 col-lg-6 col-md-6  btn__more"
                    >
                    <h6 className="btn__more--title display5">Food & Restros</h6>
                    <p className="btn__more--data hide-phone display7">
                        From getting tipsy to getting sober, grabbing a bite to having a
                        meal. <br />We got you all covered.
                    </p>
                </a>
            </div>
        )
    }
}