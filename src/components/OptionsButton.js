import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useStateValues } from "../context/Store";

function CenteredModal(props) {
  const [state, dispatch] = useStateValues();

  const [input, setInput] = useState(() => ({
    isotope: "",
    halfLife: "",
  }));

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.isotope || !input.halfLife) {
      alert(`Please fill in both fields`);
      return;
    }

    dispatch({
      type: "ADD_OPTION",
      payload: {
        optionName: input.isotope.toString(),
        optionHalf: Number(input.halfLife),
      },
    });

    setInput({
      isotopes: "",
      halfLife: "",
    });

    props.onHide();
  }

  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex text-align-center">
          <div className="h4">Custom Isotope</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modalBody">
        <form className="form-group w-100 pt-1 mb-1 w-auto" onSubmit={handleSubmit}>
          <div className="mb-2 mr-sm-2 col-md-12">
            <label htmlFor="isotope" className="ml-1 mr-1">
              Isotope:
            </label>
            <input type="text" name="isotope" className="ml-1" onChange={handleChange} />
          </div>
          <div className="mb-2 mr-sm-2 col-md-12 w-auto">
            <label htmlFor="halfLife" className="ml-1 mr-1">
              Half Life (minutes):
            </label>
            <input type="text" name="halfLife" className="ml-1" onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn mx-3">
            Save
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer id="modalFooter">
        <ul className="list-group w-100 flex-wrap">
          {state.options.map((option, index) => (
            <li
              key={index}
              className="list-group-item w-100 d-flex justify-content-between align-items-center"
              id="customList"
            >
              {option.optionName}
              <button
                className="btn btn-danger btn-small m-2"
                onClick={() => dispatch({ type: "DELETE_OPTION", payload: option })}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </Modal.Footer>
    </Modal>
  );
}

export default function OptionsButton() {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <button className="btn btn-success mx-4 btn-sm" onClick={() => setModalShow(true)} id="modalButton">
        Add or Remove Custom Isotopes
      </button>
      <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
