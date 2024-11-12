import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'image') setImage(value);
    if (name === 'price') setPrice(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new plant object
    const newPlant = {
      name: name,
      image: image,
      price: parseFloat(price), // Ensure price is a number
    };

    // Send POST request to the backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New plant added:", data);
        // Call onAddPlant to update the parent component's state with the new plant
        onAddPlant(data);
        // Reset form inputs
        setName('');
        setImage('');
        setPrice('');
      })
      .catch((error) => {
        console.error("Error adding plant:", error);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handleInputChange}
        />
        
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;