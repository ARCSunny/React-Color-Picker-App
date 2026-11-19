const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <label htmlFor="color-input">Pick a Color:</label>
      <input
        type="color"
        id="color-input"
        value={color}
        onChange={handleColorChange}
      />
      <p>Selected Color: {color}</p>
    </div>
  );
};