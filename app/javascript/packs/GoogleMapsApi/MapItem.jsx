import React from 'React'
import PropTypes from 'prop-types';

export default class MapItem extends React.Component {

    static propTypes = {
        name: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            clickOn: false
        }
    }

    // onClick() {
    //     this.setState({clickOn: !this.state.clickOn});
    // }

    //onClick={this.onClick.bind(this)}
    render() {
        return (
            <div className="mapPin">
            </div>
        )
    }
}