import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('status') === "0") {
      navigate('/components/Login', { replace: true });
    }
  });
    return (
      <div>
        Dashboard
      </div>
    )  
}

export default Dashboard