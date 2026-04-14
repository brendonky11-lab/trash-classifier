import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const videoRef = useRef(null);
  const [classification, setClassification] = useState('');

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };
    startCamera();
  }, []);

  const classifyTrash = () => {
    // Classification logic goes here
    // For demo purposes, using a fake classification
    setClassification('Plastic');
  };

  return (
    <div>
      <h1>Real-time Trash Classification</h1>
      <video ref={videoRef} autoPlay width="600" height="400" />
      <button onClick={classifyTrash}>Classify Trash</button>
      <h2>Classification Result: {classification}</h2>
    </div>
  );
};

export default App;