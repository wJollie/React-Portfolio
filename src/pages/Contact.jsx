import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    // Simple email format validation
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Send email (you need a server-side implementation for this)
      console.log('Sending email:', formData);

      // Clear the form and set the submitted state
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <p>Thank you! Your message has been saved!.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
