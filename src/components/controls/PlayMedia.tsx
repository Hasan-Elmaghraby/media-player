import { Pause, Play } from "lucide-react";
import React from "react";

interface PlayMediaProps {
  onClick: () => void;
  isPlaying: boolean;
}

export const PlayMedia: React.FC<PlayMediaProps> = ({ onClick, isPlaying }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-700 rounded-full hover:bg-gray-400 cursor-pointer"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
  );
};
