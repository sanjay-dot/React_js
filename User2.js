const SignupMech=()=>{
    return(
      <div class="container-fluid col-md-8 p-2" id="form-bg">
  <form>
    <div class="container col-8 font-weight-bold p-2" >
      <div class="row bg-light font-weight-bold p-2">
      <div class="col"><h2>SignUp -Mechanic</h2>
        </div>
        </div>
  <div class="form-group p-1 ">
      <label id="container-form">Full Name</label><sup style={{color:"red"}}>*</sup>
     <input type="text"  class="form-control" required  placeholder="Enter your Name" />
  </div>
  <div class="form-group p-1 ">
      <label>Address</label><sup style={{color:"red"}}>*</sup>
     <input type="text"  class="form-control" required  placeholder="Enter your Address" />
  </div>

  <label>PinCode</label>
  <div class ="form-group p-1">
  <input id="zip" name="zip" type="text" class="form-control" pattern="[0-9]*"/>

      </div>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control"  placeholder="Enter email"/>
      <small class="form-text text-muted">Not Mandatory.</small>
    </div>
    <div class="form-group p-1 ">
      <label>Mobile</label><sup style={{color:"red"}}>*</sup>
     <input type="text"  class="form-control" required  placeholder="Mobile Number" />
  </div>

  <label>Location</label><sup style={{color:"red"}}>*</sup>
  <div class="input-group mb-3">
  <select class="custom-select">
    <option value="1">Chitlapakkam</option>
    <option value="2">Chromepet</option>
  </select>
</div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label><sup style={{color:"red"}}>*</sup>
      <input type="password" class="form-control"  placeholder="Password"/>
    </div>
  
    <div class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label><sup style={{color:"red"}}>*</sup>
      <input type="password" class="form-control"  placeholder="Password"/>
    </div>
  
    <b>Gender</b>
    <div class="row">
    <div class="form-check">
     
    <input class="form-check-input ml-2" type="radio" name="Gender" value="option1" checked/>
    <label class="form-check-label ml-4" name="Gender">Male</label>
  
    <input class="form-check-input ml-4" type="radio" name="Gender"/>
    <label class="form-check-label ml-5" name="Gender">Female</label>
  </div>
  </div>
  
    <button type="submit" class="btn btn-primary mb-3 mt-3 col-6 ml-5">Submit</button>
    </div>
  </form>
      </div>
    
      );
  }
  
  export default SignupMech;