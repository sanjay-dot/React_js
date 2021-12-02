import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <div className="container-fluid bg-dark p-3">

            <div className="row">
                <div className="col text-light">
                    <h2 className ="mt-2 col">Find Mechanic</h2>        
                </div>
                <div className ="col-lg-4 float-right">
                <Link to="/user"><button className = "btn btn-primary">SignUp as User</button></Link>
                <Link to="/mechanic">  <button className = "btn btn-info ml-4">Signup as Mechanic</button></Link>
                </div> 
             </div>
        </div>
        
    );
}

export default Header;