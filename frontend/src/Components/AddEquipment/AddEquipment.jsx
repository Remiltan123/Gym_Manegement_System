import React, { useState } from 'react'

export const AddEquipment = () => {
    const [formData, setFormData] = useState({
        name: '',
        availableAmount: '',
        benefits: '',
        cost: '',
        deliveryDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedDate = formData.deliveryDate.split('-').reverse().join('/');
    
        const modifiedFormData = {
            ...formData,
            deliveryDate: formattedDate
        };

        AddEquipment(modifiedFormData );
        console.log('Equipment Data Submitted:', formData);
       
    };

    const AddEquipment = async (modifiedFormData) => {
        try {
            const response = await fetch('http://localhost:8080/Equipment/AddEquipment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(modifiedFormData),
            });

            if (response) {
                const data = await response.json();
                console.log(data)
                alert('Equipment Added Successfully');
            } else {
                alert("Failed to add member")
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('An error occurred while adding the member.');
        }
    }

    return (
        <div className='container custom-container'>
            <h2>Add Gym Equipment</h2>

            <form onSubmit={handleSubmit}>
                {/* Equipment Name */}
                <div className='form-group mb-3'>
                    <label htmlFor="equipmentName">Equipment Name</label>
                    <input
                        type="text"
                        className='form-control'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter equipment name"
                        required
                    />
                </div>

                {/* Available Amount */}
                <div className='form-group mb-3'>
                    <label htmlFor="availableAmount">Available Amount</label>
                    <input
                        type="number"
                        className='form-control'
                        name='availableAmount'
                        value={formData.availableAmount}
                        onChange={handleChange}
                        placeholder="Enter the available amount"
                        required
                    />
                </div>

                {/* Benefits */}
                <div className='form-group mb-3'>
                    <label htmlFor="benefits">Benefits of Equipment</label>
                    <textarea
                        className='form-control'
                        name='benefits'
                        value={formData.benefits}
                        onChange={handleChange}
                        placeholder="Describe the benefits of this equipment"
                        required
                    ></textarea>
                </div>

                {/* Cost */}
                <div className='form-group mb-3'>
                    <label htmlFor="cost">Cost</label>
                    <input
                        type="number"
                        className='form-control'
                        name='cost'
                        value={formData.cost}
                        onChange={handleChange}
                        placeholder="Enter the cost of the equipment"
                        required
                    />
                </div>

                {/* Delivery Date */}
                <div className='form-group mb-3'>
                    <label htmlFor="deliveryDate">Delivery Date</label>
                    <input
                        type="date"
                        className='form-control'
                        name='deliveryDate'
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type='submit' className='btn btn-primary'>
                    Add Equipment
                </button>
            </form>
        </div>
    );
}


