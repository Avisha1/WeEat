import React from 'react'
import Header from './Headers/Header'
import ContentPage from "./ContentPage"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
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

        return (
            <div>
                <Header/>

                <div className="container">
                    <ContentPage/>
                </div>
            </div>
        )
    }
}


export default App