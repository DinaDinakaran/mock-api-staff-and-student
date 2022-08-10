import React, { useState} from 'react'
import {url1 } from "../../../App"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import "./addstaff.css"

export default function Addstaff () {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState(0)
  const [department, setDepartment] = useState('')
  const [name, setName] = useState('')
  const handleAdd = async() => {
  await axios.post(url1,  {
    name,
    email,
    age,
    phone,
    department
  })
 
   
    navigate("/allstaff")
  }
  return (
    <div className='addstudent'>
      <>
        <label className='title'>Name:</label><br />
        <input className='inputval' type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label className='title'>Email:</label><br />
        <input className='inputval' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label className='title'>Age:</label><br />
        <input className='inputval' type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label>phon Number:</label><br />
        <input className='inputval' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
        <label className='title'>Department:</label><br />
        <input className='inputval' type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <br />
        <button className='submit-btn' onClick={() => handleAdd()}>Add Student</button>
      </>
    </div>
  )
}
