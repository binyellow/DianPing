import React from 'react'
import './style.less'
import Item from './Item/index.js'
class List extends React.Component{
    constructor(props,state){
        super(props,state);
    }
    render(){
        return(
            <div className="list-container">
            {this.props.data.map((item,index)=>{
                return <Item key={index} data={item}/>
            })}
            </div>
        )
    }
}
export default List
