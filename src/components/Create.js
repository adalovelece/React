import React,{useState,useEffect} from 'react'
import axios from 'axios'
import StudentForm from './Form';
import './Popup.css'
import { boolean } from 'yup';

const Create = (props) => {
  const [formValues,setFormValues] = useState({
    name:'',username:'',email:'',address:'', checkbox:false})

   
    // *****************************************************
    const onSubmit = studentObject =>{
      axios.post('https://62289f859fd6174ca82a068c.mockapi.io/database', studentObject)
     .then((data) => {
      if (data.status === 201) {
        alert("Student successfully created");
        window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
    }
    



  return (
    <>
    <div className='popup-box mt-5'>
      <div className='box'>
      <span className="close-icon" onClick={props.handleClose}>x</span>
      <StudentForm className='mt-5' initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize
      > 
      Add User
     
    </StudentForm>
      </div>
    </div>
   
   </>

  )
}

export default Create

