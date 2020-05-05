import React from "react";
import { useStateValues } from "../context/Store";

export default function ChooseMolecule() {
  const [state, dispatch] = useStateValues();

  function handleSelect(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const selected = e.target.childNodes[index];

    let halfLife = selected.value || state.settings.halfLife; //if user did not select then default to f18
    let molecule = selected.label || state.settings.molecule;

    dispatch({
      type: "SET_MOLECULE",
      payload: {
        molecule,
        halfLife,
      },
    });
  }

  return (
    <div className="input-group input-group-sm mb-3 w-50" id="molecule">
      <div className="input-group-prepend">
        <label className="input-group-text bg-dark text-white" htmlFor="moleculeSelect">
          Molecule
        </label>
      </div>
      <select className="custom-select" id="moleculeSelect" onChange={handleSelect}>
        {state.options.map((option, index) =>
          index === 0 ? (
            <option selected key={index} value={option.optionHalf}>
              {option.optionName}
            </option>
          ) : (
            <option key={index} value={option.optionHalf}>
              {option.optionName}
            </option>
          )
        )}
      </select>
    </div>
  );
}
