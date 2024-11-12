import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants, setPlants] = useState([
    { id: 1, name: "Aloe", image: "https://via.placeholder.com/400", price: 15.99, inStock: true },
    { id: 2, name: "ZZ Plant", image: "https://via.placeholder.com/400", price: 25.98, inStock: false },
    { id: 3, name: "Cactus", image: "https://via.placeholder.com/400", price: 9.99, inStock: true },
  ]);
  
  
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
