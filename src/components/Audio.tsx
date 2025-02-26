import { useControls } from "./hooks/use-controls";
import { Volume } from "./controls/Volume";
import { PlayMedia } from "./controls/PlayMedia";
import { DurationMedia } from "./controls/DurationMedia";
import { DurationCalculate } from "./controls/DurationCalculate";

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
        <PlayMedia onClick={togglePlay} isPlaying={isPlaying} />

        <DurationMedia
          duration={duration}
          currentTime={currentTime}
          OnChange={handleSeek}
        />
        <DurationCalculate duration={duration} currentTime={currentTime} />

        {controls && (
          <Volume
            volume={volume}
            isMuted={isMuted}
            handleVolumeChange={handleVolumeChange}
            toggleMute={toggleMute}
          />
        )}
      </div>
    </div>
  );
};
