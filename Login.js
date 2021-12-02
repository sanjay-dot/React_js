const Login=()=>{
    let url ="#"
return(
    <div id="bg" className="p-4">
 <form>
     <div className ="container-fluid col-md-3 p-5 mt-5 ml-3 rounded" id="form">     
  <div className="form-group">
    <label>User Name</label>
    <input name ="Username" className="form-control" placeholder="Enter Username"/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input name="Password" type="password" className="form-control"  placeholder="Password"/>
  </div>

  <div class="row">
  <div class="col ml-1 mt-2">
  <button type="submit" className="btn btn-primary col-4 ">Log in</button>

  <div className="col- float-right">
  <a href={url}>Forgot Password?</a>
  </div>
  </div>
  </div>

  </div>
</form>
    
    </div>
);
}

export default Login;