import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
//import Homepage from './components/homepage';
//import Profile from './components/profile';
//import Message from './components/message';
//import Homepage1 from './components/homepage1';


class Homepage extends Component {

  onClick(e){
    e.preventDefault();
    this.props.logoutUser();

  }

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      
        <div className="App">
         <h1>Hai {user.name.split(" ")[0]}</h1>
         <br /><br /><br />
         <button type="submit" onClick={this.onClick.bind(this)}>Logout</button>
        </div>
     
    );
  }
}

Homepage.proptypes = {
  logoutUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps, {logoutUser})(Homepage);
