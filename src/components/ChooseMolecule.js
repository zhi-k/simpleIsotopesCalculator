import React, { useState, useEffect } from "react";
import { useStateValues } from "../context/Store";

export default function ChooseMolecule() {
  const [state, dispatch] = useStateValues();
  const [count, setCount] = useState(() => state.options.length);
  const [selecting, setSelecting] = useState({
    selectingName: "",
    selectingValue: "",
  });

  useEffect(() => {
    if (count !== state.options.length) {
      if (state.options.length !== 0) {
        const { optionName, optionHalf } = state.options[0];
        setSelecting({
          ...selecting,
          selectingName: optionName,
          selectingValue: optionHalf,
        });

        dispatch({
          type: "SELECT_ISOTOPE",
          payload: {
            selectedName: optionName,
            selectedValue: optionHalf,
          },
        });
      }

      setCount(state.options.length);
    }
  }, [count, state.options.length]);

  function handleSelect(e) {
    e.preventDefault();
    const index = e.nativeEvent.target.selectedIndex;
    const name = e.nativeEvent.target[index].text;
    const value = e.target.value;

    setSelecting({
      ...selecting,
      selectingName: name,
      selectingValue: value,
    });

    dispatch({
      type: "SELECT_ISOTOPE",
      payload: {
        selectedName: name,
        selectedHalf: value,
      },
    });
  }

  return (
    <div className="input-group input-group-sm mb-3 w-50" id="molecule">
      <div className="input-group-prepend">
        <label className="input-group-text bg-dark text-white" htmlFor="moleculeSelect">
          Isotopes
        </label>
      </div>
      <select className="custom-select" id="moleculeSelect" value={selecting.selectingValue} onChange={handleSelect}>
        {state.options.map((option, index) => (
          <option key={index} value={option.optionHalf} name={option.optionName}>
            {option.optionName}
          </option>
        ))}
      </select>
    </div>
  );
}
