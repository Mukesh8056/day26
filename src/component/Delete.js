import React from 'react'
import{Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Delete() {
    alert("Deleted Successfully")
  return (
    
    <>
      <Nav class="navbar navbar-primary bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      CURD App
    </a>
  </div>
</Nav>
    <h1 style={{margin:"20rem" }}> Deleted Successfully</h1>
    </>
  )
}

export default Delete