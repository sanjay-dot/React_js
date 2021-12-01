const Signup=()=>{
  return(
    <div class="container-fluid col-md-5 mt-5 p-2" id="form-bg">
<form>
  <div class="container col-8 font-weight-bold p-2" >
    <div class="row bg-light font-weight-bold p-2">
    <div class="col"><h2>SignUp -User</h2>
      </div>
      </div>
  
<div class="form-group p-1 ">
    <label id="container-form">Full Name</label>
   <input type="text"  class="form-control"  placeholder="Enter your Name"/>
</div>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control"  placeholder="Enter email"/>
    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
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

export default Signup;