/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

const bgs = [
  'bg-cor1',
  'bg-cor2',
  'bg-cor3',
  'bg-cor4',
  'bg-cor5',
  'bg-cor6',
  'bg-cor7',
  'bg-cor8',
  'bg-cor9',
  'bg-cor10',
  'bg-cor11',
  'bg-cor12',
];

const color = [
  'color-cor1',
  'color-cor2',
  'color-cor3',
  'color-cor4',
  'color-cor5',
  'color-cor6',
  'color-cor7',
  'color-cor8',
  'color-cor9',
  'color-cor10',
  'color-cor11',
  'color-cor12',
];


function App () {
  const [frases, setFrases] = useState ([]);
  const [autor, setAutor] = useState ([]);
  const [randomIndex, setRandomIndex] = useState (0);
  const [bgColor, setBgColors] = useState (bgs[0]);
  const [isFadeOut, setIsFadeOut] = useState (false);
  const [colors, setcolor] = useState (color[0]);
  const [randomColor, setrandomColor] = useState (0);

  useEffect (
    () => {
      fetch (
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
        .then (response => {
          return response.json ();
        })
        .then (data => {
          setFrases (data.quotes[randomIndex].quote);
          setAutor (data.quotes[randomIndex].author);
          setrandomColor (random (bgs));
          setIsFadeOut (true);
          setTimeout (function () {
            setIsFadeOut (false);
          }, 1000);
          setBgColors (bgs[randomColor]);
          setcolor (color[randomColor]);
          document.body.removeAttribute ('class');
          document.body.classList.add (bgs[randomColor]);
        });
    },
    [randomIndex]
  );
  function random (arr) {
    return Math.floor (Math.random () * arr.length);
  
  }
  function handClick () {
    setRandomIndex (Math.floor (Math.random () * 102));
    
  }
  const animationClass = isFadeOut ? 'fadeOut' : '';
  
  return (
    <div className="container-fluid">
      <header>
        <div className="frases-box">
          <span id={colors} className={animationClass}>
            <i className="fas fa-quote-left" />
          </span>
          <h1 id={colors} className={animationClass}>
            {frases}
          </h1>
          <br />
          <h2 id={colors} className={animationClass}>
            {' '}- {autor}
          </h2>
          <div className="buttons">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
              rel="noreferrer"
              className={bgColor}
            >
              <i className="fa fa-twitter" />
            </a>
            <button className={bgColor} onClick={handClick} type="button">
              Próxima
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
