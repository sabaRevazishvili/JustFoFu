import { useState } from "react";
import { useInfoStore } from "../../store/useInfoStore";

export const NamingPop = ({ name }) => {
  const { players, teams, addTeam, addPlayer } = useInfoStore();

  const [inputValue, setInputValue] = useState("");

  console.log(players);

  const items = name ? players : teams;
  const setItems = name ? addPlayer : addTeam;

  const addItem = () => {
    if (!inputValue.trim()) return;
    setItems(inputValue.trim(), ...items);
    setInputValue("");
  };

  return (
    <div>
      Name {name ? "players" : "Teams"}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItem()}
        className="border border-gray-300"
        type="text"
      />
      <ul>
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};
