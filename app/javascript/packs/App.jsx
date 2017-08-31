import React from 'react'
import Header from './Header'
import NewRestaurant from "./NewRestaurant"
import RestaurantsPage from "./RestaurantsPage"

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            current_page: 'restaurants',
        }

        this.navigateToNew = this.navigateToNew.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
    }

    navigateToNew() {
        this.setState({current_page: 'new'})
    }

    navigateBack() {
        this.setState({current_page: 'restaurants'})
    }

    render() {
        console.log('location: ', 'App');

        let body = null;
        if (this.state.current_page == 'restaurants') {
            body =  <RestaurantsPage />
        }
        else if(this.state.current_page == 'new') {
            body = <NewRestaurant />
        }
        return (
            <div>
                <Header navigateNew={this.navigateToNew}/>

                <div className="container">
                    {body}
                </div>
            </div>
        )
    }
}


export default App