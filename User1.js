import { useState } from "react";

const Signup=()=>{

  const [Update,SetUpdated] = useState({});
  const[EnteredData,SetEnteredData] = useState({});

  const inputHandler=(e)=>{
    SetEnteredData({ ...EnteredData, [e.target.name]: e.target.value });
  }
  const SubmitHandler=(e)=>{
    e.preventDefault();
    
    SetUpdated(EnteredData);

  } 
  console.log(Update);
  return(
    <div className="container-fluid col-md-5 mt-5 p-2" id="form-bg">
<form onSubmit={SubmitHandler}>
  <div className="container col-8 font-weight-bold p-2" >
    <div className="row bg-light font-weight-bold p-2">
    <div className="col"><h2>SignUp -User</h2>
      </div>
      </div>
  
<div className="form-group p-1 ">
    <label id="container-form">Full Name</label>
   <input type="text"  className="form-control" name="Name" placeholder="Enter your Name" onChange={inputHandler}/>
</div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control"  name ="Mail"placeholder="Enter email"onChange={inputHandler}/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" name="Password" placeholder="Password" onChange={inputHandler}/>
  </div>

  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control" name="Confirm_Pass" placeholder="Password" onChange={inputHandler}/>
  </div>

  <b>Gender</b>
  <div className="row">
  <div className="form-check">
   
  <input className="form-check-input ml-2" type="radio" name="Gender"/>
  <label className="form-check-label ml-4" name="Gender">Male</label>

  <input className="form-check-input ml-4" type="radio" name="Gender"/>
  <label className="form-check-label ml-5" name="Gender">Female</label>
</div>
</div>

  <button type="submit" className="btn btn-primary mb-3 mt-3 col-6 ml-5">Submit</button>
  </div>
</form>
    </div>
  
    );
}


export default Signup;