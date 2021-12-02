import { useState } from "react";

const SignupMech=()=>{

    const [Update2,SetUpdated2] = useState({});
    const[EnteredData2,SetEnteredData2] = useState({});
  
    const inputHandler2=(e)=>{
      SetEnteredData2({ ...EnteredData2, [e.target.name]: e.target.value });
    }
    const SubmitHandler2=(e)=>{
      e.preventDefault();
      
      SetUpdated2(EnteredData2);
  
    } 
    console.log(Update2);
    return(
      <div className="container-fluid col-md-8 p-2" id="form-bg">
  <form onSubmit={SubmitHandler2}> 
    <div className="container col-8 font-weight-bold p-2" >
      <div className="row bg-light font-weight-bold p-2">
      <div className="col"><h2>SignUp -Mechanic</h2>
        </div>
        </div>
  <div className="form-group p-1 ">
      <label id="container-form">Full Name</label><sup style={{color:"red"}}>*</sup>
     <input type="text" name="Name" className="form-control" required  placeholder="Enter your Name" onChange={inputHandler2}/>
  </div>
  <div className="form-group p-1 ">
      <label>Address</label><sup style={{color:"red"}}>*</sup>
     <input type="text" name="Address"  className="form-control" required  placeholder="Enter your Address"onChange={inputHandler2} />
  </div>

  <label>PinCode</label>
  <div className ="form-group p-1">
  <input id="zip" name="zip" type="text" className="form-control" pattern="[0-9]*"onChange={inputHandler2}/>

      </div>
    <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" name="Mail"  placeholder="Enter email"onChange={inputHandler2}/>
      <small className="form-text text-muted">Not Mandatory.</small>
    </div>
    <div className="form-group p-1 ">
      <label>Mobile</label><sup style={{color:"red"}}>*</sup>
     <input type="text" name="Mobile"  className="form-control" required  placeholder="Mobile Number"onChange={inputHandler2} />
  </div>

  <label>Location</label><sup style={{color:"red"}}>*</sup>
  <div className="input-group mb-3">
  <select className="custom-select" name="Location" onChange={inputHandler2}>
    <option value="1">Chitlapakkam</option>
    <option value="2">Chromepet</option>
  </select>
</div>
    <div className="form-group">
      <label>Password</label><sup style={{color:"red"}}>*</sup>
      <input type="password" name="Password" onChange={inputHandler2} className="form-control"  placeholder="Password"/>
    </div>
  
    <div className="form-group">
      <label>Confirm Password</label><sup style={{color:"red"}}>*</sup>
      <input type="password" name="Confirm_Pass"  onChange={inputHandler2} className="form-control"  placeholder="Password"/>
    </div>
  
    <b>Gender</b>
    <div className="row">
    <div className="form-check">
     
    <input className="form-check-input ml-2"onChange={inputHandler2} type="radio" name="Gender" value="option1" checked/>
    <label className="form-check-label ml-4" name="Gender">Male</label>
  
    <input className="form-check-input ml-4" onChange={inputHandler2} type="radio" name="Gender"/>
    <label className="form-check-label ml-5" name="Gender">Female</label>
  </div>
  </div>
  
    <button type="submit" className="btn btn-primary mb-3 mt-3 col-6 ml-5">Submit</button>
    </div>
  </form>
      </div>
    
      );
  }
  
  export default SignupMech;