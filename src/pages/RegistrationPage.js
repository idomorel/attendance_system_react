




import React, { useState } from 'react';
import registerUser from '../api/register';

const RegisterPage = () => {
    console.log('RegisterPage');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
        email: '',
        area: '',
        // ... other fields as needed
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form data raw:', formData);
        // const response = await registerUser(formData);
        // console.log('Registration successful:', response);
        try {
            const response = await registerUser(formData);
            console.log('Registration successful:', response);
            // Handle successful registration, e.g., redirect to login page
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure, e.g., show error message
        }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
            />
            {/* ... other input fields ... */}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
