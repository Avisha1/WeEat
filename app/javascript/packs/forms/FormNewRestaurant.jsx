import React from 'react'
import PropTypes from 'prop-types';
import $ from 'jquery'

export default class FormNewRestaurant extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cuisine: '',
            tenBis: false,
            address: '',
            maxDeliveryTime: '5'
        }

        this.newRestaurantSubmit = this.newRestaurantSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (e) => {

        const target_id = e.target.id;
        const target_value = e.target.value;

        if (target_id == "restaurant_id") {
            this.setState({name: target_value});
        }
        else if (target_id == "address_id") {
            this.setState({address: target_value});
        }
        else if (target_id == "max_delivery_id") {
            this.setState({maxDeliveryTime: parseInt(target_value)})
        }
        else if (target_id == "tenbis_id") {
            this.setState({tenBis: target_value})
        }
        else if (target_id == "cuisine_select_id") {
            this.setState({cuisine: target_value})
        }
    };

    newRestaurantSubmit(event) {
        event.preventDefault();
        //valid params


        $.ajax({
            url: '/restaurants',
            dataType: 'json',
            type: 'POST',
            data: {
                restaurant: {
                    name: this.state.name,
                    accept_10_bis: this.state.tenBis,
                    address: this.state.address,
                    max_delivery_time: this.state.maxDeliveryTime,
                    cuisine_id: this.state.cuisine
                },
            },
        })
            .done(function(data) {
                console.log("submit success!!");
            })
            .fail(function (error) {
                console.log("error! " + error);
                debugger;

            })
    };

    render() {
        return (
            <form className="restaurant-form" onSubmit={this.newRestaurantSubmit}>

                <div className="row">

                    <div className="col-xs-12 col-sm-10">
                        <label>Restaurant name:</label>
                        <input id="restaurant_id" type="text" className="form-control"
                               placeholder="Write here the restaurant's name"
                               value={this.state.name} onChange={this.handleChange} required/>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Address:</label>
                        <input id="address_id" type="text" className="form-control" placeholder="Address"
                               value={this.state.address} onChange={this.handleChange} required/>
                    </div>
                </div>

                {/*lat + lon*/}

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Accept 10 bis? <input id="tenbis_id" className="form-check-input" type="checkbox"
                                                     value={this.state.tenBis} onChange={this.handleChange}/></label>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Max Delivery Time:</label>
                        <input id="max_delivery_id" className="form-control" type="number" min={5} max={70} step={1}
                               value={this.state.maxDeliveryTime} onChange={this.handleChange} required/>
                    </div>
                </div>

                <br/>

                <label>Cuisines:</label>
                <br/>
                <select className="custom-select col-xs-12 col-sm-10" id="cuisine_select_id" value={this.state.cuisine}
                        onChange={this.handleChange} required>
                    <option value="" defaultValue>Choose...</option>
                    {this.props.cuisines.map((item, key) => {
                        return (<option key={item.name} value={item.id}>{item.name}</option>)
                    })}
                </select>

                <br/>
                <br/>
                <div className="row">
                    <div className="col-xs-10 col-sm-5">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>

                    <div className="col-xs-10 col-sm-5 col-sm-offset-2">
                        <button className="btn btn-danger" onClick={() => this.props.buttonClose()}>Cancel</button>
                    </div>
                </div>
            </form>

        )
    }
}