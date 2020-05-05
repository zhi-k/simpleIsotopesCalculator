import React from "react";

export default function DisplayResult() {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
