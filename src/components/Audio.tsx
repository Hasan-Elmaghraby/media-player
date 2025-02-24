import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useControls } from "./hooks/use-controls";

interface AudioProps {
  url: string;
  controls?: boolean;
}
export const AudioPlayer: React.FC<AudioProps> = ({ url, controls }) => {
  const {
    audioRef,
    isPlaying,
    isMuted,
    currentTime,
    volume,
    duration,
    togglePlay,
    toggleMute,
    handleSeek,
    handleVolumeChange,
  } = useControls();

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md w-fit">
      <audio ref={audioRef} src={url} />

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
          <>
            <button
              onClick={toggleMute}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-400 cursor-pointer "
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </>
        )}
      </div>
    </div>
  );
};
