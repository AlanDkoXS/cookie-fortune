import React from 'react';

const colors = {
  bg1: { light: "#d9ead3", dark: "#4b6100" },
  bg2: { light: "#fde4f1", dark: "#e80076" },
  bg3: { light: "#ffffff", dark: "#ff5b00" },
  bg4: { light: "#cfe2f3", dark: "#697efe" },
};

export function ColorSelector({ currentImgIndex, onColorChange }) {
  const handleChangeColor = (newIndex) => {
    onColorChange(colors[`bg${newIndex + 1}`]);
  };

  return (
    <div className="color-selector">
      {Object.keys(colors).map((colorKey, index) => (
        <button
          key={colorKey}
          style={{
            backgroundColor: colors[colorKey].light,
            border: 'none',
            cursor: 'pointer',
            margin: '5px',
            padding: '10px',
            borderRadius: '5px',
          }}
          onClick={() => handleChangeColor(index)}
        >
          Color {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;
