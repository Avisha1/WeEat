import React from 'react'


export default class FormNewRestaurant extends React.Component {

    constructor() {
        super();

        this.newRestaurantSubmit = this.newRestaurantSubmit.bind(this);
    }

    newRestaurantSubmit() {

        //valid params

        //make post call

    }

    render() {
        return (
            <form className="restaurant-form" onSubmit={this.newRestaurantSubmit}>

                <div className="row">

                    <div className="col-xs-12 col-sm-10">
                        <label>Restaurant name:</label>
                        <input type="text" className="form-control" placeholder="Write here the restaurant's name" required/>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Address:</label>
                        <input type="text" className="form-control" placeholder="Address" required/>
                    </div>
                </div>

                {/*lat + lon*/}

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Accept 10 bis? <input className="form-check-input" type="checkbox" value=""/></label>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-xs-12 col-sm-10">
                        <label>Max Delivery Time:</label>
                        <input className="form-control" type="number" min={5} max={70} step={1} required/>
                    </div>
                </div>

                <br />

                <label>Cuisines:</label>
                <br/>
                <select className="custom-select col-xs-12 col-sm-10" id="inlineFormCustomSelectPref" required>
                    <option value="" defaultValue>Choose...</option>
                    {this.props.data.map((item, key) => {
                        return (<option key={key} value={this.id}>{item.name}</option>)
                    })}
                </select>

                <br/>
                <br />
                <div className="row">
                    <div className="col-xs-10 col-sm-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                    <div className="col-xs-10 col-sm-5 col-sm-offset-2">
                        <button className="btn btn-danger" onClick={() => this.props.buttonClose()}>Cancel</button>
                    </div>
                </div>
            </form>




        )
    }
}