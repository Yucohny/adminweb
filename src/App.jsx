import React, {Component} from "react"
import Header from './Components/Header'
import Box from './Components/Box'

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Box/>
                </div>
            </div>
        )
    }
}