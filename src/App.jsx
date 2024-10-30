import { useState } from "react";
import "./assets/styles/App.css";
import { bg1, bg2, bg3, bg4 } from "./assets/images/";
import phrases from "./data/phrases.json";
import { randomIndex } from "./helpers/random-index";

const images = [bg1, bg2, bg3, bg4];

const colors = {
  bg1: { light: "#d9ead3", dark: "#4b6100" },
  bg2: { light: "#fde4f1", dark: "#e80076" },
  bg3: { light: "#FFEFB3", dark: "#ff5b00" },
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
      <div className="card">
        <div className="card__heading-mobile">
          <svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
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
              y="30%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="50"
              font-family="'CHINESETAKEAWAY', sans-serif"
              fill={color.dark}
              filter="url(#outer-stroke)">
              Galleta
            </text>
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="30"
              font-family="'CHINESETAKEAWAY', sans-serif"
              fill={color.dark}
              filter="url(#outer-stroke)">
              de la
            </text>

            <text
              x="50%"
              y="75%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="60"
              font-family="'CHINESETAKEAWAY', sans-serif"
              fill={color.dark}
              filter="url(#outer-stroke)">
              Fortuna
            </text>
          </svg>
        </div>
        <div className="card__heading">
          <svg
            width="800"
            height="200"
            viewBox="0 0 400 300"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter
                id="outer-stroke1"
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
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="100"
              font-family="'CHINESETAKEAWAY', sans-serif"
              fill={color.dark}
              filter="url(#outer-stroke1)">
              Galleta de la Fortuna
            </text>
          </svg>
        </div>
        <div className="card__rectangle">
          <div className="card__rectangle--quote">
            <h2 style={{ color: color.dark }}> Sobre {phrase.topic}</h2>
            <q style={{ color: color.dark }}>{phrase.phrase}</q>
            <div className="card__rectangle--body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 200">
                <path
                  d="M -0.001 16.284 C -0.001 16.284 132.823 52.761 269.186 16.284 C 405.55 -20.356 600 16.284 600 16.284 L 600 183.607 C 600 183.607 435.023 146.723 300 183.607 C 164.976 220.491 -0.001 183.607 -0.001 183.607 L -0.001 16.284 Z"
                  fill={color.light}
                  transform-origin="299.999px 99.999px">
                  <title>bgRectangle</title>
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div className="card__btn">
          <svg
            onClick={changePhrase}
            id="btn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150">
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="3"
                  flood-color="black"
                  flood-opacity="0.5"
                />
              </filter>
            </defs>
            <polygon
              id="btn_x5F_form"
              points="253.91 99.84 60.99 80.44 61.05 33.56 253.91 3.38 253.91 99.84"
              filter="url(#shadow)"
              fill={color.dark}
              stroke={color.light}
              stroke-miterlimit="10"
              stroke-width="5.79px"
            />
            <g id="cloud" filter="url(#shadow)">
              <path
                d="M275.88,86.77c5.24,4.6,6.39,11.78,6.39,14.16,0,.1-.01.21-.02.31,2.3-3.48,2.25-7.06,1.69-9.65-1.02-4.74-4.52-9.18-8.32-10.56-4.73-1.71-9.06-.68-11.35.16.33.74.57,1.41.75,1.98,4.24-.19,7.89,1.01,10.86,3.61Z"
                fill="none"
              />
              <path
                d="M213.5,112.45c-.36-2.29,0-4.3,1.09-6.01-3.16-.39-6.61-1.62-9.24-3.89-2.43-2.09-5.17-5.96-4.67-12.51-2.27-1.62-9.2-5.63-15.38.49-3.3,3.26-2.71,6.82-1.94,7.94.69,1,1.16,1.47,4.56,1.42,1.3-.02,1.89-1.68,1.92-2.56.02-.63-.1-.88-.14-.93-.04-.05-.3-.17-.92-.17.47.73.4,1.71-.22,2.36-.73.78-1.95.82-2.73.09-1.85-1.74-1.48-3.37-1.23-4,.57-1.43,2.16-2.32,4.16-2.32,1.61,0,2.86.45,3.72,1.34s1.28,2.15,1.23,3.74c-.09,3.06-2.26,6.26-5.73,6.31-.17,0-.34,0-.51,0-3.35,0-5.54-.55-7.29-3.1-.45-.66-.83-1.56-1.06-2.61-3.54.13-12.06,1.32-15.84,9.53-2.24,4.87-.29,7.95.65,9.05.17.2.35.38.54.56-.52-1.53-.58-3.5-.05-5.26.96-3.21,3.59-5.23,7.23-5.54,6.33-.54,9.45,2.64,12.74,6.02,3.36,3.45,7.17,7.36,15.77,9.3,5.18,1.17,12.77,0,15.46-2.97-1.03-1.78-1.73-3.86-2.12-6.3Z"
                fill="none"
              />
              <path
                d="M278.33,109.51c-2.86,2.79-6.84,4.57-10.19,4.57-.08,0-.15,0-.23,0-6.86-.17-11.65-4.35-12.21-10.64-.52-5.77,3.44-8.74,7.6-9.12,3.17-.29,6.85,1.77,7.46,6.97.34,2.93-.99,4.29-1.82,4.84-1.81,1.2-4.34.79-5.92-.1-.93-.52-1.26-1.7-.74-2.63.52-.93,1.7-1.26,2.63-.74.62.35,1.6.44,1.89.25.08-.05.21-.41.12-1.17-.41-3.54-2.6-3.63-3.27-3.56-1.68.15-4.45,1-4.1,4.92.39,4.34,3.55,7,8.46,7.12,2.33.05,5.47-1.37,7.62-3.47,1.27-1.24,2.78-3.25,2.78-5.82,0-2.22-1.24-7.89-5.07-11.25-2.48-2.18-5.68-3.03-9.51-2.53-1.03.14-1.98-.57-2.16-1.59-.03-.16-.39-2.03-1.64-4.23-.03-.04-.06-.08-.09-.12-.02-.03-.03-.07-.05-.11-1.45-2.46-4.02-5.28-8.47-6.59-8.46-2.49-13.42,2.48-13.84,2.93-.31.45-.79.76-1.35.83-.74.09-1.46-.24-1.86-.85-.13-.18-3.45-4.87-11.85-3.62-10.49,1.55-16.79,4.68-17.95,16.11-.42,4.19.69,7.45,3.31,9.71,3.48,3,8.71,3.47,11.16,2.84,4.36-1.11,8.51-4.77,7.92-8.97-.62-4.39-4.82-8.99-9.52-8.58-3.01.26-5.08,1-5.99,2.14-.52.65-.7,1.5-.55,2.6.19,1.45,2.07,2.61,3.49,2.56.43-.02,1.45-.06,1.54-2,.05-1.07.96-1.9,2.02-1.84,1.07.05,1.89.95,1.84,2.02-.16,3.32-2.21,5.56-5.23,5.69-3.21.14-6.99-2.2-7.49-5.91-.29-2.17.17-4.03,1.37-5.53,1.63-2.04,4.47-3.21,8.67-3.57,6.32-.55,12.72,5,13.68,11.89.53,3.81-1.19,7.14-3.88,9.57.41.18.82.38,1.2.63,2.35,1.48,3.69,3.89,3.76,6.79.08,3.1-1.07,4.88-2.05,5.82-1.17,1.13-2.8,1.75-4.35,1.65-1.43-.09-3.37-.5-4.49-1.92-.68-.86-.93-1.93-.72-3.09.29-1.64,1.18-2.85,2.44-3.33,1.17-.44,2.45-.2,3.53.67.83.67.97,1.88.3,2.72-.6.75-1.63.93-2.44.49,0,.04-.02.08-.03.13,0,.03,0,.05,0,.06.16.13.71.36,1.66.42.27.02.91-.08,1.43-.58.76-.73.89-2,.87-2.94-.04-1.63-.68-2.81-1.96-3.61-1.69-1.06-3.82-1.02-4.54-.69-3.43,1.55-4.65,3.32-4.2,6.11.91,5.72,3.57,9.63,13.99,11.46,9.76,1.71,15.19-4.96,15.42-5.24.38-.48.97-.75,1.59-.73.62.02,1.19.34,1.53.85.15.21,4.06,5.56,14.91,3.75,6.43-1.07,10.91-3.46,13.31-7.1,1.73-2.62,2.01-5.41,1.96-7.27-.49.68-1.05,1.34-1.69,1.96Z"
                fill="none"
              />
              <g>
                <path
                  d="M291.7,89.6c-1.31-6.05-5.74-11.55-10.78-13.38-6.3-2.28-11.9-.7-14.59.39-1.94-2.74-5-5.56-9.83-6.97-7.73-2.27-13.55.53-16.41,2.81-2.13-1.95-6.62-4.75-14.14-3.64-9.24,1.36-18.01,4.3-20.64,15.85-4.69-2.71-12.24-4.47-18.73,1.96-2.12,2.1-3.16,4.34-3.53,6.41-4.3.15-14.6,1.61-19.29,11.78-2.21,4.79-1.75,9.72,1.23,13.19,2.27,2.64,5.51,3.85,8.26,3.06,2.34-.67,3.93-2.69,4.36-5.54.12-.8-.26-1.58-.97-1.97-.7-.39-1.58-.31-2.19.22-.71.6-1.76,1.17-2.25,1.24-.28-.6-.52-2.21.1-3.63.6-1.36,1.84-2.13,3.68-2.29,4.52-.39,6.56,1.7,9.64,4.87,3.56,3.64,7.98,8.18,17.69,10.37,1.54.35,3.36.54,5.26.54,4.89,0,10.37-1.24,13.48-4.22,2.78,2.62,6.86,4.3,12.59,5.3,1.35.23,2.63.34,3.85.34,6.82,0,11.5-3.32,13.75-5.4,2.41,2.12,7.74,5.26,17.16,3.68,7.57-1.26,12.93-4.24,15.93-8.84,2.92-4.48,2.71-9.2,2.41-11.3,3.76-4.1,5.17-9.32,3.98-14.82ZM204.14,120.55c-8.6-1.95-12.41-5.85-15.77-9.3-3.29-3.38-6.41-6.56-12.74-6.02-3.64.31-6.28,2.33-7.23,5.54-.53,1.77-.47,3.73.05,5.27-.19-.17-.37-.36-.54-.56-.94-1.1-2.89-4.18-.65-9.05,3.78-8.21,12.29-9.39,15.84-9.53.22,1.05.61,1.95,1.06,2.61,1.76,2.55,3.94,3.1,7.29,3.1h.51c3.47-.05,5.64-3.25,5.73-6.31.05-1.59-.37-2.85-1.24-3.74-.86-.89-2.11-1.34-3.72-1.34-1.99,0-3.59.89-4.16,2.32-.25.63-.62,2.26,1.24,4,.77.73,2,.69,2.73-.09.62-.66.69-1.63.22-2.36.63,0,.88.12.93.16s.15.31.14.94c-.03.88-.62,2.54-1.92,2.56-3.39.05-3.87-.43-4.56-1.42-.77-1.13-1.35-4.69,1.94-7.95,6.19-6.12,13.11-2.12,15.39-.49-.5,6.55,2.23,10.41,4.66,12.51,2.64,2.27,6.08,3.5,9.25,3.89-1.09,1.72-1.46,3.73-1.1,6.02.39,2.44,1.09,4.52,2.12,6.29-2.69,2.96-10.28,4.14-15.46,2.98ZM282.04,113.66c-2.39,3.64-6.87,6.03-13.31,7.1-10.84,1.81-14.75-3.53-14.91-3.75-.34-.51-.91-.82-1.52-.85-.62-.02-1.21.26-1.59.73-.23.29-5.66,6.95-15.42,5.24-10.41-1.82-13.07-5.74-13.99-11.46-.44-2.79.77-4.56,4.21-6.12.71-.32,2.84-.36,4.53.7,1.28.8,1.92,1.99,1.96,3.61.02.94-.11,2.21-.87,2.94-.52.49-1.16.6-1.43.58-.95-.06-1.49-.29-1.65-.42,0-.02,0-.04,0-.06,0-.05.02-.09.02-.13.81.44,1.85.26,2.44-.49.66-.84.53-2.05-.3-2.71-1.08-.87-2.37-1.11-3.53-.66-1.26.47-2.15,1.69-2.44,3.32-.2,1.16.05,2.23.73,3.09,1.12,1.42,3.06,1.82,4.49,1.92,1.55.09,3.18-.52,4.35-1.65.98-.94,2.13-2.71,2.06-5.81-.08-2.9-1.41-5.31-3.77-6.79-.39-.25-.8-.45-1.21-.63,2.69-2.42,4.41-5.75,3.88-9.56-.97-6.89-7.36-12.44-13.68-11.89-4.2.37-7.04,1.54-8.67,3.57-1.2,1.49-1.65,3.36-1.37,5.53.49,3.71,4.28,6.05,7.49,5.91,3.02-.13,5.07-2.37,5.23-5.69.05-1.07-.77-1.97-1.84-2.02-1.06-.06-1.97.77-2.02,1.84-.09,1.94-1.11,1.99-1.54,2-1.41.05-3.29-1.11-3.49-2.56-.15-1.11.03-1.96.55-2.6.91-1.14,2.98-1.88,5.99-2.14,4.69-.41,8.9,4.19,9.52,8.58.59,4.2-3.56,7.86-7.92,8.97-2.44.63-7.68.15-11.16-2.85-2.62-2.26-3.73-5.52-3.31-9.71,1.16-11.43,7.46-14.57,17.95-16.11,8.4-1.24,11.73,3.44,11.85,3.63.41.62,1.13.95,1.86.86.56-.08,1.04-.39,1.35-.84.43-.46,5.37-5.43,13.84-2.94,4.45,1.31,7.02,4.13,8.47,6.59.02.04.02.08.05.11.02.05.05.08.09.12,1.25,2.2,1.61,4.07,1.64,4.23.17,1.03,1.12,1.73,2.16,1.59,3.82-.5,7.02.35,9.51,2.53,3.83,3.36,5.07,9.03,5.07,11.25,0,2.57-1.51,4.58-2.78,5.82-2.15,2.1-5.3,3.52-7.62,3.46-4.91-.12-8.07-2.78-8.46-7.12-.35-3.92,2.42-4.76,4.1-4.92.66-.06,2.85.02,3.27,3.56.09.77-.05,1.11-.12,1.17-.28.19-1.27.09-1.89-.26-.93-.52-2.11-.19-2.63.74-.53.93-.19,2.11.73,2.63,1.58.9,4.11,1.31,5.92.1.83-.55,2.16-1.9,1.82-4.83-.6-5.2-4.29-7.26-7.45-6.97-4.15.38-8.12,3.34-7.6,9.12.56,6.29,5.36,10.48,12.21,10.64.08,0,.15,0,.23,0,3.36,0,7.33-1.78,10.19-4.57.63-.62,1.2-1.28,1.69-1.96.05,1.86-.23,4.65-1.96,7.28ZM279.87,85.6c-2.97-2.61-6.62-3.8-10.86-3.61-.18-.56-.43-1.24-.75-1.97,2.28-.84,6.62-1.88,11.35-.16,3.8,1.38,7.29,5.81,8.32,10.55.56,2.6.61,6.18-1.69,9.66,0-.1.02-.21.02-.31,0-2.38-1.15-9.56-6.39-14.16Z"
                  fill={color.light}
                />
                <path
                  d="M286.24,100.07c0-.1.02-.21.02-.31,0-2.38-1.15-9.56-6.39-14.16-2.97-2.61-6.62-3.8-10.86-3.61-.18-.56-.43-1.24-.75-1.97,2.28-.84,6.62-1.88,11.35-.16,3.8,1.38,7.29,5.81,8.32,10.55.56,2.6.61,6.18-1.69,9.66Z"
                  fill={color.dark}
                />
                <path
                  d="M282.04,113.66c-2.39,3.64-6.87,6.03-13.31,7.1-10.84,1.81-14.75-3.53-14.91-3.75-.34-.51-.91-.82-1.52-.85-.62-.02-1.21.26-1.59.73-.23.29-5.66,6.95-15.42,5.24-10.41-1.82-13.07-5.74-13.99-11.46-.44-2.79.77-4.56,4.21-6.12.71-.32,2.84-.36,4.53.7,1.28.8,1.92,1.99,1.96,3.61.02.94-.11,2.21-.87,2.94-.52.49-1.16.6-1.43.58-.95-.06-1.49-.29-1.65-.42,0-.02,0-.04,0-.06,0-.05.02-.09.02-.13.81.44,1.85.26,2.44-.49.66-.84.53-2.05-.3-2.71-1.08-.87-2.37-1.11-3.53-.66-1.26.47-2.15,1.69-2.44,3.32-.2,1.16.05,2.23.73,3.09,1.12,1.42,3.06,1.82,4.49,1.92,1.55.09,3.18-.52,4.35-1.65.98-.94,2.13-2.71,2.06-5.81-.08-2.9-1.41-5.31-3.77-6.79-.39-.25-.8-.45-1.21-.63,2.69-2.42,4.41-5.75,3.88-9.56-.97-6.89-7.36-12.44-13.68-11.89-4.2.37-7.04,1.54-8.67,3.57-1.2,1.49-1.65,3.36-1.37,5.53.49,3.71,4.28,6.05,7.49,5.91,3.02-.13,5.07-2.37,5.23-5.69.05-1.07-.77-1.97-1.84-2.02-1.06-.06-1.97.77-2.02,1.84-.09,1.94-1.11,1.99-1.54,2-1.41.05-3.29-1.11-3.49-2.56-.15-1.11.03-1.96.55-2.6.91-1.14,2.98-1.88,5.99-2.14,4.69-.41,8.9,4.19,9.52,8.58.59,4.2-3.56,7.86-7.92,8.97-2.44.63-7.68.15-11.16-2.85-2.62-2.26-3.73-5.52-3.31-9.71,1.16-11.43,7.46-14.57,17.95-16.11,8.4-1.24,11.73,3.44,11.85,3.63.41.62,1.13.95,1.86.86.56-.08,1.04-.39,1.35-.84.43-.46,5.37-5.43,13.84-2.94,4.45,1.31,7.02,4.13,8.47,6.59.02.04.02.08.05.11.02.05.05.08.09.12,1.25,2.2,1.61,4.07,1.64,4.23.17,1.03,1.12,1.73,2.16,1.59,3.82-.5,7.02.35,9.51,2.53,3.83,3.36,5.07,9.03,5.07,11.25,0,2.57-1.51,4.58-2.78,5.82-2.15,2.1-5.3,3.52-7.62,3.46-4.91-.12-8.07-2.78-8.46-7.12-.35-3.92,2.42-4.76,4.1-4.92.66-.06,2.85.02,3.27,3.56.09.77-.05,1.11-.12,1.17-.28.19-1.27.09-1.89-.26-.93-.52-2.11-.19-2.63.74-.53.93-.19,2.11.73,2.63,1.58.9,4.11,1.31,5.92.1.83-.55,2.16-1.9,1.82-4.83-.6-5.2-4.29-7.26-7.45-6.97-4.15.38-8.12,3.34-7.6,9.12.56,6.29,5.36,10.48,12.21,10.64.08,0,.15,0,.23,0,3.36,0,7.33-1.78,10.19-4.57.63-.62,1.2-1.28,1.69-1.96.05,1.86-.23,4.65-1.96,7.28Z"
                  fill={color.dark}
                />
                <path
                  d="M219.6,117.58c-2.69,2.96-10.28,4.14-15.46,2.98-8.6-1.95-12.41-5.85-15.77-9.3-3.29-3.38-6.41-6.56-12.74-6.02-3.64.31-6.28,2.33-7.23,5.54-.53,1.77-.47,3.73.05,5.27-.19-.17-.37-.36-.54-.56-.94-1.1-2.89-4.18-.65-9.05,3.78-8.21,12.29-9.39,15.84-9.53.22,1.05.61,1.95,1.06,2.61,1.76,2.55,3.94,3.1,7.29,3.1h.51c3.47-.05,5.64-3.25,5.73-6.31.05-1.59-.37-2.85-1.24-3.74-.86-.89-2.11-1.34-3.72-1.34-1.99,0-3.59.89-4.16,2.32-.25.63-.62,2.26,1.24,4,.77.73,2,.69,2.73-.09.62-.66.69-1.63.22-2.36.63,0,.88.12.93.16s.15.31.14.94c-.03.88-.62,2.54-1.92,2.56-3.39.05-3.87-.43-4.56-1.42-.77-1.13-1.35-4.69,1.94-7.95,6.19-6.12,13.11-2.12,15.39-.49-.5,6.55,2.23,10.41,4.66,12.51,2.64,2.27,6.08,3.5,9.25,3.89-1.09,1.72-1.46,3.73-1.1,6.02.39,2.44,1.09,4.52,2.12,6.29Z"
                  fill={color.dark}
                />
              </g>
            </g>
            <g id="symbol" filter="url(#shadow)">
              <circle
                cx="48.69"
                cy="58.05"
                r="46.24"
                fill={color.dark}
                stroke={color.light}
                stroke-miterlimit="10"
                stroke-width="4.9px"
              />
              <path
                d="M67.09,62.19c0,1.13-.03,2.09.03,3.03,0,.15.4.38.62.39.99.04,1.97.04,2.96.01.61-.02.84.23.81.83-.03.61-.03,1.22,0,1.83.03.6-.22.84-.82.82-.99-.03-1.97-.01-2.96,0-.17,0-.34.05-.63.1,0,.95-.03,1.9.03,2.85.01.16.44.41.69.42.93.05,1.86.05,2.79.02.66-.02.92.22.92.92-.03,2.79-.01,5.58-.01,8.36,0,.97-.06,1.05-1.03,1.05-3.6,0-7.2,0-10.8,0-2.73,0-5.46,0-8.19,0-1.05,0-1.06,0-1.06-1.07,0-2.76,0-5.52,0-8.28,0-.94.03-.96.99-.97.78,0,1.57,0,2.35,0,1.03,0,1.04-.02,1.04-1,0-.55-.03-1.11,0-1.66.03-.58-.22-.75-.77-.75-2.18.02-4.36,0-6.54,0-1.37,0-2.73.02-4.1,0-.57-.01-.87.14-.83.78.04.61.04,1.22,0,1.83-.04.63.25.82.82.8.9-.02,1.8.01,2.7-.01.61-.02.88.17.88.84-.03,2.88-.03,5.75,0,8.63,0,.73-.29.88-.93.88-2.47-.02-4.94-.01-7.41-.01-3.86,0-7.73,0-11.59,0-1.16,0-1.17-.03-1.17-1.16,0-2.67,0-5.34,0-8.02,0-1.13,0-1.14,1.19-1.15.81,0,1.63-.02,2.44,0,.61.02.84-.23.82-.82-.02-.64-.01-1.28,0-1.92,0-.47-.2-.68-.69-.67-.99.02-1.98,0-2.96,0-.55,0-.81-.2-.79-.77.02-.67.02-1.34,0-2-.02-.54.24-.71.74-.7.99.02,1.98-.01,2.96.01.52.01.75-.17.74-.7-.02-.72-.02-1.44-.03-2.17,0-.47-.32-.57-.71-.57-.9,0-1.8,0-2.7,0-.96,0-1-.04-1.01-.96,0-2.79,0-5.58,0-8.36,0-.92.06-.97,1-.97,6.36,0,12.72,0,19.08,0,.97,0,.99.02,1,.96.01,2.87.02,5.74.04,8.62,0,.65-.4.79-.9.8-.95.01-1.91.03-2.85-.04-.53-.04-.69.18-.69.63,0,.7.03,1.39.01,2.09-.02.55.24.7.74.69,1.1-.02,2.21,0,3.31,0,2.44,0,4.88-.02,7.32.01.63,0,.91-.18.86-.84-.05-.64-.07-1.28-.04-1.91.03-.55-.2-.73-.71-.72-.93.02-1.86,0-2.79.03-.65.02-.93-.17-.91-.89.05-2.87.06-5.75.05-8.62,0-.7.33-.81.91-.81,2.35.02,4.7,0,7.06,0,3.98,0,7.96,0,11.94,0q1.19,0,1.19,1.23c0,2.67,0,5.34,0,8.02,0,1.02-.01,1.04-1,1.05-1.09.01-2.18,0-3.41,0ZM36.4,79.38c2.09,0,4.18-.02,6.27.01.65,0,.89-.23.86-.87-.03-.55,0-1.1,0-1.65,0-.91-.04-.95-.93-.95-2.73,0-5.46,0-8.19,0-1.42,0-2.85.02-4.27,0-.61-.01-.84.22-.81.82.03.55,0,1.1,0,1.65,0,.97.03.99.97.99,2.03,0,4.06,0,6.1,0ZM61.01,79.38c2.06,0,4.12-.02,6.19.01.65,0,.9-.22.85-.86-.04-.46,0-.93,0-1.39q0-1.21-1.18-1.21c-2.61,0-5.23,0-7.84,0-1.45,0-2.9.02-4.36,0-.61-.01-.84.22-.81.82.03.55,0,1.1,0,1.66,0,.96.03.99.97.99,2.06,0,4.12,0,6.19,0ZM36.47,55.35c-2.12,0-4.23.01-6.35,0-.54,0-.81.15-.79.74.03.67.02,1.33,0,2-.02.53.23.74.73.72.78-.02,1.56-.05,2.34-.05,3.44.01,6.89.03,10.33.06.47,0,.72-.2.74-.65.03-.61.04-1.21.04-1.82,0-.96-.02-.99-.96-.99-2.03,0-4.06,0-6.09,0ZM60.95,55.35c-2.09,0-4.18.02-6.27,0-.59,0-.86.17-.84.79.03.64.02,1.28,0,1.92-.01.55.22.8.78.77.81-.04,1.62-.08,2.43-.07,2.93.02,5.86.05,8.79.08.44,0,.87.02,1.31-.01.51-.03.89-.2.85-.84-.04-.58-.02-1.16.04-1.74.07-.71-.24-.9-.91-.89-2.06.03-4.12.01-6.18.01ZM60.88,65.62h0c.17,0,.35,0,.52,0,2.49,0,2.53-.04,2.25-2.56-.09-.79-.23-.89-1.05-.81-.23.02-.46-.02-.69-.02-1.01-.01-2.02-.03-3.03-.03-.35,0-.62.11-.61.55.02.75.01,1.5,0,2.25-.01.44.18.63.62.62.66-.02,1.33,0,1.99,0ZM36.44,65.63c.67,0,1.34-.02,2,0,.49.01.69-.19.67-.67-.03-.64-.07-1.28-.04-1.91.03-.67-.32-.86-.9-.86-1.29,0-2.58-.02-3.87.03-.2,0-.52.38-.54.6-.07.72-.02,1.45-.03,2.18,0,.5.26.65.72.64.67-.02,1.34,0,2,0ZM61,69.1c-.67,0-1.34.03-2,0-.59-.03-.77.23-.74.77.03.64.04,1.28,0,1.91-.02.54.22.71.72.71,1.31-.01,2.61,0,3.92,0,.49,0,.77-.16.76-.7-.02-.67-.02-1.34,0-2,.01-.53-.23-.72-.74-.7-.64.03-1.28,0-1.92,0ZM36.48,69.1h0c-.67,0-1.33.02-2,0-.58-.03-.78.23-.76.77.02.64.01,1.28,0,1.91,0,.45.16.71.65.71,1.36,0,2.73,0,4.09,0,.41,0,.66-.14.65-.61-.01-.72,0-1.45,0-2.17,0-.45-.2-.62-.64-.61-.67.01-1.33,0-2,0ZM64.19,48.51c2.12,0,4.24,0,6.36,0,.87,0,.94-.08.95-.95,0-.46,0-.93,0-1.39,0-1.1,0-1.11-1.12-1.11-2.29,0-4.59-.01-6.88.01-.63,0-.91-.2-.86-.86.04-.55,0-1.1,0-1.66,0-.88.07-.94.94-.95,1.89,0,3.78,0,5.66,0q2.26,0,2.25-2.24c0-1.14,0-1.15-1.16-1.16-2.27,0-4.53-.02-6.8,0-.67,0-.94-.23-.91-.92.04-1.04-.03-2.09.02-3.14.04-.71-.25-.93-.91-.89-.52.03-1.05,0-1.57,0-.87.01-.96.09-.97.94-.01.96,0,1.92,0,2.88,0,1.11,0,1.11-1.12,1.11-4.42,0-8.83,0-13.25,0-1.83,0-3.66,0-5.49,0q-1.18,0-1.19-1.14c0-1.02-.01-2.03,0-3.05,0-.5-.19-.75-.72-.74-.67.02-1.34,0-2,0-.51,0-.73.19-.72.73.03.99,0,1.98,0,2.96,0,1.25,0,1.24-1.27,1.24-2.27,0-4.53.03-6.8,0-.61,0-.84.22-.8.82.03.49,0,.99,0,1.48,0,1.09,0,1.09,1.12,1.09,2.27,0,4.53,0,6.8,0,.88,0,.93.06.94.95,0,.55-.03,1.11,0,1.66.04.65-.23.86-.87.85-1.92-.03-3.83-.01-5.75-.01q-2.26,0-2.25,2.25,0,1.21,1.22,1.21c6.25,0,12.49,0,18.74,0,.17,0,.35,0,.52,0,.44,0,.62-.21.61-.65-.01-.49,0-.99,0-1.48,0-1.46.09-1.31-1.31-1.32-2.21,0-4.42-.02-6.62,0-.64,0-.91-.21-.86-.85.03-.49,0-.99,0-1.48,0-1.12,0-1.12,1.11-1.12,6.25,0,12.49,0,18.74,0,.17,0,.35.01.52,0,.49-.03.67.23.67.69,0,.58,0,1.16,0,1.74,0,1.01,0,1.01-1.03,1.01-2.29,0-4.59.03-6.88-.01-.71-.01-.93.24-.88.91.04.49,0,.99,0,1.48,0,1.07.01,1.08,1.06,1.08,3.14,0,6.27,0,9.41,0,1.1,0,2.21,0,3.31,0Z"
                fill={color.light}
              />
            </g>
            <text
              transform="translate(108.87 65.29)"
              fill={color.light}
              font-family="Niramit-Bold, Niramit"
              font-size="33.76px"
              font-weight="700">
              <tspan x="0" y="0">
                P
              </tspan>
              <tspan x="20.7" y="0" letter-spacing="-.01em">
                R
              </tspan>
              <tspan x="40.88" y="0" letter-spacing="0em">
                O
              </tspan>
              <tspan x="64.25" y="0" letter-spacing=" -.04em">
                B
              </tspan>
              <tspan x="83.73" y="0">
                AR
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
