import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Input, Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';
import classnames from 'classnames';

import { loginUser } from '../../actions/authActions';


class Login extends Component {
constructor(){
    super();
    this.state={
        email : '',
        password : '',
        errors : {},
        success : false
    }
}

componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
        this.props.history.push("/homepage");
    }
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
    const userData = {
        email : this.state.email,
        password : this.state.password,
    };
    this.props.loginUser(userData);
}
 

onChange(e){
    this.setState({
        [e.target.name]:  e.target.value,
    });
}
 
render() {

    const { errors } = this.state;
    return (
        <Container>
                
        <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }} className="logincontent">
        <div className="FormCenter">
        
            <Form onSubmit={this.onSubmit.bind(this)} className="FormFields" >
            <div className="FormField">
            <div>
            <h1>Login</h1>
            </div>
        
       
        <FormGroup>
                
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={this.state.email} onChange={e =>this.onChange(e)} error={errors.email} className={classnames("", { invalid : errors.email})} />
            <span className="red-text">{errors.email}</span>
            <br />
            </FormGroup>
            <FormGroup>
            
            <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={e=> this.onChange(e)} error={errors.password} className={classnames("", { invalid : errors.password})} />
            <span className="red-text">{errors.password}</span>            
            </FormGroup>

        
            </div>
            <div>
            <label className="checkbox">
            <input type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={e => this.onChange(e)} />Remember Me
            </label>
    
     
            
            <Link to="/" ><label className="forget">Forget password.?</label></Link><br />
            </div>
            <Button color="primary" size="lg" className ="login">Login</Button>
            <br />

            <div>
            <Link to="/"><label className="rec">Recover password</label></Link>
            <Link to="/"><label className="acc">Create an account</label></Link>

                    
                </div>
                </Form>
                {this.state.success && <Redirect push to='/homepage' />}
            </div>
            </Col>
            </Row>

  </Container>
    );
  }
}

Login.propTypes = {
    loginUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth,
    errors : state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
