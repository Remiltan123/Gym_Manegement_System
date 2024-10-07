import React, { useState } from 'react'

export const AddTrainer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: '',
    praticetime: '', 
  });

  const HandleClick = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTrainer ();
    console.log('Form data submitted:', formData);
  };

  const AddTrainer = async()=>{
    try{
      const response = await fetch("http://localhost:8080/Trainer/saveTrainer",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
      })
      if(response.ok){
        alert("Trainer Added Succuessful")
      }else{
        alert("Failed to Add the Member")
      }
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className='container custom-container'>
      <h2>Add Trainer</h2>

      <form onSubmit={handleSubmit}>

        <div className='form-group mb-3'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className='form-control'
            name='name'
            value={formData.name}
            onChange={HandleClick}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={HandleClick}
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className='form-control'
            name='address'
            value={formData.address}
            onChange={HandleClick}
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor="PayMent">Payment for Day to 1 person</label>
          <input
            type="number"
            className='form-control'
            name='payment'
            value={formData.payment}
            onChange={HandleClick}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="PracticeTime">Practice Time</label> 
          <input
            type="text"
            className="form-control"
            name="praticetime"
            value={formData.praticetime} 
            placeholder='4.00 pm to 6.00pm'
            onChange={HandleClick}
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>Add Trainer</button>
      </form>
    </div>
  )
}
