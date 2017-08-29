import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Restaurant from './Restaurant'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }


    componentWillMount() {
        console.log('componentWillMount');

        fetch('http://localhost:3000/restaurants.json')
            .then(response => response.json())
            .then((items) => this.setState(({data: items})));
    }

    render() {
        console.log('render', this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-8">

                        <ul className="list-group">
                            {
                                this.state.data.map((item, key) => {
                                    console.log('object from BE:', item)
                                    return (
                                        <li className="list-group-item" key={key}>
                                            <Restaurant data={item}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        {/*<div className="col-sm-8 col-md-8">*/}
                            {/*/!* here will be located the Google map *!/*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

// const RestaurantRow = (state) => {
//     <li>
//
//
//     </li>
// }

export default App