import React,{useState} from 'react';
import BackBodySvg from '../assets/back-body.svg';
import ExcerciseModal from "./ExcerciseModal";

function BackBody({data}) {
  const [muscleSelected, setMuscleSelected] = useState([]);
  const [showModal, setShowModal] = useState(false)
  
  const handleMouseClick = (e) => {
    setMuscleSelected(e.target.id);
    setShowModal(true)
  };

  return(
    <div style={{ position: "relative", marginTop:"30px" }}>
      <svg viewBox="0 0 400 950" style={{ position: "absolute", top: 0, left: 0 }}>
      <rect
          id="Shoulders"
          x="68"
          y="175"
          width="60"
          height="70"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Shoulders"
          x="277"
          y="175"
          width="60"
          height="70"
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
          id="Triceps"
          x="48"
          y="235"
          width="70"
          height="100"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Triceps"
          x="287"
          y="235"
          width="70"
          height="100"
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
          id="Hamstrings"
          x="85"
          y="450"
          width="114"
          height="170"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}            
        />
        <rect
          id="Hamstrings"
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
        <rect
          id="Glutes"
          x="130"
          y="385"
          width="145"
          height="85"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}            
        />
        <rect
          id="Lower back"
          x="130"
          y="285"
          width="145"
          height="100"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}            
        />
        <rect
          id="Lats"
          x="118"
          y="180"
          width="50"
          height="125"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Lats"
          x="237"
          y="180"
          width="50"
          height="125"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}
        />
        <rect
          id="Mid back"
          x="170"
          y="180"
          width="65"
          height="105"
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={handleMouseClick}            
        />
    </svg>
    <img src={BackBodySvg} alt="Back Body" style={{ width: "100%", maxWidth: "400px"}}/>
    {showModal && <ExcerciseModal data={data} muscleSelected={muscleSelected} setMuscleSelected={setMuscleSelected} setShowModal={setShowModal}/>}
    </div>
    )
}

export default BackBody;
