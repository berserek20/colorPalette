import { useState, useEffect, useRef } from "react";
import "./ColorPalette.css";

export default function ColorPalette() {
  const [color, setColor] = useState("blue");
  const [cname , setCname] = useState("");
  const range = useRef(["#800080","#800000","#fafafa","#ffddc9","#b0afff","#d40c0c","#132a36","#21465b","#377699","#ff975d","#310343","#6c776a","#b4c7b1","#c4b1c7","#82bbab","#067857","#780627","#c80a42","#50757b","#053b43","#74c365","#69ffbf","#de69ff","#ff69cd","#69f6ff"])
  const [colorRange, setColorRange] = useState(range.current);
  const len : number = 7;

  //addcolor
  function addColor() {
    let cName=cname;
    if(cName.charAt(0)=='#')
    cName= cName.slice(1);
    if (colorRange.includes("#"+cName)  ) {
      alert("color already exist in palette ");
    } 
    else if((cName.length!=6 && cName.length!=3)) {
        alert("Hexadecimal code length either could be 3 or 6");
    }
    else {
      if (!/^([0-9a-fA-F]{3}){1,2}$/.test(cName)) {
        alert("Hexadecimal code is not correct.");
        return;
      }
      console.log(colorRange);
      setColorRange((prev)=>([...prev, "#" + cName]));
    }
    
  }
  //setCss
  function setCss(chosen: string) {
    setColor(chosen);
  }
  const palette = colorRange.map((item) => {
    return (
      <li
        className="box"
        style={{
          borderColor: color === item ? "blue" : "gray",
          backgroundColor: item,
        }}
        key={item}
        onClick={() => {
          setCss(item);
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="palette" >
            <h1>Color Palette</h1>
      <div className="container1">

            <label htmlFor="color hex code">Enter color hex code</label>
            <input
              className="color"
              placeholder="color hex code"
              name="color hex code"
              maxLength= {len}
              autoFocus
              required
              onChange={(e) => setCname(e.target.value)}
            />
          <button onClick={addColor}>Add Color</button>
        </div>
        <div className="container2">

            <ul className="grid">{palette}</ul>
            <div id="display" style={{ backgroundColor: color }} ><b>Display</b></div>
        </div>
    </div>
  );
}
