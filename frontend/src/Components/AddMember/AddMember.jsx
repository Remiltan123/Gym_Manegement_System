import React, { useState } from 'react'
import './AddMember.css'


export const AddMember = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        trainer: '',
        workingDays:'',
    });

    const trainers = [
        'Trainer 1',
        'Trainer 2',
        'Trainer 3',
        'Trainer 4'
    ];

    const daysOfWeek = [
        '1 Day',
        '2 Days',
        '3 Days',
        '4 Days',
        '5 Days',
        '6 Days',
        '7 Days'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (dayId) => {
        setFormData(prevState => {
            const { workoutDays } = prevState;
            if (workoutDays.includes(dayId)) {
                return {
                    ...prevState,
                    workoutDays: workoutDays.filter(id => id !== dayId)
                };
            } else {
                return {
                    ...prevState,
                    workoutDays: [...workoutDays, dayId]
                };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="container custom-container ">
            <h2>Add Gym Member</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="trainer">Select Trainer</label>
                    <select
                        className="form-control"
                        id="trainer"
                        name="trainer"
                        value={formData.trainer}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a trainer</option>
                        {trainers.map((trainer, index) => (
                            <option key={index} value={trainer}>{trainer}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="workingDays">WorkOut Days</label>
                    <select
                        className="form-control"
                        id="workingDays"
                        name="workingDays"
                        value={formData.workingDays}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Days</option>
                        {daysOfWeek.map((trainer, index) => (
                            <option key={index} value={trainer}>{trainer}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add Member</button>
            </form>
        </div>
    );
};

