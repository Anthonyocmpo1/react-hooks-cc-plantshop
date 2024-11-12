import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, toggleStockStatus, deletePlant, updatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} // Make sure each child has a unique key
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          inStock={plant.inStock}
          toggleStockStatus={toggleStockStatus} 
          deletePlant={deletePlant} 
          updatePlant={updatePlant} 
        />
      ))}
    </ul>
  );
}

export default PlantList;
