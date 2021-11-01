import React, {Component} from 'react'

import './index.css'

export default class ChosenListItem extends Component {
    render() {
        const {vari, name, id, score, spe} = this.props
        console.log(vari, name, id, score, spe)
        return (
            <div className="ChosenItemBox">
                <div className="ChosenItemBody">
                    <div className="ChosenItemContent">
                        <div className="ChosenItemContent1">
                            <div className="vari">
                                <div className="variContent" style={{backgroundColor: vari === '必修' ? 'rgb(108, 205, 61)' : '#fafafa',
                                borderColor: vari === '必修' ? 'rgb(108, 205, 61)' : '#d9d9d9',
                                color: vari === '必修' ? 'white' : 'black'
                                }}>
                                    {vari}
                                </div>
                            </div>
                            <div className="ChosenItemHF">
                                <div className="ChosenItemHeader">
                                    <span style={{color: '#1890ff', fontWeight: '600'}}>{name}</span>（{id}）
                                </div>
                                <div className="ChosenItemFooter">
                                    {spe}
                                </div>
                            </div>
                            <div className="ChosenItemScore">
                                {score}学分
                            </div>
                        </div>
                        <div className="ChosenItemContent2">
                            退课
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}