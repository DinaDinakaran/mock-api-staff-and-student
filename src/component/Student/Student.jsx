import React,{ useState,useEffect} from 'react'
import {url} from "../../App"
import { DataGrid} from '@mui/x-data-grid';
import "./student.css"
import { Link } from 'react-router-dom';
import axios from 'axios';




export default function Student() {
  const [studata, setStudata] = useState([])
  async function value (){
     const allstu = await axios.get(url)
     setStudata(allstu.data)
   }
  
    useEffect(()=>{
  value();
    },[])

  const columns = [
    { field: 'id', headerName: 'ID', width:70 },
    { field: 'name', headerName: 'Name', width: 180 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 70,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 230,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 190,
      },
    {
        field: 'rank',
        headerName: 'Rank',
        type: 'number',
        width: 80,
      }
]


  return (

   <div className="student">
    <div className="edit">
    <Link to="/allstudents">
      <button className='edit-btn'>Edit List</button>
    </Link>
    <Link to="/addstudent">
      <button className='Add-btn'>Add List</button>
    </Link>
    </div>
     <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={studata}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   </div>
  )
}
