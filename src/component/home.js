import React from 'react'
import { Button,Table,Nav } from 'react-bootstrap';
import Employee from '../component/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from 'react-router-dom'


export default function home() {
            
   
    const deleteItem =(id)=>{
        let index = Employee.map((e1)=>{
            return e1.id
        }).indexOf(id);

        Employee.splice(index,1)
        
        
    }
   
   
  return <>
  <Nav class="navbar navbar-primary bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      CURD App
    </a>
  </div>
</Nav>
  <div style={{margin:"13rem"}}>
<Table class="table table-hover">
<thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  <tbody>
    {
        Employee && Employee.length  > 0?
        Employee.map( (e)=>{
            return(
            <tr>
                <td>
                     {e.Name}
                </td>
                <td>
                     {e.Age}
                </td>
                <td>
                
                    <Button  type="button" class="btn btn-primary"  onClick={()=>alert("Edit is not available")}>Edit</Button>
                    <Link to={'/Delete'}>
                    <Button  type="button" class="btn btn-primary" onClick={()=>deleteItem(e.id)} >Delete</Button>
                    </Link>
                </td>
            </tr>)
            })
            :
            " NO data Available"
    }
  </tbody>
</Table>
<br></br>
<Link to={'/Add'}>
<Button type="button" class="btn btn-primary" >Create</Button>
</Link>
</div>
</>
}
