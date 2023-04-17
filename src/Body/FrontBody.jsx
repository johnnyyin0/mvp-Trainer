import React, { useState } from "react";
import frontBodySvg from "../assets/front-body.svg";
import ExcerciseModal from "./ExcerciseModal";

function FrontBody({data}) {
  const [muscleSelected, setMuscleSelected] = useState([]);
  const [showModal, setShowModal] = useState(false)
  
  const handleMouseClick = (e) => {
    setMuscleSelected(e.target.id);
    setShowModal(true)
  };

  return (
    <div style={{ position: "relative", marginTop:"30px" }}>
      <svg viewBox="0 0 400 950" style={{ position: "absolute", top: 0, left: 0 }}>
        <rect
          id="Shoulders"
          x="65"
          y="175"
          width="80"
          height="70"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Shoulders"
          x="257"
          y="175"
          width="80"
          height="70"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Biceps"
          x="48"
          y="245"
          width="70"
          height="90"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Biceps"
          x="287"
          y="245"
          width="70"
          height="90"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Forearms"
          x="18"
          y="335"
          width="72"
          height="100"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Forearms"
          x="310"
          y="335"
          width="75"
          height="100"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Traps"
          x="118"
          y="140"
          width="162"
          height="50"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Chest"
          x="118"
          y="195"
          width="166"
          height="90"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Abdominals"
          x="128"
          y="290"
          width="146"
          height="110"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Quads"
          x="85"
          y="450"
          width="114"
          height="170"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Quads"
          x="205"
          y="450"
          width="114"
          height="170"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Calves"
          x="50"
          y="650"
          width="95"
          height="130"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Calves"
          x="262"
          y="650"
          width="95"
          height="130"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
      </svg>
      <img src={frontBodySvg} alt="Front Body" style={{ width: "100%", maxWidth: "400px"}}/>
      {showModal && <ExcerciseModal data={data} muscleSelected={muscleSelected} setMuscleSelected={setMuscleSelected} setShowModal={setShowModal}/>}
    </div>
  );
}

export default FrontBody;
