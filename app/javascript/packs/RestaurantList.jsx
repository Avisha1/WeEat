import React from 'react'
import Restaurant from './Restaurant'

class Restaurant_list extends React.Component {

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.data.map((item, key) => {
                        console.log('object from BE:', item);
                        return (
                            <li className="list-group-item" key={key}>
                                <Restaurant data={item}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Restaurant_list