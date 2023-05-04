import Dropdown from "./components/Dropdown";
import { useState } from "react";
export default function App() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (selection) => {
    setSelection(selection);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className="flex">
      <a href="/dashboard">Dashboard</a>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}
