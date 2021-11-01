import React, { Component } from 'react'
import './index.css'

export default class SpecialInItem extends Component {
    render() {
        const {name, necessary, id, time, state} = this.props
        return (
            <div className="SpecialInItemBox">
                <div className="SpecialInItemBody">
                    <i className="SpecialInItemIcon" data-v-6a6ae260="" aria-label="图标: caret-right">
                        <svg viewBox="0 0 1024 1024" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                            <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                        </svg>
                    </i>
                    <div className="SpecialInItemHeader">
                        <span className="SpecailInItemHeader1">
                            <div className="SpecialInItemHeader11">
                                {necessary}
                            </div>
                            <div className="SpecailInItemHeader12">
                                <span style={{color: '#1890ff', fontWeight: '600'}}>{name}</span>（{id}）
                            </div>
                        </span>
                        <span className="SpecialInItemHeader2">
                            <div className="SpecialInItemHeader21"></div>{state}
                        </span>
                    </div>
                    <div className="SpecialInItemFooter">
                        <div className="SpecialInItemFooter1">
                            {time}
                        </div>
                        <div className="SpecialInItemFooter2">
                            <div className="SpecialInItemFooter21">
                                详情
                                <i data-v-6a6ae260="" aria-label="图标: double-right">
                                    <svg viewBox="64 64 896 896" data-icon="double-right" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                                        <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}