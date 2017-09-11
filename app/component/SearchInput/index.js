import React from 'react'
import './style.less'

class SearchInput extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={
            value:''
        }
    }
    render(){
        return(
            <input className="search-input" 
            placeholder="请输入关键字"
            onKeyUp={this.keyUp.bind(this)}
            onChange={this.ChangeHandle.bind(this)}
            value={this.state.value}/>
        )
    }
    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    keyUp(e){
        if (e.keyCode!==13) {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}
export default SearchInput
