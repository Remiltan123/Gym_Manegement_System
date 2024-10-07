import React, { useState } from 'react';
import './AddMember.css';

export const AddMember = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        trainer: '',
        workDay: '',
    });

    const trainers = ['Trainer 1', 'Trainer 2', 'Trainer 3', 'Trainer 4'];
    const daysOfWeek = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        AddMembers(); // Call AddMembers to submit the form data
    };

    const AddMembers = async () => {
        console.log("Form Data:", formData); // Debug log
        try {
            const response = await fetch('http://localhost:8080/SaveMember', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response) {
                const data = await response.json();
                console.log(data)
                alert('Member Added Successfully');
            } else {
                alert("Failed to add member")
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('An error occurred while adding the member.');
        }
    };
    

    return (
        <div className="container custom-container">
            <h2>Add Gym Member</h2>
            <form onSubmit={formSubmit}> {/* Call formSubmit here */}
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
                    <label htmlFor="workingDays">Workout Days</label>
                    <select
                        className="form-control"
                        id="workingDays"
                        name="workDay"
                        value={formData.workDay}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Days</option>
                        {daysOfWeek.map((days, index) => (
                            <option key={index} value={days}>{days}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add Member</button>
            </form>
        </div>
    );
};
