import React, { useRef, useState } from "react";
import { FaVolumeUp, FaPause } from "react-icons/fa";

const M3 = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/songs/3.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      <button
        onClick={handlePlay}
        className="
          w-12
          h-12
          rounded-full
          bg-white/15
          backdrop-blur-md
          border
          border-white/20
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:bg-white/25
          transition
        "
      >
        {isPlaying ? (
          <FaPause size={17} />
        ) : (
          <FaVolumeUp size={19} />
        )}
      </button>
    </>
  );
};

export default M3;