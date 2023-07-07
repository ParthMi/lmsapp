// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import Books from "./components/Books";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const App = () => {    

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/components/Books" element={<Books/>}></Route>
          <Route path="/components/Login" element={<Login/>}></Route>
          <Route path="/components/Register" element={<Register/>}></Route>
          <Route path="/components/Dashboard" element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App