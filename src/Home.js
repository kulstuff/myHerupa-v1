import React from 'react'
import LoginFlyer from './Utilities/GoogleLoginFlyer';
import { ContactUsButtton } from './Components/Buttons';
import Landing from './Layout/Landing';
import Corridoor from './layout/Corridoor';
import { Route } from 'react-router-dom';
import Course from './Interfaces/Course';

const Home = () => {
    return(
        <div>
            <LoginFlyer/>
            <ContactUsButtton/>
            <Landing/>
            <Corridoor/>
        </div>    
    )
}

export default Home;