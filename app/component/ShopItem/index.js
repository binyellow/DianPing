import React from 'react'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data
        return (
            <div className="order-item-container">
            {
                this.props.buy.map((item,index)=>{
                    return <h3 key={index}>{item.id}</h3>
                })
            }
            </div>
        )
    }
}

export default Item