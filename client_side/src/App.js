import "./App.css"
import { useRef, useEffect, useState } from "react";

function App() {

  const feedback = useState('Insert Workout Feedback Here');

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080}
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(err);
      })
  }

  // This is where you'll get you're image, you're processing what's under the context variable.
  // P.S. The function isn't actually being called anywhere, that'll need to be done as well.
  const getPhoto = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = 1920;
    photo.height = 1080;
    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, 1920, 1080);
  }

  useEffect(() =>  {
    getVideo();
  }, [videoRef])

  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <br></br>
        <br></br>
        <h1 align="center" style={{color: 'white'}}>
          {feedback}
        </h1>
      </div>
      <div className={'result'}>
        <canvas ref={photoRef}></canvas>
      </div>
    </div>
  )
}

export default App;
