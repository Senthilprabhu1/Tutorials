const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.name) ? data.email : "";
    data.password = !isEmpty(data.name) ? data.password : "";
    data.password2 = !isEmpty(data.name) ? data.password2 : "";

    if(Validator.isEmpty(data.name)){
        errors.name = "Name is required";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "password is required";
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password is required";
    }

    if(!Validator.isLength(data.password, {min : 6, max : 25})){
        errors.password = "Password must be atleat 6 characters";
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Password must match";
    }

    return{
        errors,
        isValid : isEmpty(errors)
    };

};