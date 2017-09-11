import React from 'react'
import { getInfoData } from '../../../fetch/detail/detai'
import DetailInfo from '../../../component/DetailInfo'

class Info extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={
            info:false
        }
    }
    render(){
        return(
            <div>
            {
                this.state.info
                ?<DetailInfo data={this.state.info}/>
                :''
            }
            </div>
        )
    }
    componentDidMount(){
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        })
    }
}
export default Info
