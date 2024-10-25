import { useState } from "react";
import "./App.css";
import { bg1, bg2, bg3, bg4 } from "./assets/images/";
import phrases from "./phrases.json";

const images = [bg1, bg2, bg3, bg4];

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
  const [img, setImg] = useState(images[randomIndex(images.length)]);

  function changePhrase() {
    setPhrase(phrases[randomIndex(phrases.length)]);
    setImg(images[randomIndex(images.length)]);
  }

  console.log(phrases);

  return (
    <div className="app-container" style={{ backgroundImage: `url('${img}')` }}>
      <div>
        <svg
          width="640"
          height="259"
          viewBox="0 0 640 259"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_145_1359)">
            <path
              d="M0 19.9344C0 19.9344 138.762 64.7867 281.262 19.9344C423.762 -24.918 627 19.9344 627 19.9344V225.508C627 225.508 454.598 180.189 313.5 225.508C172.402 270.828 0 225.508 0 225.508V19.9344Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_145_1359"
              x="0"
              y="0"
              width="640"
              height="258.65"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            y="45%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fontFamily="'Playfair Display', serif"
            fill="black">
            Sobre {phrase.topic}
          </text>
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="16"
            fill="black">
            {phrase.phrase}
          </text>
        </svg>
      </div>
      <button onClick={changePhrase}>Frase</button>
    </div>
  );
}

export default App;
