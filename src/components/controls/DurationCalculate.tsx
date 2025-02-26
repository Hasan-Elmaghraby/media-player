interface DurationMediaProps {
  duration: number;
  currentTime: number;
}

export const DurationCalculate: React.FC<DurationMediaProps> = ({
  duration,
  currentTime,
}) => {
  return (
    <span className="text-white text-sm">
      {Math.floor(currentTime) / 100} / {Math.floor(duration) / 100}
    </span>
  );
};
