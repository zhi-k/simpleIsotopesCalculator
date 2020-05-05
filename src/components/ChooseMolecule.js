import React from "react";
import { f18 } from "../helpers/Molecules";

export default function ChooseMolecule() {
  return (
    <div className="input-group input-group-sm mb-3 w-50" id="molecule">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="moleculeSelect">
          Molecule
        </label>
      </div>
      <select className="custom-select" id="moleculeSelect">
        <option selected value="f18">
          Fluorine-18
        </option>
        <option value="ga68">Gallium-68</option>
        <option value="lu177">Lutetium-177</option>
      </select>
    </div>
  );
}
