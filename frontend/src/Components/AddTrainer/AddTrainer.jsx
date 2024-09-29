import React, { useState } from 'react'

export const AddTrainer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    PayMent: '',
    PraticeTime: '',
  });

  const HandleClick = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [value]: name })
  }

  return (
    <div className='container custom-container' >
      <h2>Add Trainer</h2>

      <form >

        <div className='form-group mb-3'>
          <label htmlFor="name">Name</label>
          <input type="text" className='form-control' name='name'
            value={formData.name} onChange={HandleClick} required />
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
          <input type="text" className='form-control' name='address'
            value={formData.address} onChange={HandleClick} required />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor=" PayMent">PayMent</label>
          <input type="Number" className='form-control' name='PayMent'
            value={formData.PayMent} onChange={HandleClick} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="address">PraticeTime</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.PraticeTime}
            onChange={HandleClick}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary' >Add Trainer</button>
      </form>

    </div>
  )
}
