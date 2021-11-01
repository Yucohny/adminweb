import React, {Component} from 'react'
import './index.css'

export default class Schedule extends Component {
    state = {
        year: 2021,
        month: 10
    }
    add = () => {
        const {year, month} = this.state
        if (month === 12) {
            this.setState({
                year: year + 1,
                month: 1
            })
        } else {
            this.setState({
                month: month + 1
            })
        }
    }
    minus = () => {
        const {year, month} = this.state
        if (month === 1) {
            this.setState({
                year: year - 1,
                month: 12
            })
        } else {
            this.setState({
                month: month - 1
            })
        }
    }
    render() {
        const {year, month} = this.state
        return (
            <div className="scheduleContainer">
                <div className="scheduleBody">
                    <div className="scheduleTitle">
                        日程安排
                    </div>
                    <div className="scheduleTime">
                        <div className="scheduleTimeMonth">
                            <span className="scheduleTimeMonthNumber">
                                {month}
                            </span>
                            <span>
                                月
                            </span>
                        </div>
                        <div className="changeScheduleTimeMonth">
                            <span className="change-time-left" onClick={this.minus}>
                                <i class="anticon anticon-left">
                                    <svg viewBox="64 64 896 896" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                    </svg>
                                </i>
                            </span>
                            <span className="change-time-content">
                                {year} - {month}
                            </span>
                            <span className="change-time-right" onClick={this.add}>
                                <i className="anticon anticon-right">
                                    <svg viewBox="64 64 896 896" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
                                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                    </svg>
                                </i>
                            </span>
                        </div>
                    </div>
                    <div className="scheduleContent">
                        <div className="scheduleImg">
                            <img src='https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'  alt="" style={{height: '100px'}}/>
                            <div className="scheduleNotice">
                                暂无日程安排
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}