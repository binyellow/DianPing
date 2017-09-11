import React from 'react'
import './style.less'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../component/List/index.js'
import LoadMore from '../../../component/LoadMore/index.js'
class List extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={
            data:[],
            hasMore:false,//还有没有更多数据可供加载
            isLoadingMore:false,//加载更多按钮的工作状态
            page:1
        }
    }
    render(){
        return(
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                <div>
                    {this.state.data.length
                    ?<ListComponent data={this.state.data}/>
                    : <div>加载中...</div>}
                    {this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div></div>}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstData()
    }
    //加载数据
    loadFirstData(){
        const cityName = this.props.cityName
        const result = getListData(cityName,0)
        this.resultHandler(result)
    }
    //加载更多数据
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName,page);
        this.resultHandler(result);

        this.setState({
            page: page+1,
            isLoadingMore:false
        })
    }
    //处理数据
    resultHandler(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            // console.log(json);
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore
            })
        })
    }
}
export default List
