import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Form, FormGroup, Input, Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import {registerUser} from '../../actions/authActions';
import classnames from 'classnames';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';

//import Homepage1 from './homepage1';


class Register extends Component {
constructor(){
    super();
    this.state={
        name : '',
        email : '',
        password : '',
        password2 : '',
        errors : {},
        success : false
    }
}

componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({
            errors : nextProps.errors
        });
    }
}

componentDidMount(){
    if(this.props.auth.isAuthenticated){
        this.props.history.push('/homepage');
    }
}

onSubmit(e){
    e.preventDefault();
   // console.log(this.state.name);
    const newUser = {
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
        password2 : this.state.password2
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
    
}
onChange(e){
    this.setState({
        [e.target.name]:  e.target.value,
    });
    console.log(this.state.name);
}
  render() {

        const { errors } = this.state;
    return (
        <Container>
                
        <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }} className="logincontent">
        <div className="FormCenter">

 
        <Form className="FormFields" onSubmit={this.onSubmit.bind(this)}>
    
        <div>
        <h1>Register</h1>
        </div>
            
        <FormGroup>
    
    
      
        <Input type="text" name="name" id="examplename" placeholder="Username" value={this.state.name} onChange={e =>this.onChange(e)} error={errors.name} className={classnames("", { invalid : errors.name})} />
            <span className="red-text">{errors.name} </span>
            <br />
        </FormGroup>
        <FormGroup>
        
        <Input type="email" name="email" id="exampleemail" placeholder="Email" value={this.state.email} onChange={e =>this.onChange(e)} error={errors.email} className={classnames("", { invalid : errors.email})} />
            <span className="red-text">{errors.email}</span>
        </FormGroup>
        <FormGroup>
        <br />
        <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={e =>this.onChange(e)} error={errors.password} className={classnames("", { invalid : errors.password})} />
        <span className="red-text">{errors.password}</span>
        </FormGroup>
        <FormGroup>
        <br />
        <Input type="password" name="password2" id="examplePassword2" placeholder="password" value={this.state.password2} onChange={e =>this.onChange(e)} error={errors.password2} className={classnames("", { invalid : errors.password2})} />
            <span className="red-text">{errors.password2}</span>
        </FormGroup>
        
  
  

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="google.com" className="FormField__TermsLink">Terms of service</a>
            </label>
          </div>

          <div className="FormField">
          <Button color="primary" size="lg" className ="login">Register</Button>
        
        <br />
          <label className="mem">Already have an account.?</label> 
              <Link to="/Login" className="loginlink">Login</Link>
          </div>
     
       
        </Form>
        {this.state.success && <Redirect push to='/Login' />}
        </div>
        </Col>
      </Row>

      </Container>
    );
  }
}

Register.propTypes = {
    registerUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
    auth : state.auth,
    errors : state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
