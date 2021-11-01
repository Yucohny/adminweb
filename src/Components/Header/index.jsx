import React, {Component} from "react";
import './index.css'

export default class Header extends Component {
    state = {
        isVis: false
    }
    showInfo = () => {
        const {isVis} = this.state
        this.setState({isVis: !isVis})
    }
    render() {
        const {isVis} = this.state
        console.log(isVis)
        return (
            <div className="header">
                <div className="more">
                    <svg className="menuIcon" t="1635151800742" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2394">
                        <path d="M122.7 229.4h781.1c20.7 0 37.5-16.8 37.5-37.5s-16.8-37.5-37.5-37.5H122.7c-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5zM903.8 473.1H122.7c-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5h781.1c20.7 0 37.5-16.8 37.5-37.5-0.1-20.7-16.9-37.5-37.5-37.5zM903.8 791H122.7c-20.7 0-37.5 16.8-37.5 37.5S102 866 122.7 866h781.1c20.7 0 37.5-16.8 37.5-37.5S924.4 791 903.8 791z" p-id="2395" fill="#ffffff">
                        </path>
                    </svg>
                </div>
                <div className="title">
                    重庆大学教务管理系统
                </div>
                <div className="dateChoose">
                    <div className="date">
                        2021秋
                    </div>
                    <div className="dateIconBox">
                        <svg t="1635234693265" className="dateIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7944"><path d="M209.5 462.7h566.4c24.2 0 44.9-13.9 54.2-36.2 9.2-22.3 4.4-46.8-12.7-63.9L710 255.3c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L789 390.8c8.2 8.2 5.2 17.6 4 20.3s-5.7 11.5-17.2 11.5H209.5c-11 0-20 9-20 20s8.9 20.1 20 20.1zM814.5 561.3H248.2c-24.2 0-44.9 13.9-54.2 36.2-9.2 22.3-4.4 46.8 12.7 63.9L314 768.7c3.9 3.9 9 5.9 14.1 5.9s10.2-2 14.1-5.9c7.8-7.8 7.8-20.5 0-28.3L235 633.2c-8.2-8.2-5.2-17.6-4-20.3 1.1-2.7 5.7-11.5 17.2-11.5h566.4c11 0 20-9 20-20s-9-20.1-20.1-20.1z" p-id="7945"></path></svg>
                    </div>
                </div>
                <div className="info" onClick={this.showInfo}>
                    <div className="infoIcon">
                        <svg t="1635242832778" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2423" width="1em" height="1em">
                            <path d="M512 625.778c-159.289 0-284.444-125.156-284.444-284.445S352.71 56.89 512 56.89s284.444 125.155 284.444 284.444S671.29 625.778 512 625.778z m0-56.89c125.156 0 227.556-102.4 227.556-227.555S637.156 113.778 512 113.778s-227.556 102.4-227.556 227.555S386.844 568.89 512 568.89z" p-id="2424" fill="#ffffff"></path><path d="M56.889 1024c0-250.311 204.8-455.111 455.111-455.111S967.111 773.689 967.111 1024h-56.889c0-221.867-176.355-398.222-398.222-398.222S113.778 802.133 113.778 1024h-56.89z" p-id="2425" fill="#ffffff"></path>
                       </svg>
                    </div>
                    <div className="infoBtnIcon">
                        <svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="white" aria-hidden="true" focusable="false">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                        </svg>
                    </div>
                </div>
                <div className="infoMore" style={{display: isVis ? 'block' : 'none'}}>
                    1?????
                </div>
            </div>
        )
    }
}