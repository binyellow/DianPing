import React from 'react'
import Header from '../../component/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // 获取商户ID
        const id = this.props.params.id
        // console.log(id)
        //id是从Home中的fetch方法获得的data中的数据
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
 
export default Detail