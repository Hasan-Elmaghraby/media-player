import { Volume2, VolumeX } from "lucide-react";

interface VolumeProps {
  volume: number;
  isMuted: boolean;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleMute: () => void;
}
const Volume: React.FC<VolumeProps> = ({
  volume,
  isMuted,
  handleVolumeChange,
  toggleMute,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleMute}
        className="p-2 bg-gray-700 rounded-full hover:bg-gray-400 cursor-pointer"
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
    </div>
  );
};

export { Volume };
