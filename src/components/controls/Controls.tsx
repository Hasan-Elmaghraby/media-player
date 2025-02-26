import { Volume } from "./components/Volume";
import { PlayMedia } from "./components/PlayMedia";
import { DurationMedia } from "./components/DurationMedia";
import { DurationCalculate } from "./components/DurationCalculate";

interface ControlsProps {
  togglePlay: () => void;
  isPlaying: boolean;
  durationMedia: number;
  currentTimeCalc: number;
  currentTimeMedia: number;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  durationCalc: number;
  volume: number;
  isMuted: boolean;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleMute: () => void;
}
export const Controls: React.FC<ControlsProps> = ({
  togglePlay,
  isPlaying,
  durationMedia,
  currentTimeCalc,
  currentTimeMedia,
  handleSeek,
  durationCalc,
  volume,
  isMuted,
  handleVolumeChange,
  toggleMute,
}) => {
  return (
    <>
      <PlayMedia onClick={togglePlay} isPlaying={isPlaying} />
      <DurationMedia
        durationMedia={durationMedia}
        currentTimeMedia={currentTimeMedia}
        OnChange={handleSeek}
      />
      <DurationCalculate
        durationCalc={durationCalc}
        currentTimeCalc={currentTimeCalc}
      />
      <Volume
        volume={volume}
        isMuted={isMuted}
        handleVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
      />
    </>
  );
};
