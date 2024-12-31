import { useState, useEffect } from "react";

function Content() {
  const [color, setColor] = useState("#000000");
  const [rgb, setRgb] = useState("rgb(0,0,0)");
  const [opacity, setOpacity] = useState(100);
  const [opacityColor, setOpacityColor] = useState(`rgba(0,0,0,100)`);
  useEffect(() => {
    const rgb = color.replace("#", "");
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);
    setRgb(`rgb(${r},${g},${b})`);
    setOpacityColor(`rgba(${r},${g},${b},${opacity / 100})`);
  }, [color, opacity]);
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
    handleColorOpacityChange({ rgb, opacity: e.target.value });
  };
  const handleColorOpacityChange = ({ rgb, opacity }) => {
    setOpacityColor(`rgba(${rgb},${opacity / 100})`);
  };
  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          type="color"
          value={color}
          className="bg-black"
          onChange={handleColorChange}
        />
      </div>
      <div className="flex justify-center mt-1">
        <input
          type="range"
          min={0}
          max={100}
          value={opacity}
          onChange={handleOpacityChange}
          className="slider"
        />
      </div>
      <div className="flex justify-center mt-5">
        <div
          className="mt-5 w-[200px] h-[200px] border-black"
          style={{
            backgroundColor: opacityColor,
          }}
        ></div>
      </div>
      <div className="flex justify-center mt-10">Hex {color}</div>
      <div className="flex justify-center mt-3">RGB: {rgb}</div>
      <div className="flex justify-center mt-3">Opacity: {opacity}%</div>
    </>
  );
}

export default Content;
