import { useEffect, useState } from 'react';

import Avatar from './Avatar';

import bonoAudio from '../assets/bonoaudio.mp3';
import faroAudio from '../assets/rodrigofaro.mp3';

export default function Main() {
  const [bonoClicks, setBonoClicks] = useState(0);
  const [faroClicks, setFaroClicks] = useState(0);

  useEffect(() => {
    if (bonoClicks === 30) {
      new Audio(bonoAudio).play();
    }

    if (faroClicks === 30) {
      new Audio(faroAudio).play();
    }
  });

  return (
    <>
      <Avatar />
      <h2 className="text-3xl font-black">
        Hi
        <span
          onClick={() => {
            setFaroClicks(faroClicks + 1);
          }}
        >
          👋
        </span>
        , i am Lucas <br />
        <span className="text-2xl font-light ">
          A person who likes to contribute
          <span
            onClick={() => {
              setBonoClicks(bonoClicks + 1);
            }}
          >
            ⭐
          </span>
          <br />
          <span className="hover:italic">back-end developer</span>
        </span>
      </h2>
    </>
  );
}
