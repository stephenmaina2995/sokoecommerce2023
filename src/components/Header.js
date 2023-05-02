import React from "react";
import "../App.css";

function Header(props) {
  return (
    <div className='flex shopping-card'>
      <div onClick={()=>props.handleShow(false)}>Shopping cart</div>
      <div onClick={()=>props.handleShow(true)}>Cart</div>
<sup>{props.count}</sup>
    </div>
  );
}

export default Header;
