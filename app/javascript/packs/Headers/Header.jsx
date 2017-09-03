import React from 'react'
import Modal from 'react-modal'
import FormNewRestaurant from '../forms/FormNewRestaurant'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '25%',
        background                 : '#F0F8FF',
    }
};

export default class Header extends React.Component {

    constructor(){
        super();

        this.state = {
            showDialog: false,
            data: []
        }

        this.setShowDialog = this.setShowDialog.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');

        fetch('http://localhost:3000/api/v1/cuisines/get_all_cuisines.json')
            .then(response => response.json())
            .then((items) => this.setState(({data: items})));
    }

    setShowDialog(){
        this.setState({showDialog: true})
    }

    closeModal(){
        this.setState({showDialog: false})
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img className="icon" alt="Brand"
                                     src="https://i.vimeocdn.com/portrait/17987552_300x300"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <header className="business-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                <h1>Eat Drink Burp</h1>

                                <p>Feed the world, make it a better place.</p>
                                <br/>

                                <button type="button" className="btn btn-danger btn-circle btn-lg pull-left"
                                        onClick={this.setShowDialog}>
                                    <i className="glyphicon glyphicon-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div>
                    <Modal
                        isOpen={this.state.showDialog}
                        contentLabel="Example Modal"
                        style={customStyles}>

                        <h3> Add New Restaurant: </h3>
                        <br />
                        <FormNewRestaurant data={this.state.data} buttonClose={this.closeModal}/>

                    </Modal>
                </div>
            </div>
        );
    }

}