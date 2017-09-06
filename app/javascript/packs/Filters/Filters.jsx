import React from 'react'

class Filters extends React.Component {

    constructor() {
        super();
        this.state = {
            maxDeliveryTime: 35
        }

        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(e) {
        this.setState({
            maxDeliveryTime: e.target.value,
        });
    }

    render() {

        return (
                <form className="well form">

                    <div className="container">

                            <div className="col-xs-12 col-sm-4">
                                <label className="control-label">Cuisine Filter:</label>
                                <select className="selectpicker form-control"
                                        onChange={(e) => this.props.filterCuisine(e.target.value)}>
                                    <option value="" defaultValue>All</option>
                                    {this.props.cuisines.map((item, key) => {
                                        return (
                                            <option key={key}>{item.name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                                <label className="control-label">Rating Filter:</label>
                                <select className="selectpicker form-control"
                                        onChange={(e) => this.props.filterRating(e.target.value)}>
                                    <option value="" defaultValue>All</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                                <label className="control-label">Maximum Delivery Time: <span > {this.state.maxDeliveryTime} minutes</span></label>
                                <input className="form-control" type="range" min={10} max={70} step={5}
                                       value={this.state.maxDeliveryTime}
                                       onChange={(e) => {
                                           this.props.filterDeliveryTime(e.target.value);
                                           this.state.maxDeliveryTime = (e.target.value)
                                       }}/>
                            </div>

                    </div>
                </form>
        )
    }
}

export default Filters
