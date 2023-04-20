import React, { useState, useEffect } from "react";
import CalorieCalculator from "./CalorieCalculator";
import BMICalculator from "./BMICalculator";

function Navbar() {
  const [showCalorieModal, setShowCalorieModal] = useState(false);
  const [showBMIModal, setShowBMIModal] = useState(false);

  const handleCalorieClick = () => {
    setShowCalorieModal(true);
  };

  const handleBMIClick = () => {
    setShowBMIModal(true);
  };

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">
          <img
            src="src/assets/dumbbell.png"
            alt="dumbbell logo"
            style={{ height: "30px", width: "30px", marginRight: "5px" }}
          ></img>
          <b>TRAINER</b>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end flex-none">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-80 mt-4"
          >
            <li>
              <a href="https://calendar.google.com/">
                <b>WEEKLY WORKOUT CALENDAR </b>
              </a>
            </li>
            <li>
              <a onClick={handleCalorieClick}>
                <b>CALORIE CALCULATOR </b>
              </a>
            </li>
            <li>
              <a onClick={handleBMIClick}>
                <b>BMI CALCULATOR</b>
              </a>
            </li>
          </ul>
          {showCalorieModal && (<CalorieCalculator setShowCalorieModal={setShowCalorieModal}/>)}
          {showBMIModal && <BMICalculator setShowBMIModal={setShowBMIModal} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
