import React, { useState, useEffect } from "react";
import CalorieCalculator from "./CalorieCalculator";
import BMICalculator from "./BMICalculator";

function Navbar({ setTheme }) {
  const [showCalorieModal, setShowCalorieModal] = useState(false);
  const [showBMIModal, setShowBMIModal] = useState(false);

  const handleCalorieClick = () => {
    setShowCalorieModal(true);
  };

  const handleBMIClick = () => {
    setShowBMIModal(true);
  };

  // const handleToggle = (e) => {
  //   setTheme(e.target.checked ? "dark" : "light");
  // };

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
        {/* <label className="swap swap-rotate fill-slate-200 hover:fill-amber-300">
          <input type="checkbox" onClick={handleToggle} />
          <svg
            className="swap-on w-10 h-10  mr-1 pt-1 fill-inherit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-inherit w-10 h-10 pt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}
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
