import React from 'react'
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import MapItem from './MapItem'

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        restList: PropTypes.array,
        center: PropTypes.array,
        zoom: PropTypes.number,
    };

    static defaultProps = {
        center: [32.079182, 34.785519],
        zoom: 13
    };

    render() {
        const restList = this.props.data;
        return (
            <div className="map">
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyCgtxZUekCAg5pGCh-lpncLT91Qpwk4TBU'}}
                    center={this.props.center}
                    zoom={this.props.zoom}>

                    {restList.map((item, key) => {
                        return (
                            <MapItem key={key}
                                 lat={item.lat}
                                 lng={item.lon}
                                 name={item.name}
                                 />
                        )
                    })}
                </GoogleMap>
            </div>
        )
    }
}