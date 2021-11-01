import React, {Component} from "react"
import SpecialInItem from '../SpecialInItem'

import './index.css'

const data = [
    {name: '计算机网络',
    necessary: '必修',
    id: 'CST31102',
    time: '2021-09-01 15:30:29',
    state: '通过',
    score: 4
    }
]
var tmp = 0
data.map((item) => {
    tmp += item.score
    return tmp
})
export default class SpecialIn extends Component {
    render() {
        return (
            <div className="specialInContainer">
                <div className="specialInBody">
                    <div className="specialInHeader">
                        <div>
                            <div className="specialInTitle">
                                特殊选课申请
                            </div>
                            <div className="specialInCount">
                                {data.length}&nbsp;门&nbsp;{tmp}&nbsp;学分
                            </div>
                        </div>
                        <div className="specialInTime">
                            不在申请时间
                        </div>
                    </div>
                    <div className="specialInList">
                        {data.map((item, index) => {
                            const {name, necessary, id, time, state, score} = item
                            return <SpecialInItem key={index + 1000} name={name} necessary={necessary} id={id} time={time} state={state} score={score}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}