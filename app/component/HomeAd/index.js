import React from 'react'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="home-ads">
                <h2>超值特惠</h2>
                <div className="ad-containers clear-fix">
                    {this.props.data.map((item, index) => {
                        return(
                            <div key={index} className="ad-items float-left">
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt={item.title}/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd
