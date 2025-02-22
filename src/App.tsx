import "./App.css";
import MediaPlayer from "./components/MediaPlayer";

function App() {
  return (
    <>
      <MediaPlayer
        url="../../public/images/video.mp4"
        controls
        width={600}
        height={500}
        autoPlay={true}
      />
    </>
  );
}

export default App;
