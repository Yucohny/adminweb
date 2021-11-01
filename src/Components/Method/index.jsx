import React, {Component} from "react"
import { Tabs } from 'antd'

const { TabPane } = Tabs

export default class Method extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="　主修　" key="1">
                        主修内容
                    </TabPane>
                    <TabPane tab="　辅修　" key="2">
                        辅修内容
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}