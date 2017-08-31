import React from 'react'


export default class Header extends React.Component {

    render() {
        return (
            <header className="business-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <h1>Eat Drink Burp</h1>

                            <p>Feed the world, make it a better place.</p>
                            <br/>

                            <button type="button" className="btn btn-danger btn-circle btn-lg" onClick={() => this.props.navigateNew()}>
                                <i className="glyphicon glyphicon-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }


}