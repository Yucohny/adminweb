import React, {Component} from 'react'
import ChosenListTitle from '../ChosenListTitle'
import './index.css'

const data = [
    {vari: '主修（初修）',
    content: [
        {
            vari: '选修', name: 'TED演讲听力', id: 'EGP20102', score: 2, spe: '公共基础课程'
        }, {
            vari: '必修', name: '大学物理实验', id: 'PHYS12011', score: 1.5, spe: '--'
        }, {
            vari: '必修', name: '马克思主义基本原理', id: 'MT20300', score: 3, spe: '--'
        }, {
            vari: '选修', name: 'Java程序开发', id: 'CST31103', score: 3, spe: '--'
        }, {
            vari: '必修', name: '企业法律风险管理', id: 'SSG00032', score: 2, spe: '通识教育课程'
        }, {
            vari: '必修', name: '程序设计实践', id: 'CST13101', score: 3, spe: '--'
        }, {
            vari: '选修', name: '体育自选项目（羽毛球2）', id: 'PESS22075', score: 1, spe: '--'
        }, {
            vari: '选修', name: '形势与政策3', id: 'MT80003', score: 0, spe: '公共基础课程'
        }, {
            vari: '必修', name: '数字逻辑', id: 'CST21108', score: 3.5, spe: '--'
        }, {
            vari: '必修', name: '数据结构', id: 'CST21104', score: 4, spe: '--'
        }
    ]
    }, {
    vari: '跨年级/专业',
    content: [{
        vari: '必修', name: '计算机网络', id: 'CST31102', score: 4, pe: '专业课程'
    }]
    }
]

let cnt = 0, sum = 0;
console.log(cnt, sum)
data.map(item => {
    cnt += item.content.length
    item.content.map(it => {
        sum += it.score
        return sum
    })
    return cnt
})
console.log(cnt, sum)

export default class Chosen extends Component {
    render() {
        return (
            <div className="ChosenBox">
                <div className="ChosenHeader">
                    <div className="ChosenHeader1">
                        <div className="ChosenHeader11">
                            已选课程
                        </div>
                        <div className="ChosenHeader12">
                            {cnt}&nbsp;门&nbsp;{sum}&nbsp;学分
                        </div>
                    </div>
                    <div className="ChosenHeader2">
                        选&nbsp;课
                    </div>
                </div>
                <div>
                {
                    data.map((item, index) => {
                        return <ChosenListTitle key={index + 100} vari={item.vari} content={item.content}/>
                    })
                }
                </div>
            </div>
        )
    }
}