import { useState } from "react";
import { Col, Image } from "react-bootstrap"
import logo from "../assets/image/logo.jpg"
import History from "./History";
import Home from "./Home";
import $ from 'jquery';

const Navbar = () => {
  let [active, setActive] = useState("home");
  
  const navProcess = (type) => {
    setActive(type)
    $('#home').removeClass("active")
    $('#history').removeClass("active")
    if(type == "home"){
      $('#home').addClass("active")
    } else if(type == "history") {
      $('#history').addClass("active")
    }
  }

  return (
    <>
    <Col className="myNavbar px-0 list-group">
      <Image src={logo} style={{maxWidth:"290px"}}/>
      <button type="button" class="list-group-item list-group-item-action">
        Login
      </button>
      <button type="button" onClick={()=> navProcess("home")} id="home" class="list-group-item list-group-item-action active">Home</button>
      <button type="button" onClick={()=> navProcess("history")} id="history" class="list-group-item list-group-item-action">History</button>
    </Col>
    <Col>
      {active == "home" && <Home/>}
      {active == "history" &&  <History />}
    </Col>
    </>
  )
}

export default Navbar;