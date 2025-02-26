interface DurationMediaProps {
  durationCalc: number;
  currentTimeCalc: number;
}

export const DurationCalculate: React.FC<DurationMediaProps> = ({
  durationCalc,
  currentTimeCalc,
}) => {
  return (
    <span className="text-white text-sm">
      {Math.floor(currentTimeCalc) / 100} / {Math.floor(durationCalc) / 100}
    </span>
  );
};
