import React from "react";
import { useStateValues } from "../context/Store";

export default function ChooseMolecule() {
  const [state, dispatch] = useStateValues();

  // find which item has selected === true and update it to default values
  const [obj] = state.options.filter((option) => option.optionSelected === true);

  function handleSelect(e) {
    e.preventDefault();
    // e.target.value refs to the id of item in options
    dispatch({
      type: "SELECT_OPTION",
      // e.target.value has to be converted into Number to compare in reducer
      payload: Number(e.target.value),
    });
  }

  return (
    <div className="input-group input-group-sm mb-3 w-50" id="molecule">
      <div className="input-group-prepend">
        <label className="input-group-text bg-dark text-white" htmlFor="moleculeSelect">
          Isotopes
        </label>
      </div>
      <select className="custom-select" id="moleculeSelect" defaultValue={obj.id} onChange={handleSelect}>
        {state.options.length === 1 ? (
          <option key={0} value={0}>
            {state.options[0].optionName}
          </option>
        ) : (
          state.options.map((option, i) =>
            i === 0 ? (
              ""
            ) : (
              <option key={option.id} value={option.id}>
                {option.optionName}
              </option>
            )
          )
        )}
      </select>
    </div>
  );
}
