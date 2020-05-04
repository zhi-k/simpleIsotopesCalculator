import React from "react";

export default function Calculator() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded container mt-5 mx-auto" id="calc">
      <div className="h6 w-100 mb-3 border-bottom p-2" id="title">
        18F-Fluorodeoxyglucose Decay Calculator
      </div>
      <form className="form-group w-100 ">
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="half-life">Half Life</label>
            <input type="text" defaultValue="109.77" name="half-life" className="form-control form-control-sm"></input>
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="original">Original Activity (mCi)</label>
            <input type="text" name="original" className="form-control form-control-sm"></input>
          </div>
        </div>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="start-date">Measured Date</label>
            <input type="date" name="start-date" className="form-control form-control-sm"></input>
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="start-time">Measured Time</label>
            <input
              type="time"
              name="start-time"
              defaultValue="01:00:00"
              className="form-control form-control-sm"
            ></input>
          </div>
        </div>
        <div className="form-row">
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="end-date">Calculated Date</label>
            <input type="date" name="end-date" className="form-control form-control-sm"></input>
          </div>
          <div className="mb-2 mr-sm-2 col-md-5">
            <label htmlFor="end-time">Calculated Time</label>
            <input type="time" name="end-time" defaultValue="01:00:00" className="form-control form-control-sm"></input>
          </div>
        </div>
        <div className="mt-1 d-inline">
          <button type="submit" class="btn btn-primary mb-2 mt-2">
            Calculate
          </button>
          <button type="submit" class="btn btn-secondary ml-3">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
