import React from "react";
import { useStateValues } from "../context/Store";

export default function ChooseMolecule() {
  const [state, dispatch] = useStateValues();

  function handleSelect(e) {
    e.preventDefault();

    let halfLife = state.settings.halfLife;
    let molecule = state.settings.molecule;

    switch (e.target.value) {
      case "f18":
        halfLife = 109.77;
        molecule = "Fluorine-18";
        break;
      case "ga68":
        halfLife = 68;
        molecule = "Gallium-68";
        break;
      case "lu177":
        halfLife = 9571.68; // equivalent to 6.647 days
        molecule = "Lutetium-177";
        break;
      default:
        throw new Error(`Unable to set half life`);
    }

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
        <label className="input-group-text" htmlFor="moleculeSelect">
          Molecule
        </label>
      </div>
      <select className="custom-select" id="moleculeSelect" onChange={handleSelect}>
        <option selected value="f18">
          Fluorine-18
        </option>
        <option value="ga68">Gallium-68</option>
        <option value="lu177">Lutetium-177</option>
      </select>
    </div>
  );
}
