import React from "react";
import { Link, useLocation } from "react-router-dom";

function HousePage() {
  const { state } = useLocation();
  const { house } = state;

  console.log(house);
  return (
    <>
      <Link to="/" className="btn btn-half">
        Back
      </Link>
      <div>
        {Object.entries(house).map(([key, value], i) => {
          if (key !== "image") {
            return (
              <div style={{ display: "flex" }}>
                <h3
                  style={{ display: "inline-block", marginRight: "5px" }}
                  key={i}
                >
                  {key}:
                </h3>
                <p>{value}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default HousePage;
