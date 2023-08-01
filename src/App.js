import { useState } from "react";
import Select from "react-select";
// import "./App.css";

function App() {
  const [value, setValue] = useState(null);
  const options = [
    { value: "banana", label: "banana" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "apple", label: "apple" },
    { value: "orange", label: "orange" },
    { value: "pinaple", label: "pinaple" },
  ];
  console.log(options);
  return (
    <div style={{ margin: 20, width: 300 }}>
      <Select
        options={options}
        defaultValue={value}
        onChange={setValue}
        isMulti
        noOptionsMessage={() => "Not avabile"}
        // isDisabled
        placeholder="Please select your Favorite Fruits..."
        styles={{
          placeholder: (basestyle, state) => ({
            ...basestyle,
            color: "gray",
          }),
          clearIndicator: (basestyle) => ({
            ...basestyle,
            color: "red",
          }),
          control: (basestyle) => ({
            ...basestyle,
            color: "green",
          }),
          multiValueRemove: (basestyle, state) => ({
            ...basestyle,
            color: state.isFocused ? "red" : "gray",
            backgroundColor: state.isFocused ? "black" : "lightgreen",
          }),
        }}
      />
    </div>
  );
}

export default App;
