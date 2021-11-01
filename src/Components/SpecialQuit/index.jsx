import React, {Component} from "react";


const data = []
var tmp = 0
data.map((item) => {
    tmp += item.score
    return tmp
})
export default class SpecialQuit extends Component {
    render() {
        return (
            <div className="specialInContainer">
                <div className="specialInBody">
                    <div className="specialInHeader">
                        <div>
                            <div className="specialInTitle">
                                特殊退课申请
                            </div>
                            <div className="specialInCount">
                                {data.length}&nbsp;门&nbsp;{tmp}&nbsp;学分
                            </div>
                        </div>
                    </div>
                    <div className="specialQuitContent">
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