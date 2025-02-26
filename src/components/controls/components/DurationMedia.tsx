interface DurationMediaProps {
  durationMedia: number;
  currentTimeMedia: number;
  OnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DurationMedia: React.FC<DurationMediaProps> = ({
  durationMedia,
  currentTimeMedia,
  OnChange,
}) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max={durationMedia || 0}
        value={currentTimeMedia}
        onChange={OnChange}
        className="w-64 cursor-pointer"
      />
    </>
  );
};
