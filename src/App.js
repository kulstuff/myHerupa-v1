import React, { Component } from 'react'; // React and Frameworks
import { ContactUsButtton, FirstYearCourseButtons } from './Components/Buttons.js' // Compoenent to stay
import '../sass/main.scss'  // Stylesheet (Import only Static Stylesheets here)
import { BrowserRouter, Route } from 'react-router-dom'
import FirstYearInterface from './interfaces/FirstYear';
import SecondYearInterface from './interfaces/SecondYear';
// import ThirdYearInterface from './interfaces/FirstYear';
import Home from './Home'
import Course from './Interfaces/Course.js';
import Stream from './Interfaces/Stream';
import MVC from './Interfaces/MVC';

// import './Styles/materialize.min.scss'  // Stylesheet (Import only Static Stylesheets here)

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path = '/' component = { Home }/>
                    <Route path = '/firstYear' component = { FirstYearInterface }/>
                    <Route path = '/secondYear' component = { SecondYearInterface }/>
                    <Route path = '/course/:course_name' component = { Course }/>
                    <Route path = '/stream/:stream_name' component = { Stream }/>
                    <Route path = '/MVC' component = { MVC } />
                    {/* <Route path = '/thirdYear' component = { ThirdYear }/> */}
                </div>
            </BrowserRouter>
        )
    }
}

export default App;