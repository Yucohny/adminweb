import React, {Component} from "react"
import './index.css'

export default class EachOther extends Component {
    render() {
        return (
            <div className="EOContainer">
                <div className="EOImg">
                    <img src='https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'  alt="" style={{height: '100px'}}/>
                    <div className="scheduleNotice">
                        暂无日程安排
                    </div>
                </div>
            </div>
        )
    }
}