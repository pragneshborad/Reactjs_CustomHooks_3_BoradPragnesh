import React from "react";
import useStorage from "../hooks/useStorage";

const StorageExample = () => {
  // Using the custom hook with localStorage
  const [name, setName] = useStorage("name", "John Doe", "local");

  // Using the custom hook with sessionStorage
  const [age, setAge] = useStorage("age", 30, "session");

  return (
    <div>
      <h1>LocalStorage & SessionStorage Example</h1>

      {/* Example for localStorage */}
      <div>
        <h2>LocalStorage</h2>
        <p>Stored Name: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Example for sessionStorage */}
      <div>
        <h2>SessionStorage</h2>
        <p>Stored Age: {age}</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default StorageExample;
