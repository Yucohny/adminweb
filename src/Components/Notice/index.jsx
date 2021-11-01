import {Component} from "react";
import { Tabs } from 'antd';
import { List } from 'antd';
import NoticeListItem from '../NoticeListItem'
import './index.css'

const { TabPane } = Tabs;
const data = [
    ['关于2021级新生选课工作安排的通知', '2021-09-15'],
    ['关于2021-2022学年第一学期第二轮选课通知', '2021-08-27'],
    ['关于2021-2022学年第一学期学生选课工作安排的通知', '2021-08-27'],
    ['关于2020-2021学年第二学期第二轮选课的通知', '2021-08-27'],
    ['关于2020-2021学年第二学期学生选课工作安排的通知', '2021-08-27'],
    ['关于大类分流学生2021-2022学年第一学期选课工作安排的通知', '2021-07-26']
];
export default class Notice extends Component {
    render() {
        return (
            <div className="noticeContainer">
                <div className="noticeBody">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="　公告　" key="1">
                            <div className="noticeList">
                                <List
                                    bordered={false}
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <NoticeListItem title={item[0]} date={item[1]}/>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </TabPane>
                      </Tabs>
                </div>
            </div>
        )
    }
}