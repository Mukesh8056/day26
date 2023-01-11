import React ,{useState}from 'react'
import { Button,Form,Nav } from 'react-bootstrap';
import Employee from '../component/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';


function Add() {
    const[name,setname]=useState('')
    const[age,setage]=useState('')
    
     const createItem=(e)=>{
        e.preventDefault()
        let ids=uuid()
        let uniqueId=ids.slice(0,10)
        let a=name;
        let b=age;
        Employee.push({id:uniqueId,Name:a,Age:b});
     }



  return (<>
       <Nav class="navbar navbar-primary bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      CURD App
    </a>
  </div>
</Nav>
  <div style={{margin:"13rem"}}>
     <Link to={'/'}>
    <button type="submit" class="btn btn-primary">back</button>
    </Link>
    <Form >
   
  <div class="mb-3" >
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control"  placeholder='Name' onChange={(e)=>setname(e.target.value)}/>  
  </div>
  <div class="mb-3">
    <label for="Age" class="form-label">Age</label>
    <input type="text" class="form-control" placeholder='Age' onChange={(e)=>setage(e.target.value)}/>
  </div>
  <Link to={'/'}>
  <Button type="submit" class="btn btn-primary" onClick={(e)=>createItem(e)}>Submit</Button>
  </Link>
</Form></div></>
  )
}

export default Add