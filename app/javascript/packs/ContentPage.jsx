import React from 'react'
import RestaurantList from './RestaurantList'
import Filters from './Filters/Filters'
import Map from './GoogleMapsApi/Map'


class ContentPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }

        this.filterByCuisine = this.filterByCuisine.bind(this);
        this.filterByRating = this.filterByRating.bind(this);
        this.filterByDeliveryTime = this.filterByDeliveryTime.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');

        fetch('http://localhost:3000/restaurants.json')
            .then(response => response.json())
            .then((items) => this.setState(({data: items})));

    }

    filterByCuisine(val) {
        this.setState({cuisineFilter: val})
    }

    filterByRating(val) {
        this.setState({ratingFilter: val})
    }

    filterByDeliveryTime(val) {
        this.setState({deliveryTimeFilter: val})
    }

    render() {
        console.log('render', this.state);
        let restaurantFiltered = this.state.data.slice();

        if (this.state.cuisineFilter) {
            restaurantFiltered = restaurantFiltered.filter(res => res.cuisine_name.toLowerCase() == this.state.cuisineFilter.toLowerCase())
        }

        if (this.state.ratingFilter) {
            restaurantFiltered = restaurantFiltered.filter(res => res.rating == this.state.ratingFilter)
        }

        if (this.state.deliveryTimeFilter) {
            restaurantFiltered = restaurantFiltered.filter(res => res.max_delivery_time <= this.state.deliveryTimeFilter)
        }

        return (
            <div>
                <Filters filterCuisine={this.filterByCuisine}
                         filterRating={this.filterByRating}
                         filterDeliveryTime={this.filterByDeliveryTime}
                         cuisines={this.props.cuisines}/>

                <div className="container">
                    <div className="row">

                        <div className="col-sm-6 col-md-6">
                            <RestaurantList data={restaurantFiltered}/>
                        </div>

                        <div className="col-sm-6 col-md-6">
                            <Map data={restaurantFiltered}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default ContentPage