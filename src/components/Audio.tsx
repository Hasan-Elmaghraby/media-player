import { Play, Pause } from "lucide-react";
import { useControls } from "./hooks/use-controls";
import Volume from "./controls/Volume";

interface AudioProps {
  url: string;
  controls?: boolean;
}

export const AudioPlayer: React.FC<AudioProps> = ({ url, controls }) => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    handleSeek,
    handleVolumeChange,
    toggleMute,
    isMuted,
  } = useControls();

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md w-fit">
      <audio ref={audioRef} src={url} controls={false} />

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-400 cursor-pointer"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-64 cursor-pointer"
        />

        <span className="text-white text-sm">
          {Math.floor(currentTime) / 100} / {Math.floor(duration) / 100}
        </span>

        {controls && (
          <Volume
            volume={0.5}
            isMuted={isMuted}
            handleVolumeChange={handleVolumeChange}
            toggleMute={toggleMute}
          />
        )}
      </div>
    </div>
  );
};
