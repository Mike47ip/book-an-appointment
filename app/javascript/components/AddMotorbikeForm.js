import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loading from '../assets/images/loading.gif';

const AddMotorbikeForm = ({ onAddMotorbike }) => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    image: '',
    price: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // form validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.model.trim()) {
      errors.model = 'Model is required';
    }

    if (Object.keys(errors).length === 0) {
      onAddMotorbike(formData);
      setFormData({
        name: '',
        model: '',
        image: '',
        price: '',
        description: '',
      });
    } else {
      // Set form errors
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div>
        <h2>Add a new motorcycle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="model">
              Model:
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </label>
            {formErrors.model && <p className="error">{formErrors.model}</p>}
          </div>
          <div>
            <label htmlFor="image">
              Image URL:
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price:
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description:
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn-lg active">Add Motorbike</button>
        </form>
      </div>
      <div>
        {formData.image ? (<img src={formData.image} alt="" />) : (<img src={loading} alt="loading" />)}
        {formData.name && (
        <p>
          <strong>Name:</strong>
          {' '}
          {formData.name}
        </p>
        )}
        {formData.model && (
        <p>
          <strong>Model:</strong>
          {' '}
          {formData.model}
        </p>
        )}
        {formData.price && (
        <p>
          <strong>Price:</strong>
          {' '}
          {formData.price}
        </p>
        )}
        {formData.description && (
        <p>
          <strong>Description:</strong>
          {' '}
          {formData.description}
        </p>
        )}
      </div>
    </>
  );
};

AddMotorbikeForm.propTypes = {
  onAddMotorbike: PropTypes.func.isRequired,
};

export default AddMotorbikeForm;