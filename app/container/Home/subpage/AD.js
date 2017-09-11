import React from 'react'
import HomeAd from '../../../component/HomeAd'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
            {
                this.state.data.length
                ? <HomeAd data={this.state.data}/>
                : <div>{/* 加载中... */}</div>
            }
            </div>
        )
    }
    componentDidMount() {
        // 获取广告数据
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        })
    }
}

export default Ad
