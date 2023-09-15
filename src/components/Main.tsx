import { useEffect, useState } from 'react';

import Avatar from './Avatar';

import bonoAudio from '../assets/bonoaudio.mp3';
import luanAudio from '../assets/luangameplays.mp3';

export default function Main() {
  const [bonoClicks, setBonoClicks] = useState(0);
  const [luanClicks, setluanClicks] = useState(0);

  useEffect(() => {
    if (bonoClicks === 30) {
      new Audio(bonoAudio).play();
    }

    if (luanClicks === 30) {
      new Audio(luanAudio).play();
    }
  });

  return (
    <>
      <Avatar />
      <h2 className="text-3xl font-black">
        <span>
          Hi,&nbsp;
          <span
            onClick={() => {
              setluanClicks(luanClicks + 1);
            }}
          >
            👋&nbsp;
          </span>
          i'm Lucas <br />
        </span>
      </h2>
      <h2 className="text-2xl font-light">
        <span>
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
