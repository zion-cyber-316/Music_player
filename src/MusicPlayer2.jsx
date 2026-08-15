import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

const songs = [
  {
    title: "Mujhse Mohabbat Ka Izhaar Karta",
    artist: "Satrang Music Official",
    src: "/songs/mujhse.mp3",
    image: "/images/mujhse.jpg",
  },
  {
    title: "Ham pyar karne wale",
    artist: "Arijit Singh",
    src: "/songs/hum.mp3",
    image: "/images/song2.jpg",
  },
  {
    title: "choliya ke huk",
    artist: "Arijit Singh",
    src: "/songs/Choliya.mp3",
    image: "/images/song3.jpg",
  },
    {
    title: "ghoogat ki aad se",
    artist: "Arijit Singh",
    src: "/songs/ghoogat.mp3",
    image: "/images/song3.jpg",
  },
    {
    title: "GOAT",
    artist: "Arijit Singh",
    src: "/songs/goat.mp3",
    image: "/images/song3.jpg",
  },
    {
    title: "Aari Aari",
    artist: "Arijit Singh",
    src: "/songs/aari.mp3",
    image: "/images/song3.jpg",
  },
    {
    title: "Jaan se gujarte hai",
    artist: "Arijit Singh",
    src: "/songs/jaanse.mp3",
    image: "/images/song3.jpg",
  },
    {
    title: "wo tassbor k aalam",
    artist: "Arijit Singh",
    src: "/songs/wotassv.mp3",
    image: "/images/song3.jpg",
  },
   {
    title: "vo meri need ",
    artist: "Arijit Singh",
    src: "/songs/vomeri.mp3",
    image: "/images/song3.jpg",
  },
];

const MusicPlayer2 = () => {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = songs[currentSong];

  // Play / Pause
  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Next
  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  // Previous
  const handlePrevious = () => {
    setCurrentSong(
      (prev) => (prev - 1 + songs.length) % songs.length
    );
    setIsPlaying(true);
  };

  // Song change ke baad play
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.log(error));
    }
  }, [currentSong]);

  // Time update
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Duration
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Progress bar
  const handleProgress = (e) => {
    const value = Number(e.target.value);

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // Next song automatically
  const handleEnded = () => {
    handleNext();
  };

  // Time format
  const formatTime = (time) => {
    if (!time || isNaN(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (

    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[60%] sm:w-[90%] md:w-[450px]">

  <div
    className="
      w-full
      h-[70px]
      sm:h-[80px]
      md:h-[90px]

      rounded-[35px]
      sm:rounded-[40px]
      md:rounded-[45px]

      px-3
      sm:px-4
      md:px-4

      flex
      items-center

      gap-2
      sm:gap-3
      md:gap-3

      shadow-2xl
      backdrop-blur-xl
      bg-white/10
      border
      border-white/20
    "
  >

    {/* Album Image */}

    <img
      src={song.image}
      alt={song.title}
      className="
        w-12
        h-12
        sm:w-14
        sm:h-14
        md:w-16
        md:h-16
        rounded-full
        object-cover
        shadow-lg
        flex-shrink-0
      "
    />

    {/* Song Information */}

    <div className="flex-1 min-w-0">

      <h2 className="text-white font-bold text-xs sm:text-sm md:text-base truncate">
        {song.title}
      </h2>

      <p className="text-white/70 text-[10px] sm:text-xs mt-0.5 truncate">
        {song.artist}
      </p>

      {/* Progress */}

      <div className="flex items-center gap-1 sm:gap-2 mt-1">

        <span className="text-white/80 text-[8px] sm:text-[10px]">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgress}
          className="
            flex-1
            h-1
            appearance-none
            cursor-pointer
            accent-white
          "
        />

        <span className="text-white/80 text-[8px] sm:text-[10px]">
          {formatTime(duration)}
        </span>

      </div>

    </div>

    {/* Controls */}

    <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 pr-1">

      {/* Previous */}

      <button
        onClick={handlePrevious}
        className="text-white/80 hover:text-white transition"
      >
        <FaStepBackward
          size={11}
          className="sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]"
        />
      </button>

      {/* Play Pause */}

      <button
        onClick={handlePlayPause}
        className="
          w-9
          h-9
          sm:w-10
          sm:h-10
          md:w-11
          md:h-11
          rounded-full
          bg-white
          text-black
          flex
          items-center
          justify-center
          hover:scale-105
          transition
          shadow-lg
          flex-shrink-0
        "
      >
        {isPlaying ? (
          <FaPause size={12} />
        ) : (
          <FaPlay size={12} className="ml-0.5" />
        )}
      </button>

      {/* Next */}

      <button
        onClick={handleNext}
        className="text-white/80 hover:text-white transition"
      >
        <FaStepForward
          size={11}
          className="sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]"
        />
      </button>

    </div>

    {/* Audio */}

    <audio
      ref={audioRef}
      src={song.src}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetadata}
      onEnded={handleEnded}
    />

  </div>

</div>

//     <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[60%] sm:w-[90%] md:w-[450px] sm: h-20">

//   <div
//     className="
//       w-full
//       min-h-[90px]
//       sm:min-h-[110px]
//       md:h-[130px]
//       rounded-[35px]
//       sm:rounded-[50px]
//       md:rounded-[70px]
//       px-3
//       sm:px-4
//       md:px-5
//       py-3
//       flex
//       items-center
//       gap-3
//       sm:gap-4
//       md:gap-5
//       shadow-2xl
//       backdrop-blur-xl
//       bg-white/10
//       border
//       border-white/20
//     "
//   >

//     {/* Album Image */}

//     <img
//       src={song.image}
//       alt={song.title}
//       className="
//         w-14
//         h-14
//         sm:w-20
//         sm:h-20
//         md:w-[100px]
//         md:h-[100px]
//         rounded-full
//         object-cover
//         shadow-lg
//         flex-shrink-0
//       "
//     />

//     {/* Song Information */}

//     <div className="flex-1 min-w-0">

//       <h2 className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
//         {song.title}
//       </h2>

//       <p className="text-white/70 text-xs sm:text-sm mt-1 truncate">
//         {song.artist}
//       </p>

//       {/* Progress */}

//       <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4">

//         <span className="text-white/80 text-[9px] sm:text-xs">
//           {formatTime(currentTime)}
//         </span>

//         <input
//           type="range"
//           min="0"
//           max={duration || 0}
//           value={currentTime}
//           onChange={handleProgress}
//           className="
//             flex-1
//             h-1
//             appearance-none
//             cursor-pointer
//             accent-white
//           "
//         />

//         <span className="text-white/80 text-[9px] sm:text-xs">
//           {formatTime(duration)}
//         </span>

//       </div>

//     </div>

//     {/* Controls */}

//     <div className="flex items-center gap-2 sm:gap-4 md:gap-6 pr-1 sm:pr-2 md:pr-3">

//       {/* Previous */}

//       <button
//         onClick={handlePrevious}
//         className="text-white/80 hover:text-white transition"
//       >
//         <FaStepBackward size={12} className="sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px]" />
//       </button>

//       {/* Play Pause */}

//       <button
//         onClick={handlePlayPause}
//         className="
//           w-10
//           h-10
//           sm:w-12
//           sm:h-12
//           md:w-14
//           md:h-14
//           rounded-full
//           bg-white
//           text-black
//           flex
//           items-center
//           justify-center
//           hover:scale-105
//           transition
//           shadow-lg
//           flex-shrink-0
//         "
//       >
//         {isPlaying ? (
//           <FaPause size={14} className="sm:w-4 sm:h-4" />
//         ) : (
//           <FaPlay size={14} className="sm:w-4 sm:h-4 ml-1" />
//         )}
//       </button>

//       {/* Next */}

//       <button
//         onClick={handleNext}
//         className="text-white/80 hover:text-white transition"
//       >
//         <FaStepForward size={12} className="sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px]" />
//       </button>

//     </div>

//     {/* Audio */}

//     <audio
//       ref={audioRef}
//       src={song.src}
//       onTimeUpdate={handleTimeUpdate}
//       onLoadedMetadata={handleLoadedMetadata}
//       onEnded={handleEnded}
//     />

//   </div>

// </div>
    // <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">

    //   <div
    //     className="
    //       w-[680px]
    //       h-[130px]
    //       rounded-[70px]
    //       px-5
    //       flex
    //       items-center
    //       gap-5
    //       shadow-2xl
    //       backdrop-blur-md
    //       bg-[#a94d3e]/90
    //       border
    //       border-white/20
    //     "
    //   >

    //     {/* Album Image */}

    //     <img
    //       src={song.image}
    //       alt={song.title}
    //       className="
    //         w-[100px]
    //         h-[100px]
    //         rounded-full
    //         object-cover
    //         shadow-lg
    //         flex-shrink-0
    //       "
    //     />

    //     {/* Song Information */}

    //     <div className="flex-1 min-w-0">

    //       <h2 className="text-white font-bold text-lg truncate">
    //         {song.title}
    //       </h2>

    //       <p className="text-white/70 text-sm mt-1">
    //         {song.artist}
    //       </p>

    //       {/* Progress */}

    //       <div className="flex items-center gap-2 mt-4">

    //         <span className="text-white/80 text-xs">
    //           {formatTime(currentTime)}
    //         </span>

    //         <input
    //           type="range"
    //           min="0"
    //           max={duration || 0}
    //           value={currentTime}
    //           onChange={handleProgress}
    //           className="
    //             flex-1
    //             h-1
    //             appearance-none
    //             cursor-pointer
    //             accent-white
    //           "
    //         />

    //         <span className="text-white/80 text-xs">
    //           {formatTime(duration)}
    //         </span>

    //       </div>

    //     </div>

    //     {/* Controls */}

    //     <div className="flex items-center gap-6 pr-3">

    //       {/* Previous */}

    //       <button
    //         onClick={handlePrevious}
    //         className="text-white/80 hover:text-white transition"
    //       >
    //         <FaStepBackward size={15} />
    //       </button>

    //       {/* Play Pause */}

    //       <button
    //         onClick={handlePlayPause}
    //         className="
    //           w-14
    //           h-14
    //           rounded-full
    //           bg-white
    //           text-black
    //           flex
    //           items-center
    //           justify-center
    //           hover:scale-105
    //           transition
    //           shadow-lg
    //         "
    //       >
    //         {isPlaying ? (
    //           <FaPause size={18} />
    //         ) : (
    //           <FaPlay size={18} className="ml-1" />
    //         )}
    //       </button>

    //       {/* Next */}

    //       <button
    //         onClick={handleNext}
    //         className="text-white/80 hover:text-white transition"
    //       >
    //         <FaStepForward size={15} />
    //       </button>

    //     </div>

    //     {/* Audio */}

    //     <audio
    //       ref={audioRef}
    //       src={song.src}
    //       onTimeUpdate={handleTimeUpdate}
    //       onLoadedMetadata={handleLoadedMetadata}
    //       onEnded={handleEnded}
    //     />

    //   </div>

    // </div>
  );
};

export default MusicPlayer2;