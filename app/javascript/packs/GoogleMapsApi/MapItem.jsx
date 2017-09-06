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

    onClick() {
        console.log('on click map');
        this.setState({clickOn: !this.state.clickOn});
    }


    render() {

        return (
            <div>
                {this.state.clickOn ? <p className="triangle-isosceles top">{this.props.name}</p> : ''}

                <div className="mapPin" onClick={this.onClick = this.onClick.bind(this)}>
                </div>
            </div>
        )
    }
}