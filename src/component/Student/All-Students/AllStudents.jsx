import React, { useState,useEffect } from 'react'
import "./allstudents.css"
import {url } from "../../../App"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import axios from 'axios';
export default function AllStudents() {
  

  const [studata, setStudata] = useState([])


 async function value (){
   const allstu = await axios.get(url)
   setStudata(allstu.data)
 }

  useEffect(()=>{
value();
  },[])
  const handledelete = async(id) => {
    await axios.delete(`${url}/${id}`)
    value();
    
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
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
    },
    {
      field: "action",
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/edit/${params.row.id}`}>
              <button className='stu-btn' >Edit</button>
            </Link>
            <DeleteOutlineIcon className='delete-btn' onClick={() => handledelete(params.row.id)} />

          </>
        )
      }

    }

  ];


  return (
    <>
      <div className='Allstudents'>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={studata}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  )
}
