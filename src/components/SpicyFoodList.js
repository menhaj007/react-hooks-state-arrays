import React, { useState } from "react";
import {Select} from 'react-select';
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");



  // const [healthLevel, setHealthLevel] = useState(0);

  // function handleAddFood() {
  //   const newFood = getNewSpicyFood();
  //   const newFoodArray = [...foods, newFood];
  //   setFoods(newFoodArray);
   
  // }
  // return (
  //   <div>
  //     <button onClick={handleAddFood}>Add New Food</button>
  //     <ul>{foods.map( food => <li key={food.id}> {food.name} {food.cuisine} {food.heatLevel}</li>)}</ul>
  //   </div>
  // );


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  } 
  // const foodList = foods.map((food) => (
  //   <li key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));
  
  // function handleLiClick(id) {
  //   console.log(id);
  //   console.log(foods);
  //   const tmp = [];
  //   for (let i = 0; i < foods.length; i++) {
  //     if (foods[i].id != id) {
  //       tmp.push(foods[i]);
  //     }
  //   }
  //   // console.log(tmp)
  //   setFoods(tmp)
  // }

  // function handleLiClick(id) {
  //   // const newFoodArray = foods.filter((food) => food.id !== id);
  //   const foodEl = foods.filter(food => food.id = id);
  //   setHealthLevel(prev => prev+1);
  //   foodEl.heatLevel = healthLevel;
  //   const newFood = (foods.filter(food => food.id !== id));
  //   const arrayFood = [...newFood, foodEl];
  //   setFoods(arrayFood);
  // } 

  function handleLiClick(id) {
    const newFoodArray = foods.map(food => {
      if (food.id === id) {
        return {
          ...food, heatLevel: food.heatLevel +1
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  } 

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // )); 
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  }); 

  const foodList = foodsToDisplay.map((food) => (
  <li key={food.id} onClick={() => handleLiClick(food.id)}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      {/* <ul>{foodToDisplay}</ul> */}
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
    </div>
  )




}

export default SpicyFoodList;
