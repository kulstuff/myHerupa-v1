import React, { Component } from 'react' // Elementary
import  { connect } from 'react-redux' // To connect state from redux as Props here
import { SecondYearFormation } from '../Layout/Formation' // To form First Year Course Grid
import { ContactUsButtton } from '../Components/Buttons';
// import { Router } from 'react-router-dom' // Router for Navigation into Courses
// import AccountInterface from '../Interfaces/Accounts'  // Elementary login strip

class SecondYearInterface extends Component {
    render(){
        return(
            <div>
                <ContactUsButtton/>
                <div className="year">
                    <h1 className="display3">Second<span className="thin">Year</span>.</h1>
                    <h2 className="display5 thin year__subheading">
                        All streams are listed below.<br/>
                        Select the desired to explore.
                    </h2>
                    <SecondYearFormation formation = { this.props.formation } streams = { this.props.streamList }/>
                </div>     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streamList: state.year.two.streams,
        formation: state.UIUX.formations // Formation of Buttons
    }
}

export default connect(mapStateToProps)(SecondYearInterface);