import React, {Component} from "react"
import { Tabs } from 'antd'
import Choose from '../Choose'
import EachOther from '../EachOther'
import Method from '../Method'
import './index.css'
const { TabPane } = Tabs

export default class Box extends Component {
    render() {
        return (
            <div className="boxHeader">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="　选课　" key="1">
                        <Choose/>
                    </TabPane>
                    <TabPane tab="　本研互选　" key="2">
                        <EachOther/>
                    </TabPane>
                    <TabPane tab="　培养方案　" key="3">
                        <Method/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}