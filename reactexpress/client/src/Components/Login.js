import React, { Component } from 'react';



class Login extends Component {
constructor(){
    super();
    this.state={
        name : '',
        email : '',
        password : '',
        password2 : '',
        errors : {}
    }
}
onSubmit(e){
    e.preventDefault();
    const newUser = {
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
        password2 : this.state.password2
    };
    /*alert("Authenticating user");
    fetch('/server.js', {
        method : 'POST',
        body : JSON.Stringify(this.state),

    })
    .then(res => {
        if(res.status === 200){
            
            this.props.history.push('/');
        }
        else{
            const error = new Error(res.error);
            throw error;
        }
    })
    .catch(err => {
        console.error(err);
    })*/
}
onChange(e){
    this.setState({
        [e.target.name]:  e.target.value,
    });
    console.log(this.state.eMail);
}
  render() {

        const { errors } = this.state;
    return (
      <div className="Login">
        <form>
            <input type="text" name="email" placeholder="Email" value={this.state.eMail} onChange={e => this.onChange(e)}></input>
            <input type="password" name="password" placeholder="Password" value={this.state.passWord} onChange={e => this.onChange(e)}></input>
            <input type="submit" onSubmit={this.onSubmit} value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Login;
