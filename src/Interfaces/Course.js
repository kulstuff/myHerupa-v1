import React, { Component } from 'react'
import { CourseFormation } from '../Layout/Formation';
import { connect } from 'react-redux';
import { ContactUsButtton } from '../Components/Buttons';

class Course extends Component {
    state = {
        courseName: "",
        courseNameParts: [],
        coursePun: "",
        courseColor: "",
        courseColorClass: "",
        courseLinks: [],
        courseButtonNames: []
    }
    componentDidMount () {
        this.setupCourse()
    }
    componentDidUpdate () {
        this.render();
    }
    
    setupCourse = () => {
        // Year 1
        var courseName = this.props.match.params.course_name
        console.log("HERETHIS: ", courseName);
        for (var iteration in this.props.res.one.semester.one.courses.poolB) {
            // console.log('Test: ', this.state);
            // console.log(this.props.res.one.semester.one.courses.poolB[iteration]);
            if ( courseName == this.props.res.one.semester.one.courses.poolB[iteration].name ) {
                // console.log('Here');
                var buttonNames = ['Course Site', 'Syllabus', 'Books', 'Notes & Slides', 'Previous Year Papers'];
                if ( this.props.res.one.semester.one.courses.poolB[iteration].isTut ) {
                    buttonNames.splice(4, 0, 'Tutorials', 'Tutorial Solutions')
                }
                if ( this.props.res.one.semester.one.courses.poolB[iteration].isLab ) {
                    buttonNames.splice(4, 0, 'Lab')
                }
                this.setState({
                    courseName: courseName,
                    courseNameParts: this.props.res.one.semester.one.courses.poolB[iteration].nameParts,
                    coursePun: this.props.res.one.semester.one.courses.poolB[iteration].pun,
                    courseColor: this.props.res.one.semester.one.courses.poolB[iteration].colors,
                    courseColorClass: 'stream__color-' + this.props.res.one.semester.one.courses.poolB[iteration].colors[1].secondary,
                    courseLinks: this.props.res.one.semester.one.courses.poolB[iteration].links,
                    courseButtonNames: buttonNames
                })
            }
        }
        for (var iteration in this.props.res.one.semester.one.courses.poolA) {
            if ( courseName == this.props.res.one.semester.one.courses.poolA[iteration].name ) {
                var buttonNames = ['Course Site', 'Syllabus', 'Books', 'Notes & Slides', 'Previous Year Papers'];
                if ( this.props.res.one.semester.one.courses.poolA[iteration].isTut ) {
                    buttonNames.splice(4, 0, 'Tutorials', 'Tutorial Solutions')
                    // if ( this.props.res.one.semester.one.courses.poolA[iteration].isLab ) {
                    //     buttonNames.splice(6, 0, 'Lab')
                    // }
                }
                if ( this.props.res.one.semester.one.courses.poolA[iteration].isLab ) {
                    buttonNames.splice(4, 0, 'Lab')
                }
                
                this.setState({
                    courseName: courseName,
                    courseNameParts: this.props.res.one.semester.one.courses.poolA[iteration].nameParts,
                    coursePun: this.props.res.one.semester.one.courses.poolA[iteration].pun,
                    courseColor: this.props.res.one.semester.one.courses.poolA[iteration].colors,
                    courseColorClass: 'stream__color-' + this.props.res.one.semester.one.courses.poolA[iteration].colors[1].secondary,
                    courseLinks: this.props.res.one.semester.one.courses.poolA[iteration].links,
                    courseButtonNames: buttonNames
                });
            }
        }
        // Year 2
        // Year 
    }
    render() {
        return(
            <div className = 'stream'>
                    <ContactUsButtton/>
                    {/* <a href="../../first-year.html"><img src="../../../img/back.png" class="stream__menu stream__menu--red-dark"/></a> MAY INVLUDE IN FUTURE */}
                    <h1 className="display3">{ this.state.courseNameParts[0] }<span className = { this.state.courseColorClass }><br className="break-mobile"/>{ this.state.courseNameParts[1] }</span></h1>
                    <h1 className="display6 stream__pun">{ this.state.coursePun }</h1>
                    {/* <h1> { this.state.courseName } </h1> */}
                    <CourseFormation formation = { this.props.formation } courseLinks = { this.state.courseLinks } courseColor = { this.state.courseColor } courseButtonNames = { this.state.courseButtonNames } />
                    { console.log("HERE: State:", this.state, "Props:", this.props.res ) } 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.year,
        formation: state.UIUX.formations
    }
}

export default connect(mapStateToProps)(Course)