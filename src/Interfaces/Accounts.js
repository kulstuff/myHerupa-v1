import React, { Component } from 'react'

export class AccountInterface extends Component {
    render(){
        return(
            <div className='accounts'>
                <div className='header'>
                    <span className='header_heading'>Hi... You are logged in as { this.state.ac.name }</span>
                    <div className='header_menu'></div>
                </div>
            </div>
        )
    }
}
