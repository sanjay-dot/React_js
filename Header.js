import {NavLink} from 'react-router-dom';

const Header =()=>{
    return(
        <div className="row">
        <div className="container-fluid bg-dark p-3">
            <div className="col text-light">
                <h2 className ="mt-2 col">Find Mechanic</h2>        
            </div>
                    <div className ="col-md-3 float-right">
                    <button className = "btn btn-primary"><NavLink to="./users">SignUp as User</NavLink></button>
                    <button className = "btn btn-info ml-4">Signup as Mechanic</button>
                    </div> 
             </div>
        </div>
        
    );
}

export default Header;