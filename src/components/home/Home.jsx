import React, { useState } from "react";
import "./home.css";
import Cat from "../sprites/Cat";

const Home = () => {
  const [angle, setAngle] = useState(0);
  const [pos, setPos] = useState(0);
  const [hide, setHide] = useState(false);
  const [size, setSize] = useState(1);
  const [message, setMessage] = useState("");
  const [items,setItems] =useState([])
  const styles = {
    transform: `rotate(${angle}deg)` + `translate(${pos}px)` + `scale(${size})`,
    position: "relative",
    visibility: hide ? "hidden" : "visible",
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("name");
 

    switch (value) {
      case "movex":
        setPos(pos ? pos : 15);
        break;
      case "rotate":
        setAngle(angle ? angle : 15);
        break;
      case "hide":
        setHide(true);
        break;
      case "show":
        setHide(false);
        break;
      case "size":
        setSize(size ? size :2);
        break;
      case "message":
        alert(`broadcast...${message}`);
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
  const handleDrop = (e) => {
    const childId = e.dataTransfer.getData("text");
    console.log(childId)
    const element = document.getElementById(childId)
    console.log(element)

    setItems((prevItems) => [...prevItems, element]);
    
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div>
          <div
            draggable
            id="drag1"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items"
            name="movex"
            onClick={handleClick}
          >
            {"Move-x "}
            <input
              type="number"
              defaultValue="0"
              required
              onChange={(e) => setPos(parseInt(e.target.value))}
            />
          </div>
          <div
            draggable
            id="drag2"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items"
            name="rotate"
            onClick={handleClick}
          >
            {"Rotate"}
            <input
              type="number"
              defaultValue="0"
              onChange={(e) => setAngle(parseInt(e.target.value))}
            />
          </div>
          <div
            draggable
            id="drag3"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items"
            name="hide"
            onClick={handleClick}
          >
            {"Hide "}
          </div>
          <div
            draggable
            id="drag4"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items"
            name="show"
            onClick={handleClick}
          >
            {"Show"}
          </div>
          <div
            draggable
            id="drag5"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items2"
            name="size"
            onClick={handleClick}
          >
            {"Size"}
            <input
              type="number"
              defaultValue="1"
              onChange={(e) => setSize(parseInt(e.target.value))}
            />
          </div>
          <div
            draggable
            id="drag6"
            onDragStart={(e) => handleDragStart(e, e.target.id)}
            className="drag-items1"
            name="message"
            onClick={handleClick}
          >
            {"Broadcast"}
            <input
              type="text"
              placeholder="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* middle-container */}

      <div className="middle-container" id="middle-drop">
        <div
          onDragOver={handleDragOver}
          id="drop-target"
          onDrop={handleDrop}
          className="droppable"
        >
          {items.map((item,index)=>(
            <div key={index}>
             <div dangerouslySetInnerHTML={{ __html: item.outerHTML }} onClick={handleClick} />
            </div>

          ))}
        </div>
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
