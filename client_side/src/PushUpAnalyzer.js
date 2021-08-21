import "./App.css"
import "./index.css"
import { useRef, useEffect, useState } from "react";

function PushUpAnalyzer() {

  const [feedback, setFeedback] = useState("Feedback: You're doing great!");

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [counter, setCounter] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [displayMessage, setDisplayMessage] = useState('Start Your Pushups In ');
  const [frameNumber, setFrameNumber] = useState(0);

  useEffect (() => {
    if (secondsLeft > 0) {
      setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000)
    } else {
      if (counter === 0) {
        setDisplayMessage("Start Doing Pushups Now!")
        setSecondsLeft(30)
        setCounter(1)
      } else {
        setDisplayMessage("Great Job!")
        setSecondsLeft("Complete")
        setFeedback("")
      }
    }
  }, [secondsLeft, counter])

  useEffect (() => {
    if (counter === 1) {
      setTimeout(() => {
        getPhoto()
        setFrameNumber(frameNumber + 1)
      }, 100)
    }
  }, [counter, frameNumber])

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
  
  const getPhoto = () => {
    const width = 1920;
    const height = width / (16/9);
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    let a = document.createElement('a')
    a.href = photo.toDataURL();
    a.download = {frameNumber} + ".jpg";
    a.click();
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
          <h5>{displayMessage} [{secondsLeft}]</h5>
          <h5>{feedback}</h5>
        </h1>
      </div>
      <div className={'result'}>
        <canvas ref={photoRef}></canvas>
      </div>
    </div>
  )
}

export default PushUpAnalyzer;
