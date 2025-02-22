interface VideoProps {
  url: string | undefined;
  height?: number | string;
  width?: number;
  controls?: boolean;
  autoPlay?: boolean;
  type?: "video" | "audio";
}
const MediaPlayer: React.FC<VideoProps> = ({
  url,
  height = 500,
  width = 500,
  controls,
  autoPlay,
  type = "video",
}) => {
  const isYouTube = url?.includes("youtube.com");
  return (
    <>
      {type === "audio" ? (
        <audio controls>
          <source src={url} type="" />
        </audio>
      ) : isYouTube ? (
        <iframe
          width={width}
          height={height}
          src={url?.replace("watch?v=", "embed/")}
          allowFullScreen
        ></iframe>
      ) : (
        <video
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          muted
        >
          <source src={url} />
        </video>
      )}
    </>
  );
};

export default MediaPlayer;
