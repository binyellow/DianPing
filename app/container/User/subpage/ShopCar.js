import React from 'react'
import './style.less'
import {connect} from 'react-redux'
import ShopItem from '../../../component/ShopItem'
class ShopCar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const store = this.props.store
        console.log(store)
        return (
            <div className="shop-list-container">
                <h2>购物车</h2>
                {
                    this.props.store.length
                    ?<ShopItem buy={store}/>
                    :""
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        store:state.store
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopCar)