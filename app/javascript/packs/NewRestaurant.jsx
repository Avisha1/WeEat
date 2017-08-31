import React from 'react'


export default class NewRestaurant extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         cuisine: '',
    //         tenbis: false,
    //         address: '',
    //         maxDeliveryTime: ''
    //     }
    // };

    // newRestaurantSubmit = (e) => {
    //     e.preventDefault();
    //     $.ajax({
    //         url: '/resturants',
    //         dataType: 'json',
    //         type: 'POST',
    //         data: {resturant: {name: this.state.name,
    //             tenbis: this.state.tenbis,
    //             address: this.state.address,
    //             max_delivery_time: this.state.maxDeliveryTime,
    //             cuisine_id: this.state.cuisine},
    //         },
    //         success: function() {
    //             window.location.href = "/";
    //         }
    //     });
    // };

    cuisines = ['Indian','French', 'Italian', 'Cafe', 'Bakery', 'fish', 'Pizza', 'Burger'];


    newRestaurantSubmit() {

        //valid params

        //make post call

    }

    render() {
        return (

            <div>
                {console.log('NAVIGATION', 'NewRestaurant page')}
                <br />
                <h3> Add New Restaurant: </h3>
                <br />
                <form className="restaurant-form" onSubmit={this.newRestaurantSubmit}>

                    <div className="row">

                        <div className="col-xs-4 col-sm-5">
                            <label>Restaurant name:</label>
                            <input type="text" className="form-control" placeholder="Write here the restaurant's name"/>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-xs-4 col-sm-5">
                            <label>Address:</label>
                            <input type="text" className="form-control" placeholder="Address"/>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-xs-4 col-sm-5">
                            <label>Accept 10 bis? <input className="form-check-input" type="checkbox" value=""/></label>
                        </div>
                    </div>

                    <br />


                    <label>Cuisines:</label>
                    <br />
                    <select className="custom-select col-xs-4 col-sm-5" id="inlineFormCustomSelectPref">
                        <option value="" defaultValue>Choose...</option>
                        {this.cuisines.map((item, key) => {
                            return (<option key={key} >{item}</option>)
                        })}
                    </select>
                    
                </form>

            </div>
        )
    }
}

