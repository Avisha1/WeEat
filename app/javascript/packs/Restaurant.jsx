import React from 'react'

class Restaurant extends React.Component {

    render() {
        const tenBisIcon = <img className="ten_bis_icon" src="/assets/10bis_icon.jpg"/>;

        return (
                <div className="row">

                    <div className="col-sm-2 cuisine_font hidden-xs">
                        {this.props.data.cuisine_icon}
                    </div>

                    <div className="col-sm-4">
                        <p>Name: {this.props.data.name}</p>
                        <p>{this.props.data.cuisine_name}</p>
                        {this.props.data.accepts_10_bis && tenBisIcon}
                        <p>Address: {this.props.data.address}</p>
                        <p>Delivery Time: {this.props.data.max_delivery_time}</p>
                        <GetStars val={this.props.data.rating}/>

                        {/*<p>Rating: {this.props.data.rating}</p>*/}
                    </div>

                    <div className="col-sm-2">
                        {/*here will be the button for new review*/}
                    </div>

                </div>
        )
    }


}


function GetStars(arg) {


    var stars = [];
    for (var i = 0; i < 3; i++) {
        if(i<arg.val){
            stars.push("fa fa-star");
        }
        else{
            stars.push("fa fa-star-o");
        }

    }

    return (
        <div>
            {stars.map(function(line, i) {
                    return (<i className={line} aria-hidden="true" key={i}></i>)
                }
            )}
        </div>
    )
}

export default Restaurant