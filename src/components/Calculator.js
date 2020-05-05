import React, { useState, useEffect } from "react";
import DisplayResult from "./DisplayResult";
import ChooseMolecule from "./ChooseMolecule";
import { formValidation } from "../helpers/FormValidation";
import { calculateActivity } from "../helpers/CalculateActivity";
import { useStateValues } from "../context/Store";

export default function Calculator() {
  const [state, dispatch] = useStateValues();
  const { molecule, halfLife } = state.settings;

  const [input, setInput] = useState(() => ({
    halfLife,
    original: Number(""),
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  }));

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // Hackish kinda way to update input half life value when user change selection
  useEffect(() => {
    input.halfLife = halfLife;
  }, [halfLife, input.halfLife]);

  function handleForm(e) {
    e.preventDefault();

    const isValid = formValidation(input);
    if (!isValid.result) {
      alert(isValid.message);
      e.stopPropagation();
      return;
    }

    const output = calculateActivity(input);

    // Update to context store
    dispatch({
      type: "CREATE_ENTRY",
      payload: {
        molecule: molecule,
        originalActivity: input.original,
        timeElapsed: output.timeElapsed.toFixed(1), // calculate in hours for easy display
        calculatedActivity: output.result.toString(),
      },
    });
  }

  function handleReset(e) {
    e.preventDefault();
    setInput({
      halfLife,
      original: Number(""),
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    });
  }

  return (
    <div className="shadow p-4 mb-5 bg-white rounded container mt-5 mx-auto" id="calc">
      <div className="border-bottom w-100 d-flex justify-content-between">
        <div className="h6 w-30 mb-3 p-2" id="title">
          Decay Calculator
        </div>
        <ChooseMolecule />
      </div>
      <form className="form-group w-100 pt-1 mb-1" onSubmit={handleForm}>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="half-life">Half Life</label>
            <input
              type="text"
              value={halfLife}
              name="halfLife"
              className="form-control form-control-sm"
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="original">Original Activity (mCi)</label>
            <input
              type="text"
              name="original"
              className="form-control form-control-sm"
              value={input.original}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="start-date">Measured Date</label>
            <input
              type="date"
              name="startDate"
              className="form-control form-control-sm"
              value={input.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="start-time">Measured Time</label>
            <input
              type="time"
              name="startTime"
              className="form-control form-control-sm"
              value={input.startTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="end-date">Calculated Date</label>
            <input
              type="date"
              name="endDate"
              className="form-control form-control-sm"
              value={input.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="endTime">Calculated Time</label>
            <input
              type="time"
              name="endTime"
              className="form-control form-control-sm"
              value={input.endTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-1 d-inline">
          <button type="submit" className="btn btn-primary mb-2 mt-2">
            Calculate
          </button>
          <button className="btn btn-secondary ml-3" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <DisplayResult />
    </div>
  );
}
