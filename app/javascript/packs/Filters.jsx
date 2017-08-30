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
        const cuisines = ['Indian', 'French', 'Italian', 'Cafe', 'Bakery', 'fish', 'Pizza', 'Burger']

        return (
            <div className="filters">

                <div className="col-sm-4">
                    <p>Cuisine Filter:</p>
                    <select className="selectpicker" onChange={(e) => this.props.filterCuisine(e.target.value)}>
                        <option value="" defaultValue>All</option>
                        {cuisines.map((item, key) => {
                            return (
                                <option key={key}>{item}</option>
                            )})
                        }
                    </select>
                </div>

                <div className="col-sm-4">
                    <p>Rating Filter:</p>
                    <select className="selectpicker" onChange={(e) => this.props.filterRating(e.target.value)}>
                        <option value="" defaultValue>All</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className="col-sm-4">
                    <p>Maximum Delivery Time:</p>
                    <input type="range" min={10} max={70} step={5} value={this.state.maxDeliveryTime} onChange={(e) => {
                        this.props.filterDeliveryTime(e.target.value);
                        this.state.maxDeliveryTime = (e.target.value)
                    }}/>
                    <output>{this.state.maxDeliveryTime} minutes</output>
                </div>

            </div>
        )
    }
}

export default Filters