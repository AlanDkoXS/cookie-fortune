import { useState } from "react";
import "./assets/styles/App.css";
import { bg1, bg2, bg3, bg4 } from "./assets/images/";
import phrases from "./data/phrases.json";
import { randomIndex } from "./helpers/random-index";

const images = [bg1, bg2, bg3, bg4];

const colors = {
  bg1: { light: "#d9ead3", dark: "#4b6100" },
  bg2: { light: "#fde4f1", dark: "#e80076" },
  bg3: { light: "#ffffff", dark: "#ff5b00" },
  bg4: { light: "#cfe2f3", dark: "#697efe" },
};

function App() {
  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
  const [img, setImg] = useState(images[randomIndex(images.length)]);
  const [color, setColor] = useState(colors[`bg${images.indexOf(img) + 1}`]);

  function changePhrase() {
    setPhrase(phrases[randomIndex(phrases.length)]);
    const newIndex = randomIndex(images.length);
    setImg(images[newIndex]);
    setColor(colors[`bg${newIndex + 1}`]);
  }

  return (
    <div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
      <div className="header">
        <svg
          width="400"
          height="150"
          viewBox="0 0 400 120"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter
              id="outer-stroke"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%">
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="3"
                result="expanded"
              />
              <feFlood flood-color={color.light} />
              <feComposite in2="expanded" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <text
            x="50%"
            y="35%"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="40"
            font-family="'CHINESETAKEAWAY', sans-serif"
            fill={color.dark}
            filter="url(#outer-stroke)">
            Galleta
          </text>
          <text
            x="50%"
            y="60%"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="20"
            font-family="'CHINESETAKEAWAY', sans-serif"
            fill={color.dark}
            filter="url(#outer-stroke)">
            de la
          </text>

          <text
            x="50%"
            y="85%"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="40"
            font-family="'CHINESETAKEAWAY', sans-serif"
            fill={color.dark}
            filter="url(#outer-stroke)">
            Suerte
          </text>
        </svg>
      </div>
      <svg
        className="rectangle"
        width="640"
        height="259"
        viewBox="0 0 640 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_145_1359)" opacity={0.8}>
          <path
            d="M0 19.9344C0 19.9344 138.762 64.7867 281.262 19.9344C423.762 -24.918 627 19.9344 627 19.9344V225.508C627 225.508 454.598 180.189 313.5 225.508C172.402 270.828 0 225.508 0 225.508V19.9344Z"
            fill={color.light}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_145_1359"
            x="0"
            y="0"
            width="640"
            height="259"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="12" dy="12" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_145_1359"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_145_1359"
              result="shape"
            />
          </filter>
        </defs>

        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          font-weight="bold"
          fontFamily="'Niramit', serif"
          fill={color.dark}>
          Sobre {phrase.topic}
        </text>
        <text
          className="quote"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="24"
          fontFamily="'Niramit', serif" // Asegúrate de que la fuente tenga una variante cursiva
          style={{ fontStyle: "italic" }}
          fill={color.dark}>
         " {phrase.phrase} "
        </text>
      </svg>
      <button className="btn" onClick={changePhrase}>
        Probar
      </button>
    </div>
  );
}

export default App;
