import React, { useState } from "react";
import DisplayResult from "./DisplayResult";
import { formValidation } from "../helpers/FormValidation";
import { calculateActivity } from "../helpers/CalculateActivity";
import { f18 } from "../helpers/Molecules";
import { useStateValues } from "../context/Store";

export default function Calculator() {
  const [state, dispatch] = useStateValues();

  const halfLife = f18.halfLife();
  const molecule = f18.name;

  const [input, setInput] = useState({
    halfLife,
    original: Number(""),
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleForm(e) {
    e.preventDefault();

    const isValid = formValidation(input);
    if (!isValid.result) {
      alert(isValid.message);
      e.stopPropagation();
      return;
    }

    const output = calculateActivity(input);
    console.log(output.result);

    // Update to context store
    dispatch({
      type: "CREATE_ENTRY",
      payload: {
        molecule: molecule,
        originalActivity: input.original,
        timeElapsed: output.timeElapsed / 60, // calculate in hours for easy display
        calculatedActivity: output.result.toString(),
      },
    });
  }

  return (
    <div className="shadow p-4 mb-5 bg-white rounded container mt-5 mx-auto" id="calc">
      <div className="h6 w-100 mb-3 border-bottom p-2" id="title">
        18F-Fluorodeoxyglucose Decay Calculator
      </div>
      <form className="form-group w-100" onSubmit={handleForm}>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="half-life">Half Life</label>
            <input
              type="text"
              value={input.halfLife}
              name="halfLife"
              className="form-control form-control-sm"
              onChange={handleChange}
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
          <button className="btn btn-secondary ml-3">Reset</button>
        </div>
      </form>
      <DisplayResult />
    </div>
  );
}
