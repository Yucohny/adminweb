import React, {Component} from "react"
import Notice from '../Notice'
import SpecialIn from '../SpecialIn'
import Chosen from '../Chosen'
import Schedule from '../Schedule'
import SpecialQuit from '../SpecialQuit'
import './index.css'

export default class Choose extends Component {
    render() {
        return (
            <>
                <div className="info1">
                    <Notice/>
                    <SpecialIn/>
                </div>
                <div className="info2">
                    <Schedule/>
                    <SpecialQuit/>
                </div>
                <div className="info3">
                    <Chosen/>
                </div>
            </>
        )
    }
}