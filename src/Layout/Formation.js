// Forms the layout of tiles
// Checks the formation and course list from JSON and checks for any explicit definations
// Provides the interfaces with proper layout RETURNED
import React, { Component } from 'react'
import { FirstYearCourseButtons, SecondYearCourseButtons, CourseButtons, StreamButtons } from '../Components/Buttons';

// CourseFormation makes up the course structure of all the Courses
// Improve Structure: Use State
export class CourseFormation extends Component {
    render() {
        var psudoState = {
            button_classes: [],
            button_links: [],
            button_names: [],
        }
        const defineCSSClass = () => {
            var { formation, courseLinks, courseColor , courseButtonNames } = this.props;
            var classArray = [];
            var linksArray = [];
            var orderButtons = ['Course Site', 'Syllabus', 'Books', 'Notes & Slides', 'Lab', 'Tutorials', 'Tutorial Solutions', 'Previous Year Papers']
            orderButtons.map( button => {
                for ( var iteration in courseButtonNames ){
                    // console.log('Iteration: ', courseButtonNames[iteration] );
                    if ( button == courseButtonNames[iteration] ) {
                        classArray.push('btn__stream display6 col btn__subject--');
                        if ( button == 'Course Site' ) classArray[iteration] += courseColor[1].secondary + '-site col-xs-12 col-sm-12 col-md-12 col-lg-12'
                        else if ( button == 'Syllabus' ) classArray[iteration] += courseColor[1].secondary + '-syllabus col-xs-12 col-sm-12 col-md-4 col-lg-4'
                        else if ( button == 'Books' ) classArray[iteration] += courseColor[1].secondary + '-books col-xs-12 col-sm-12 col-md-4 col-lg-4'
                        else if ( button == 'Notes & Slides' ) classArray[iteration] += courseColor[1].secondary + '-notes col-xs-12 col-sm-4 col-md-4 col-lg-4'
                        else if ( button == 'Lab' ) classArray[iteration] += courseColor[1].secondary + '-site col-xs-12 col-sm-12 col-md-12 col-lg-12'
                        else if ( button == 'Tutorials' ) classArray[iteration] += courseColor[1].secondary + '-tut col-xs-12 col-sm-12 col-md-6 col-lg-6'
                        else if ( button == 'Tutorial Solutions' ) classArray[iteration] += courseColor[1].secondary + '-tut-soln col-xs-12 col-sm-12 col-md-6 col-lg-6'
                        else if ( button == 'Previous Year Papers' ) classArray[iteration] += courseColor[1].secondary + '-ppr col-xs-12 col-sm-12 col-md-12 col-lg-12'
                        linksArray.push(courseLinks[button]);
                        // buttonNames.push(button)
                    }
                }
            });
            console.log("classArray: ", classArray);
            
            psudoState = {
                button_classes: classArray,
                button_links: linksArray,
                button_names: courseButtonNames
                // argmts: argmts
            };
        }
        defineCSSClass();
        const buttonList = psudoState.button_names.length ? (       
            <CourseButtons buttonClasses = { psudoState.button_classes } buttonLinks = { psudoState.button_links } buttonNames = { psudoState.button_names } /> 
        ) : ( <div></div> )
        return(
            <div>
                {/* {console.log('HEAVY PROPS: ', psudoState)} */}
                {buttonList}
            </div>    
        )
    }
}

// StreamFormation makes up the stream structure of all the Streams
// Improve Structure: Use State
export class StreamFormation extends Component {
    render () {
        var psudoState = {
            orderButtons: [],
            buttonClasses: []
        }
        var orderButtons;
        const defineCSSClass = () => {
            var { semester, streamYear, streamCode, streamName, dataSet, UIUX } = this.props
            var buttonClasses;
            console.log("Here PROPY", this.props);
            if ( streamYear == 2 ) {
                streamYear ='two';
            }
            else if ( streamYear == 3 ) {
                streamYear ='three';
            }
            var year = "year";
            // console.log("ButtonOrderStream: ", streamCode);
            var orderButtons = UIUX.ButtonOrders.streams;
            for ( var iteration in UIUX.ButtonOrders.streams ) {
                if ( streamCode == iteration ) {
                    // console.log("Reached level 1", UIUX.ButtonOrders.streams[iteration]);
                    for ( var level2iteration in UIUX.ButtonOrders.streams[iteration].year) {
                        if ( streamYear == level2iteration ) {
                            // console.log("Reached level 2");
                            for ( var level3iteration in UIUX.ButtonOrders.streams[iteration].year[level2iteration] ) {
                                if ( semester == level3iteration ) {
                                    // console.log("Reached level 3");
                                    orderButtons = UIUX.ButtonOrders.streams[iteration].year[level2iteration][level3iteration]
                                }
                            }
                        }
                    }
                }
            }

            var key;
            var classArray = [];
            
            var size = orderButtons.length;
            console.log("SIZE THIS: ", size);

            if ( size ) {
                console.log("FORMATIONS: ", UIUX.formations);
                            
                var formationArgument = size + '';
                var key;
                var classArray = [];
                for (var numString in UIUX.formations) {
                    if (formationArgument == numString) key = UIUX.formations[numString]
                }
            

                // mob
                var courseIndex = 0;
                var keys = key.mob.split('-');
                // console.log("mob: keys: " + keys);
                for (var number in keys) {
                    var times = parseInt(keys[number])
                    // console.log('mob: ' + times);
                    for ( var i = 0; i < times; i++) {
                        var classNames = 'btn__stream display6 col'; //Foundation class
                        classArray.push('')
                        classArray[courseIndex++] = classNames + ' col-xs-' + (12/times) 
                    }
                }
                // console.log('courseIndex: ' + courseIndex);
                
                // tablet
                courseIndex = 0;
                var keys = key.tablet.split('-');
                // console.log("tablet: keys: " + keys);
                for (var number in keys) {
                    var times = parseInt(keys[number])
                    for ( var i = 0; i < times; i++) {
                        classArray[courseIndex++] += ' col-sm-' + (12/times) 
                    }
                }
                // console.log('courseIndex: ' + courseIndex);
                
                // smLaptop
                courseIndex = 0;
                var keys = key.smLaptop.split('-');
                // console.log("smLaptop: keys: " + keys);
                for (var number in keys) {
                    var times = parseInt(keys[number])
                    for ( var i = 0; i < times; i++) {
                        classArray[courseIndex++] += ' col-md-' + (12/times) 
                    }
                }
                // console.log('courseIndex: ' + courseIndex);
                
                // lgLaptop
                courseIndex = 0;
                var keys = key.lgLaptop.split('-');
                // console.log("lgLaptop: keys: " + keys);
                for (var number in keys) {
                    var times = parseInt(keys[number])
                    for ( var i = 0; i < times; i++) {
                        classArray[courseIndex++] += ' col-lg-' + (12/times) 
                    }
                }
            }

            for ( var iteration in dataSet[streamYear].streams ) {
                console.log("ITERATION: " , dataSet[streamYear].streams[iteration].colors[1].secondary );
                classArray[iteration] += ' btn__stream--' + dataSet[streamYear].streams[iteration].colors[1].secondary
            }

            buttonClasses = classArray;

            console.log("Order: ", buttonClasses);

            psudoState.orderButtons = orderButtons;
            psudoState.buttonClasses = buttonClasses;
        }
        defineCSSClass();
        // console.log("RENDER: Stream Button Formation: ", orderButtons);
        if (psudoState.orderButtons.length) {
            return(
                <div>
                    <StreamButtons buttonClasses = { psudoState.buttonClasses } orderButtons = { psudoState.orderButtons } />
                </div>
            )
        }
        else {
            return(
                <div>
                </div>
            )
        }
    }
}

// FirstYearFormation makes up the COURSE BUTTONS
export class FirstYearFormation extends Component {
    state = {
        button_links: null,
        button_classes: [],
        course_colors: [],
        course_names: [],
        argmts: {}
    }
    componentDidMount () {
        this.defineCSSClass()
        // console.log('mounted');
    }
    defineCSSClass = () => {
        const { formation, courses } = this.props;
        const size = ( (Object.keys(courses.poolA).length) + (Object.keys(courses.poolB).length) + (Object.keys(courses.univ).length) );
        // console.log('No. of elements to be formed = ' +  size);
        var formationArgument = size + '';
        var key;
        var colors = [];
        var courseNames = [];
        var classArray = [];
        for (var numString in formation) {
            if (formationArgument == numString) key = formation[numString]
        }
        var numUniv = 1;
        var namesUniv = ['Biotech Department'];
        var typeofUniv = ['stream'];
        var colorsUniv = ['pink-light'];
        colors.push(...colorsUniv);
        courseNames.push(...namesUniv);

        var argmts = {
            "names": []
        }
        argmts.names.push(...namesUniv);

        var orderCourses = ['Mathematics I', 'Mathematics II', 'Applied Physics', 'Electronics', 'Electrical', 'Mechanics', 'Environment', 'Engineering Drawing I', 'Engineering Design II', 'Applied Chemistry', 'Computer Programming I', 'Computer Programming II', 'Professional Communication']
        orderCourses.map( course => {
            for ( var iteration in courses.poolB ){
                if ( course == courses.poolB[iteration].name ) {
                    courseNames.push(courses.poolB[iteration].name)
                    colors.push(courses.poolB[iteration].colors[1].secondary)
                }
            }
            for ( var iteration in courses.poolA ){
                if ( course == courses.poolA[iteration].name ) {
                    courseNames.push(courses.poolA[iteration].name)
                    colors.push(courses.poolA[iteration].colors[1].secondary)
                }
            }
        } );


        // mob
        var courseIndex = 0;
        var keys = key.mob.split('-');
        // console.log("mob: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            // console.log('mob: ' + times);
            for ( var i = 0; i < times; i++) {
                var classNames = 'btn__stream display6 col'; //Foundation class
                classArray.push('')
                classArray[courseIndex++] = classNames + ' col-xs-' + (12/times) 
            }
        }
        // console.log('courseIndex: ' + courseIndex);
        
        // tablet
        courseIndex = 0;
        var keys = key.tablet.split('-');
        // console.log("tablet: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[courseIndex++] += ' col-sm-' + (12/times) 
            }
        }
        // console.log('courseIndex: ' + courseIndex);
        
        // smLaptop
        courseIndex = 0;
        var keys = key.smLaptop.split('-');
        // console.log("smLaptop: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[courseIndex++] += ' col-md-' + (12/times) 
            }
        }
        // console.log('courseIndex: ' + courseIndex);
        
        // lgLaptop
        courseIndex = 0;
        var keys = key.lgLaptop.split('-');
        // console.log("lgLaptop: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[courseIndex++] += ' col-lg-' + (12/times) 
            }
        }
        
        console.log('colors: ', colors);
        
        this.setState({
            button_classes: classArray,
            button_links: courseNames,
            course_colors: colors,
            course_names: courseNames,
            argmts: argmts
        });

    }
    render() {
        return(
            // <div>Yayyy!{ console.log( this.state ) }</div>
            <FirstYearCourseButtons courseLinks = { this.state.button_links } classesNames = { this.state.button_classes } colors = { this.state.course_colors } courseNames = { this.state.course_names } argmts = { this.state.argmts } />
        )
    }
}

// SecondYearFormation makes up the STREAM BUTTONS
export class SecondYearFormation extends Component {
    state = {
        button_links: null,
        button_classes: [],
        course_colors: [],
        course_names: []
        // argmts: {}
    }
    componentDidMount () {
        this.defineCSSClass()
        // console.log('mounted');
    }
    
    defineCSSClass = () => {
        const { formation, streams } = this.props;
        const size = ( (Object.keys(streams).length) );
        console.log("FORMATIONS: ", formation);
        
        var formationArgument = size + '';
        var key;
        var colors = [];
        var courseNames = [];
        var classArray = [];
        for (var numString in formation) {
            if (formationArgument == numString) key = formation[numString]
        }
        console.log('Streams:', streams);
        
        // No Speacial Departments Yet

        // var numUniv = 1;
        // var namesUniv = ['Biotech Department'];
        // var typeofUniv = ['stream'];
        // var colorsUniv = ['pink-light'];
        // colors.push(...colorsUniv);
        // courseNames.push(...namesUniv);

        // No use of argmts yet
        // var argmts = {
        //     "names": []
        // }
        // argmts.names.push(...namesUniv);

        var orderStreams = ['Computer Science', 'Chemical', 'Electronics & Communication', 'Civil', 'Electrical', 'Production', 'Environment', 'Biotechnology', 'Mechanical', 'Mechatronics', 'Electronics & Computer', 'Electronics & Instrumentation']
        orderStreams.map( course => {
            for ( var iteration in streams ){
                if ( course == streams[iteration].Name ) {
                    courseNames.push(streams[iteration].Name)
                    colors.push(streams[iteration].colors[1].secondary)
                }
            }
        } );
        console.log('courseNames: ', courseNames);
        console.log('colors: ', colors);

        // mob
        var streamIndex = 0;
        var keys = key.mob.split('-');
        // console.log("mob: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            // console.log('mob: ' + times);
            for ( var i = 0; i < times; i++) {
                var classNames = 'btn__stream display6 col'; //Foundation class
                classArray.push('')
                classArray[streamIndex++] = classNames + ' col-xs-' + (12/times) 
            }
        }
        // console.log('streamIndex: ' + streamIndex);
        
        // tablet
        streamIndex = 0;
        var keys = key.tablet.split('-');
        // console.log("tablet: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[streamIndex++] += ' col-sm-' + (12/times) 
            }
        }
        // console.log('streamIndex: ' + streamIndex);
        
        // smLaptop
        streamIndex = 0;
        var keys = key.smLaptop.split('-');
        // console.log("smLaptop: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[streamIndex++] += ' col-md-' + (12/times) 
            }
        }
        // console.log('streamIndex: ' + streamIndex);
        
        // lgLaptop
        streamIndex = 0;
        var keys = key.lgLaptop.split('-');
        // console.log("lgLaptop: keys: " + keys);
        for (var number in keys) {
            var times = parseInt(keys[number])
            for ( var i = 0; i < times; i++) {
                classArray[streamIndex++] += ' col-lg-' + (12/times) 
            }
        }
        
        console.log('colors: ', colors);
        
        this.setState({
            button_classes: classArray,
            button_links: courseNames,
            course_colors: colors,
            course_names: courseNames
            // argmts: argmts
        });

    }
    render() {
        return(
            // <div>Yay!!!
            // { console.log("state", this.state ) }</div>
            <SecondYearCourseButtons courseLinks = { this.state.button_links } classesNames = { this.state.button_classes } colors = { this.state.course_colors } courseNames = { this.state.course_names } />
        )
    }
}
