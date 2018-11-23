import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import fireBase from '../../config/fileBase';
import Login from '../Login'
import './style.scss';
import Routes from '../../router';
export default class Register extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeMobileNumber = this.changeMobileNumber.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.register = this.register.bind(this);
        this.setState({
            name:'',
            mobileNumber:'',
            password:'',
            Gender:'Select'
        })
    }
    register(e){
        e.preventDefault();
        fireBase.auth().createUserWithEmailAndPassword(this.state.name, this.state.password)
        .catch(error =>{
            console.log(error);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
    }
    
    changeMobileNumber(e){
        this.setState({
            mobileNumber: e.target.value
        })
    }

    changePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    
    genderChange(e){
        console.log(this.state);
        this.setState({
            age: e.target.value
        })
    }
    validateMobile(e){
        console.log(this.state);    
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <TextField label="Email" onChange={this.changeName}   fullWidth ></TextField>
                <TextField label="Mobile Number"  onChange={this.changeMobileNumber}  fullWidth></TextField>
                <TextField type="Password" label="Password"  onChange={this.changePassword} fullWidth></TextField>
                <button color="primary" className="primary" onClick={this.register}   >Submit</button>
                <button>Login</button>
            </form>
            </div>
        )
    }
}