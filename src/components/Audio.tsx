import { useControls } from "./hooks/use-controls";
import { Controls } from "./controls/Controls";

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
    volume,
    isMuted,
  } = useControls();

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md w-fit">
      <audio ref={audioRef} src={url} controls={false} />

      <div className="flex items-center space-x-4">
        {controls && (
          <Controls
            toggleMute={toggleMute}
            isMuted={isMuted}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            volume={volume}
            handleVolumeChange={handleVolumeChange}
            durationMedia={duration}
            currentTimeMedia={currentTime}
            handleSeek={handleSeek}
            durationCalc={duration}
            currentTimeCalc={currentTime}
          />
        )}
      </div>
    </div>
  );
};
