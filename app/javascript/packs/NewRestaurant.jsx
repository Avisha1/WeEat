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

    newRestaurantSubmit() {

    }

    render() {
        return (

            <div>
                {console.log('NAVIGATION', 'NewRestaurant page')}
                <form className="restaurant-form" onSubmit={this.newRestaurantSubmit}>
                    {/*<h1>New Restaurant</h1>*/}
                    {/*<form className="restaurant-form" onSubmit={this.newRestaurantSubmit}>*/}
                    {/*<div className="form-inputs"/>*/}
                    {/*{this.renderNameInput()}*/}
                    {/*{this.renderCuisineSelect()}*/}
                    {/*{this.renderTenbisCheck()}*/}
                    {/*{this.renderAddressInput()}*/}
                    {/*{this.renderMaxDeliveryTimeSelect()}*/}
                    {/*<div className='row'>*/}
                    {/*<div className='col-sm-4'>*/}
                    {/*<input type="submit" value="Save" className='btn btn-primary' />*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</form>*/}
                </form>

            </div>
        )
    }
}

