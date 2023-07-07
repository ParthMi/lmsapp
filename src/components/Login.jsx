import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom";
import "./loginstyle.css"
const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('status') === "1") {
      navigate('/', { replace: true });
    }
  });


  const handleSubmit = (event) => {
     event.preventDefault();
     if(localStorage.getItem("username")===name){
      if(localStorage.getItem("password")===password){
        localStorage.setItem("status","1");
        navigate('/', { replace: true });
      }
      else{
        setError("Wrong password.")
      }
     }
     else{
      setError("Wrong Username,please try with another username.")
     }
  }


  return (
    <>
    <div className="form-container">
      <div className="title">Login</div><br></br>
      <div>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      <input className="submit" type="submit" />
      <p className="errormsg">{error}</p>
    </form>
    <p>Don't have an account yet? <Link to="/components/Register" className="a">Register</Link></p>
      </div>
    </div>
    </>
  )
}

export default Login
