import "./App.css";
import { AudioPlayer } from "./components/Audio";

function App() {
  return (
    <>
      <AudioPlayer url="/images/audio.mp3" controls />
    </>
  );
}

export default App;
