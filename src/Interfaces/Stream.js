import React, { Component } from 'react'
import { StreamFormation } from '../Layout/Formation';
import { connect } from 'react-redux';
import { ContactUsButtton } from '../Components/Buttons';

class Stream extends Component {
    state = {
        streamName: "",
        streamCode: "",
        streamNameParts: [],
        streamColor: "",
        courseArraySemOdd: "",
        courseArraySemEven: ""
    }

    componentDidMount () {
        this.setupStream()
    }
    
    componentDidUpdate () {
        this.render();
    }
    
    setupStream = () => {
        // Stream Selection Starts from Year 2
        console.log(this.props.match.params.stream_name);
        var streamCode = this.props.match.params.stream_name.split('-')[0];
        var year = this.props.match.params.stream_name.split('-')[1].split('Y')[0];
        console.log("1: Stream Name: ", streamCode);
        console.log('2: Year:', year );
        var streamFullName;
        var streamColor;
        var courseArraySemOdd = [];
        var courseArraySemEven = [];
        var nameParts;

        if ( year == '2' ) {
            for (var iteration in this.props.res.two.streams) {
                console.log('2B', this.props.res.two.streams[iteration].code)
                if ( this.props.res.two.streams[iteration].code == streamCode ) {
                    streamFullName = this.props.res.two.streams[iteration].Name
                    console.log('3: StreamFullName: ', streamFullName);
                    streamColor = this.props.res.two.streams[iteration].colors[1].secondary
                    console.log('4: StreamColor', streamColor);
                    nameParts = this.props.res.two.streams[iteration].NameParts;
                    for( var level2Iteration in this.props.res.two.streams[iteration].courses.semester.three ) {
                        courseArraySemOdd.push( this.props.res.two.streams[iteration].courses.semester.three[level2Iteration] )
                    }
                    for( var level2Iteration in this.props.res.two.streams[iteration].courses.semester.four ) {
                        courseArraySemEven.push( this.props.res.two.streams[iteration].courses.semester.four[level2Iteration] )
                    }
                }
                this.setState({
                    streamName: streamFullName,
                    streamCode: streamCode,
                    streamNameParts: nameParts,
                    streamColor: streamColor,
                    courseArraySemOdd: courseArraySemOdd,
                    courseArraySemEven: courseArraySemEven
                });
            }
        }

        if ( year == '3' ) {
            for (var iteration in this.props.res.three.streams) {
                if ( this.props.res.three.streams[iteration].code == streamCode ) {
                    streamFullName = this.props.res.three.streams[iteration].Name
                    console.log('3: StreamFullName: ', streamFullName);
                    streamColor = this.props.res.three.streams[iteration].colors[1].secondary
                    console.log('4: StreamColor', streamColor);
                    nameParts = this.props.res.three.streams[iteration].NameParts;
                    for( var level2Iteration in this.props.res.three.streams[iteration].courses.semester.five ) {
                        courseArraySemOdd.push( this.props.res.three.streams[iteration].courses.semester.five[level2Iteration] )
                    }
                    for( var level2Iteration in this.props.res.three.streams[iteration].courses.semester.six ) {
                        courseArraySemEven.push( this.props.res.three.streams[iteration].courses.semester.six[level2Iteration] )
                    }
                }
                this.setState({
                    streamName: streamFullName,
                    streamCode: streamCode,
                    streamNameParts: nameParts,
                    streamColor: streamColor,
                    courseArraySemOdd: courseArraySemOdd,
                    courseArraySemEven: courseArraySemEven
                });
            }
        }
        
    }
    render() {
        return(
            <div>
                <section className="stream scr__panel">
                    {/* <ContactUsButtton/> */}
                    <div className="down-arrow centre-text hide-small-desktop"  >
                        <h4 className="display8 thin">Third Semester</h4>
                        <i className="fas fa-chevron-down display5"></i>
                    </div>
                    <h1 className="display3 centre-text stream-heading">{ this.state.streamNameParts[0] }<span className="thin"><br className="break-mobile" />{ this.state.streamNameParts[1] }</span></h1>
                    <h2 className="display4 centre-text stream__pun">Fourth Semester</h2>
                    { console.log("A1", this.state) }
                    <StreamFormation semester = "odd" streamYear = { this.props.match.params.stream_name.split('-')[1].split('Y')[0] } streamCode = { this.state.streamCode } streamName = { this.state.streamName } dataSet = { this.props.res } UIUX = { this.props.UIUX } />
                </section>    
                <section className="stream scr__panel">
                    <ContactUsButtton/>
                    <h1 className="display3 centre-text stream-heading">
                            { this.state.streamNameParts[0] }<span className="thin"><br className="break-mobile" />{ this.state.streamNameParts[1] }</span>
                    </h1>
                    <h2 className="display4 centre-text stream__pun">Third Semester</h2>
                    {/* <StreamFormation  /> */}
                {/* <h1 className="display3">{ this.state.courseNameParts[0] }<span className = { this.state.courseColorClass }><br className="break-mobile"/>{ this.state.courseNameParts[1] }</span></h1>
                <h1 className="display6 stream__pun">{ this.state.coursePun }</h1>
                <CourseFormation formation = { this.props.formation } courseLinks = { this.state.courseLinks } courseColor = { this.state.courseColor } courseButtonNames = { this.state.courseButtonNames } />
                { console.log("HERE: State:", this.state, "Props:", this.props.res ) }  */}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.year,
        UIUX: state.UIUX
    }
}

export default connect(mapStateToProps)(Stream)