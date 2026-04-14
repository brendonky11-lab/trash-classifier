import React, { useEffect, useRef } from 'react';

const CameraFeed = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Start video stream
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('Error accessing webcam: ', err);
      });

    const processFrame = () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Add your inference logic here
      // For example, calling a model to predict based on the frame in canvas

      requestAnimationFrame(processFrame);
    };

    // Start processing frames
    processFrame();

  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} width={640} height={480} />
    </div>
  );
};

export default CameraFeed;