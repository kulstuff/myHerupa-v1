import React, { Component } from 'react'; // React and Frameworks
import { ContactUsButtton } from './Components/Buttons.js' // Compoenent to stay
import Landing from './Layout/Landing'; // Layout
import Home from './Layout/Home' // Layout
import LoginFlyer from './Utilities/GoogleLoginFlyer'; // Utilities
import '../sass/main.scss'  // Stylesheet (Import only Static Stylesheets here)

class App extends Component {
    render(){
        return(
            <div>
                <LoginFlyer/>
                <ContactUsButtton/>
                <Landing/>
                <Home/>
            </div>
        )
    }
}

export default App;