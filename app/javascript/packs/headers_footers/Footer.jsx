import React from 'react'

export default class Footer extends React.Component {



    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    <p className="navbar-text pull-left ">© 2017 - Site Built By Mr. L.
                    </p>

                    <a href="https://plus.google.com/105946862787038835084" className="navbar-btn btn-primary btn pull-right">
                        <span className="glyphicon glyphicon-star"></span> Follow on Google+</a>
                </div>


            </div>
        );
    }

}