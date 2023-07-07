import React, { useState } from "react";
import "./home.css";
import Cat from "../sprites/Cat";

const Home = () => {
  const [angle, setAngle] = useState(0);
  const [pos, setPos] = useState(0);
  const [hide, setHide] = useState(false);
  const [size, setSize] = useState(1);
  const [items, setItems] = useState([]);
  const [widgets, setWidgets] = useState([]);
  const [toggle, setToggle] = useState(false);

  const styles = {
    transform: `rotate(${angle}deg)` + `translate(${pos}px)` + `scale(${size})`,
    position: "relative",
    visibility: hide ? "hidden" : "visible",
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("name");

    switch (value) {
      case "forward":
        setPos(pos + 15);
        break;
      case "backward":
        setPos(pos - 15);
        break;
      case "clockwise":
        setAngle(angle + 15);
        break;
      case "anticlockwise":
        setAngle(angle - 15);
        break;
      case "hide":
        setHide(true);
        break;
      case "show":
        setHide(false);
        break;
      case "scaleup":
        setSize(size + 1);
        break;
      case "scaledown":
        setSize(size - 1);
        break;
      case "message":
        alert(`broadcast...`);
        break;
      default:
        break;
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, id) => {
    var childId = e.dataTransfer.getData("Text");
    var element = document.getElementById(childId);
    // var targetarea = document.getElementById(id);
    // console.log(childId)
    // console.log(id)

    items.push(element);
    setWidgets(element);

    var clonedElement = element.cloneNode(true);
    clonedElement.addEventListener("click", handleClick);
    e.target.appendChild(clonedElement);

    targetarea.style.width = "fit-content";
  };

  const handleRun = () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.id === "drag1") {
        setTimeout(() => {
          setPos((prevPos) => prevPos + 15);
        }, i * 1000);
      }
      if (item.id === "drag2") {
        setTimeout(() => {
          setPos((prevPos) => prevPos - 15);
        }, i * 1000);
      }
      if (item.id === "drag3") {
        setTimeout(() => {
          setAngle((prevAngle) => prevAngle + 15);
        }, i * 1000);
      }
      if (item.id === "drag4") {
        setTimeout(() => {
          setAngle((prevAngle) => prevAngle - 15);
        }, i * 1000);
      }
      if (item.id === "drag5") {
        setTimeout(() => {
          setHide(true);
        }, i * 1000);
      }
      if (item.id === "drag6") {
        setTimeout(() => {
          setHide(false);
        }, i * 1000);
      }
      if (item.id === "drag7") {
        setTimeout(() => {
          setSize((prevSize) => prevSize + 1);
        }, i * 1000);
      }
      if (item.id === "drag8") {
        setTimeout(() => {
          setSize((prevSize) => prevSize - 1);
        }, i * 1000);
      }
      if (item.id === "drag9") {
        setTimeout(() => {
          alert(`broadcast...`);
        }, i * 1000);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <div
            draggable
            id="drag1"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items1"
            name="forward"
            onClick={handleClick}
          >
            {"Forward 15-steps"}
          </div>
          <div
            draggable
            id="drag2"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items1"
            name="backward"
            onClick={handleClick}
          >
            {"Backward 15-steps"}
          </div>
          <div
            draggable
            id="drag3"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items1"
            name="clockwise"
            onClick={handleClick}
          >
            {"Rotate clockwise"}
          </div>
          <div
            draggable
            id="drag4"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items1"
            name="anticlockwise"
            onClick={handleClick}
          >
            {"Rotate anti-clockwise"}
          </div>
          <div
            draggable
            id="drag5"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items2"
            name="hide"
            onClick={handleClick}
          >
            {"Hide "}
          </div>
          <div
            draggable
            id="drag6"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items2"
            name="show"
            onClick={handleClick}
          >
            {"Show"}
          </div>
          <div
            draggable
            id="drag7"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items3"
            name="scaleup"
            onClick={handleClick}
          >
            {"Scale Up"}
          </div>
          <div
            draggable
            id="drag8"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items3"
            name="scaledown"
            onClick={handleClick}
          >
            {"Scale Down"}
          </div>
          <div
            draggable
            id="drag9"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items4"
            name="message"
            onClick={handleClick}
          >
            {"Broadcast"}
          </div>
        </div>
      </div>

      {/* middle-container */}

      <div className="middle-container" id="middle-drop">
        <button onClick={handleRun}>run</button>
        <div
          onClick={()=>setToggle(!toggle)}
          onDragOver={handleDragOver}
          id="drop-target1"
          onDrop={handleDrop}
          className="droppable"
        ></div>
        <div
          onClick={()=>setToggle(!toggle)}
          onDragOver={handleDragOver}
          id="drop-target2"
          onDrop={handleDrop}
          className="droppable"
        ></div>
      </div>

      {/* right-container  */}

      <div className="right-container">
        <div draggable="true" style={styles} onDragStart={handleDragStart}>
          <Cat />
        </div>
      </div>
    </div>
  );
};

export default Home;
