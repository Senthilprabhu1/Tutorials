import React, { Component } from 'react';



class Form extends Component {
  constructor(){
    super();
    this.state={
      courselist : ['Nothing']
    /*  BElist :['Civil', 'Mechanical', 'ECE', 'EEE', 'CSE', 'IT', 'Others'],
    Bsclist :['Maths', 'Physics', 'Chemistry', 'Cs', 'B.com', 'BBA', 'Botany'],
    Otherlist :['Diploma', 'Teacher Training']*/
    }
  }
  

  handleChange(e){
  
  var courselist = this.state.courselist;
  for(var i=0;i<courselist.length;i++){
    courselist.splice(i,1);
  } 
  this.setState({courselist:courselist});
    if(e.target.value === 'B.E'){
      this.setState({
        courselist :['Civil', 'Mechanical', 'ECE', 'EEE', 'CSE', 'IT', 'Others']
      })
   }
   else if(e.target.value === 'B.Sc'){
    this.setState({
      courselist :['Maths', 'Physics', 'Chemistry', 'Cs', 'B.com', 'BBA', 'Botany']
    })
   }
   else if(e.target.value === 'Other'){
    this.setState({
      courselist :['Diploma', 'Teacher Training']
    })
   }

   e.preventDefault();
    
  }
  
  render() {
    let courselist = this.state.courselist.map(course =>{
      return <option key={course} value ={course}>{course}</option>
    })
    
   /* let AgeFromDate = require('age-calculator');
    let ageFromDate = new AgeFromDate(new Date(this.state.startDate.value)).age;
    console.log(this.state.startDate.value);
    console.log(ageFromDate);
   // this.props.setAge(ageFromDate);
*/
 
    return (
      <div className="Form">
        <h3>Registration Form</h3>
        <form>
          <div>
            <label>First name</label><br />
            <input type="text" ref="fname" />
          </div>          
          <div>
            <label>Last name</label><br />
            <input type="text" ref="lname" />
          </div>
          <div>
            <label>College/University</label><br />
            <input type="text" ref="clgname" />
          </div>          
                    
          <div>
            <label>Age</label><br />
            <input type="text" ref="age" ></input>

          </div>
          <div>
            <label>UG degree</label>
            <select ref="degree" value={this.state.value} onChange={this.handleChange.bind(this)}  >
              <option value="Select">Select</option>
              <option value="B.E">B.E</option>
              <option value="B.Sc">B.Sc</option>
              <option value="Other">Other</option>
            </select>  
          </div>
          <div>
            <label>Course</label>
            <select ref="course">
              {courselist}
            </select>  
          </div>                    
        </form>
      </div>
    );
  }
}

export default Form;
