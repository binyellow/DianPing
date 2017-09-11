import React from 'react'
import Header from '../../component/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // 获取商户ID
        const id = this.props.params.id

        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
 
export default Detail