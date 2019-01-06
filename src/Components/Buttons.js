// A Button Supply Shop which operates on props
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Use NavLink for active class to that button

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
// Formation Pending
export const LandingButtons = () => {
    return (
        <div className='landing__btn-wrap'>
            <Link to="/firstYear"
                className="col col-md-6 col-sm-12 col-lg-6 btn__landing display4" >
                <div className="btn__landing--first-year--text">First Year</div>
            </Link>
            <Link to="/secondYear"
                className="col col-md-6 col-sm-12 col-lg-6 btn__landing display4">
                <div className="btn__landing--second-year--text">Second Year</div>
            </Link>
            <Link to="/thirdYear"
                className="col col-md-12 col-sm-12 col-lg-12 btn__landing display4">
                <div className="btn__landing--second-year--text">Third Year</div>
            </Link>
        </div>    
    )
}

// Functionaity (More Stuff) Buttons
// Formation + UI Pending
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

export class FirstYearCourseButtons extends Component {
    render() {
        const { courseLinks, classesNames, colors, courseNames, argmts } = this.props;  
        return(
            // Wrapper
            <div className="year__btn-wrap" style={{marginTop: 0}}>
                {   
                    courseNames.map( (courseName, index) => {
                        var color = colors[index]
                        var className = classesNames[index]
                        className += ' btn__stream--' + color;
                        {/* Intermediatery Streams */}
                        var argmt = 0;
                        argmts.names.map( name => {
                            if (courseName == name) argmt = 1;
                        });
                        if (argmt) var link = '/stream/' + courseName; // Its actulaay Stream Name here
                        else var link = '/course/' + courseName;
                        return(
                            <Link to = { link } className = { className } > {courseName} </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export class SecondYearCourseButtons extends Component {
    render() {
        const { courseLinks, classesNames, colors, courseNames } = this.props;  
        return(
            // Wrapper
            <div className="year__btn-wrap" style={{marginTop: 0}}>
                {   
                    courseNames.map( (courseName, index) => {
                        var color = colors[index]
                        var className = classesNames[index]
                        className += ' btn__stream--' + color;
                        {/* No Intermediatery Streams */}
                        var link = '/stream/' + courseName;
                        return(
                            <Link to = { link } className = { className } > {courseName} </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export class CourseButtons extends Component {
    render () {
        const { buttonClasses, buttonLinks, buttonNames } = this.props;  
        return(
            <div className='stream__btn-wrap'>
                {   
                    buttonNames.map( (button, index) => {
                        var buttonClass = buttonClasses[index];
                        var buttonLink = buttonLinks[index];
                        return(
                            <a href = { buttonLink } target="_blank" className = { buttonClass } > { button } </a>
                        )
                    })
                }
            </div>
        )
    }
}

export class StreamButtons extends Component {
    render () {
        const { buttonClasses, orderButtons } = this.props;
        return (
            <div className = 'semester__btn-wrap'>
                {
                    orderButtons.map( ( button, index ) => {
                        console.log('ORDER OF THE US: ', this.props)
                        var link = '/course/' + button
                        return (
                            <Link to = { link } className = { buttonClasses[index] } > {button} </Link>
                        )
                    })
                }
            </div>
        )
    }
}