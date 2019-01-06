import React, { Component } from 'react' // Elementary
import  { connect } from 'react-redux' // To connect state from redux as Props here
// import FirstYearFormation from '../Layout/Formation' // To form First Year Course Grid
import { ContactUsButtton } from '../Components/Buttons';
import { FirstYearFormation } from '../Layout/Formation';
// import { Router } from 'react-router-dom' // Router for Navigation into Courses
// import AccountInterface from '../Interfaces/Accounts'  // Elementary login strip

class FirstYearInterface extends Component {
    render(){
        return(
            <div>
                <ContactUsButtton/>
                <div className="year">
                    <h1 className="display3">First<span className="thin">Year</span>.</h1>
                    <h2 className="display5 thin year__subheading">
                        All courses are listed below.<br/>
                        Select the desired to explore.
                    </h2>
                    <FirstYearFormation formation = { this.props.formation } courses = { this.props.courseList }/>
                </div>     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseList: state.year.one.semester.one.courses, // One sem is enough as one Semester of first year covers all possible courses of the year
        formation: state.UIUX.formations // Formation of Buttons
    }
}

export default connect(mapStateToProps)(FirstYearInterface)
