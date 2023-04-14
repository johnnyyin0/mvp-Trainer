import React,{useState} from "react";
import frontBodySvg from "../assets/front-body.svg";

function FrontBody() {
  const [hoveredBodyPart, setHoveredBodyPart] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    event.target.style.cursor = "pointer";
    setHoveredBodyPart(event.target.id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoveredBodyPart(null);
    setIsHovered(false);
  };

  const handleMouseClick = (e) => {
    console.log("YOU CLICKED ON: ", e.target.id);
  };

  return (
    <div style={{ position: "relative" }}>
      <svg viewBox="0 0 400 950" style={{ position: "absolute", top: 0, left: 0 }}>
        <rect
          id="shoulders"
          x="68"
          y="175"
          width="80"
          height="70"
        //   stroke="black"
        //   strokeWidth="2"
          fill={
            hoveredBodyPart === "shoulders" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="shoulders"
          x="257"
          y="175"
          width="80"
          height="70"
          fill={
            hoveredBodyPart === "shoulders" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="biceps"
          x="48"
          y="245"
          width="70"
          height="90"
          fill={
            hoveredBodyPart === "biceps" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="biceps"
          x="287"
          y="245"
          width="70"
          height="90"
          fill={
            hoveredBodyPart === "biceps" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
                <rect
          id="forearms"
          x="18"
          y="335"
          width="72"
          height="100"
          fill={
            hoveredBodyPart === "forearms" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="forearms"
          x="310"
          y="335"
          width="75"
          height="100"
          fill={
            hoveredBodyPart === "forearms" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="traps"
          x="118"
          y="140"
          width="162"
          height="50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          fill={
            hoveredBodyPart === "traps" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onClick={handleMouseClick}
        />
        <rect
          id="chest"
          x="118"
          y="195"
          width="166"
          height="90"
          fill={
            hoveredBodyPart === "chest" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="abs"
          x="128"
          y="290"
          width="146"
          height="110"
          fill={
            hoveredBodyPart === "abs" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}
        />
        <rect
          id="quads"
          x="85"
          y="450"
          width="114"
          height="170"
          fill={
            hoveredBodyPart === "quads" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}            
        />
        <rect
          id="quads"
          x="205"
          y="450"
          width="114"
          height="170"
          fill={
            hoveredBodyPart === "quads" && isHovered
              ? "rgba(135, 206, 235, 0.5)"
              : "transparent"
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseClick}            
        />
      </svg>
      <img src={frontBodySvg} alt="Front Body" style={{ width: "100%", maxWidth: "400px" }}/>
    </div>
  );
}

export default FrontBody;