import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import "./loginstyle.css"
const Register = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('status', '1');
    localStorage.setItem('email', email);
    localStorage.setItem('username', name);
    localStorage.setItem('password', password);
    navigate('/', { replace: true });

  }


  return (
    <>
    <div className="form-container">
      <div className="title">Register</div><br></br>
      <div>
      <form onSubmit={handleSubmit}>
      <label>Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> 
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
    </form>
    <p>Already have an account ? <Link to="/components/login" className="a">Login</Link></p>
      </div>
    </div>
    </>
  )
}

export default Register
