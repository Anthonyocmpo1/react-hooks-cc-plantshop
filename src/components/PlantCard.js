import React, { useState } from "react";

function PlantCard({
  id,
  name,
  image,
  price,
  inStock,
  toggleStockStatus,
  deletePlant,
  updatePlant, 
}) {
  
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);

  
  const handleNameChange = (e) => setEditedName(e.target.value);
  const handlePriceChange = (e) => setEditedPrice(e.target.value);

  
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPlant = {
      id,
      name: editedName,
      price: editedPrice,
      inStock,
    };
    updatePlant(updatedPlant); 
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      
      <div className="view-details">
        <h4>{editedName}</h4>
        <p>Price: ${editedPrice}</p>
      </div>

      
      <div className="update-form">
        <input
          type="text"
          value={editedName}
          onChange={handleNameChange}
          placeholder="Plant Name"
        />
        <input
          type="number"
          value={editedPrice}
          onChange={handlePriceChange}
          placeholder="Price"
        />
      </div>

      
      <button onClick={handleUpdate}>Update</button>

     
      <button
        className={inStock ? "primary" : "out-of-stock"}
        onClick={() => toggleStockStatus(id)}
      >
        {inStock ? "In Stock - Click to Mark Sold Out" : "Out of Stock - Click to Mark In Stock"}
      </button>

      
      <button onClick={() => deletePlant(id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
