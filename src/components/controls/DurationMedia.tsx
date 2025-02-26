interface DurationMediaProps {
  duration: number;
  currentTime: number;
  OnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DurationMedia: React.FC<DurationMediaProps> = ({
  duration,
  currentTime,
  OnChange,
}) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={OnChange}
        className="w-64 cursor-pointer"
      />
    </>
  );
};
