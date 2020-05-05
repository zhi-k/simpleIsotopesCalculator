import React from "react";
import { useStateValues } from "../context/Store";

export default function DisplayResult() {
  const [state, dispatch] = useStateValues();

  return (
    <div className="container d-flex border">
      <table className="table table-hover table-responsive-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Molecule</th>
            <th scope="col">Original Activity</th>
            <th scope="col">Elapsed Time</th>
            <th scope="col">Calculated Activity</th>
          </tr>
        </thead>
        <tbody>
          {state.results.map((result, index) => (
            <>
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                {Object.keys(result).map((r) => (
                  <>
                    <td key={index}>{result[r]}</td>
                  </>
                ))}
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_ENTRY",
                      payload: result,
                    })
                  }
                >
                  Delete
                </button>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
