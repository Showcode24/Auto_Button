import React, { useState } from 'react';

const Meth = () => {
  // State hook to manage an array of numbers
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Adding a new number to the array using the push method
  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(newNumber);
    setNumbers([...numbers]); // Triggering a state update to reflect the change
  };

  // This function pops the last number from the array
  const removeLastNumber = () => {
    numbers.pop();
    setNumbers([...numbers]);
  };

  // Using the splice method to remove or replace elements in the array
  const removeElements = () => {
    numbers.splice(1, 2); // This removes two elements starting from index 1
    setNumbers([...numbers]);
  };

  // Create a new array using slice()
  const createNewArray = () => {
    const newArray = numbers.slice(0, 3); // Creating a new array with the first three elements
    console.log('New Array:', newArray);
  };

  // Use map() to double each number
  const doubleNumbers = () => {
    const doubledArray = numbers.map((number) => number * 2);
    console.log('Doubled Array:', doubledArray);
  };

  // Use forEach() to log each number
  const logNumbers = () => {
    numbers.forEach((number) => {
      console.log('Number:', number);
    });
  };

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={number.id}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={removeLastNumber}>Remove Last Digit</button>
      <button onClick={removeElements}>Remove Elements</button>
      <button onClick={createNewArray}>Create a new Array</button>
      <button onClick={doubleNumbers}>Double the numbers</button>
      <button onClick={logNumbers}>Log Numbers</button>
    </div>
  );
};

export default Meth;
