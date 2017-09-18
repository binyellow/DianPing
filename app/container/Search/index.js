import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHearder from '../../component/SearchHeader'
import SearchList from './subpage/List'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHearder keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
    componentDidMount() {
        const params = this.props.params
        // console.log('category param: ' + params.category)
        // console.log('key param:' + params.keyword)
    }
}

export default Search