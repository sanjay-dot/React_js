
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import {Routes,Route} from "react-router-dom"
import Signup from './component/User1';
import SignupMech from './component/User2';

function App() {
    return ( 
      <div>
        <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<Signup/>}/>
        <Route path="/mechanic" element={<SignupMech/>}/>
        
        </Routes>  
      </div>
    )
}

export default App;
