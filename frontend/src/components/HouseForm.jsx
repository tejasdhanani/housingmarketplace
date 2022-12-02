import { useState } from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../features/houses/houseSlice";

import React from "react";

function HouseForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createHouse({ text }));
    setText("");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">House</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add a House
          </button>
        </div>
      </form>
    </div>
  );
}

export default HouseForm;
