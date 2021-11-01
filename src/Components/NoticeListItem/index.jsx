import {Component} from 'react'
import './index.css'

export default class NoticeListItem extends Component {
    render() {
        const {title, date} = this.props
        return (
            <div className="noticeListItemBox">
                <div className="noticeListItemTitle">
                {title}
                </div>
                <div className="noticeListItemDate">
                {date}
                </div>
            </div>
        )
    }
}