import React, {Component} from 'react'
import ChosenListItem from '../ChosenListItem'
import './index.css'

export default class ChosenListTitle extends Component {
    render() {
        const {vari, content} = this.props
        let cnt = content.length, sum = 0;
        content.map(item => {
            sum += item.score
            return sum
        })
        return (
            <div className="ChosenList">
                <div className="ChosenListTitle">
                    <div className="ChosenListTitle1">
                        {vari}
                    </div>
                    <div className="ChosenListTitle2">
                        {cnt}&nbsp;门&nbsp;{sum}&nbsp;学分
                    </div>
                </div>
                {
                    content.map((item, index) => {
                        const {vari, name, id, score, spe} = item
                        return <ChosenListItem key={index + 10} vari={vari} name={name} id={id} score={score} spe={spe}/>
                    })
                }
            </div>
        )
    }
}