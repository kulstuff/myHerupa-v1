import React, { Component } from 'react';
import { FunctionaityButtons } from '../Components/Buttons';

class Corridoor extends Component {
    render(){
        return(
            <section className="more-stuff scr__panel" id="more-stuff">
                <h3 className="display2 more-stuff__heading">More Stuff</h3>
                <h4 className="display5 bg-gray more-stuff__subheading">
                    Additional stuff that we really could not put anywhere else.
                </h4>
                <FunctionaityButtons/>
            </section>
        )
    }
}

export default Corridoor