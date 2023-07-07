import { Outlet, Link,useNavigate } from "react-router-dom";
import './navstyle.css';
const Layout = () => {
    const navigate=useNavigate();
    function logout(){
        localStorage.setItem("status","0");
        navigate('/', { replace: true });
    }
    return (
        <>  
            <nav class="navbar">
                <Link to="/" className="navbar-logo">Home</Link>
                <ul class="navbar-links">
                
                    <li>
                        <Link to="/components/Dashboard" className="a">My Dashboard</Link>
                    </li>
            {localStorage.getItem("status") === "1" ? (
            <li>
                    <button className="logout-btn" onClick={logout}>logout</button>
                </li>
                
  ) : (
    <span></span>
  )}
                </ul>
            </nav>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}

            <Outlet />
        </>
    )
};

export default Layout;