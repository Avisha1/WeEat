import React from 'react'
import Header from './headers_footers/Header'
import Footer from './headers_footers/Footer'
import ContentPage from "./ContentPage"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            current_page: 'restaurants',
            cuisines: []
        }

        this.navigateToNew = this.navigateToNew.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/v1/cuisines/get_all_cuisines.json')
            .then(response => response.json())
            .then((items) => this.setState(({cuisines: items})));
    }

    navigateToNew() {
        this.setState({current_page: 'new'})
    }

    navigateBack() {
        this.setState({current_page: 'restaurants'})
    }

    render() {
        console.log('location: ', 'App');

        return (
            <div className="bg">
                <Header cuisines={this.state.cuisines}/>

                <div>
                    <ContentPage cuisines={this.state.cuisines}/>
                </div>

                <Footer />
            </div>
        )
    }
}


export default App