import React, { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';

const Test = () => {
  const webcamContainerRef = useRef(null);
  const labelContainerRef = useRef(null);
  let model, webcam, labelContainer, maxPredictions;

  useEffect(() => {
    const URL = 'https://teachablemachine.withgoogle.com/models/DsVFsWh0O/';
    const init = async () => {
      const modelURL = URL + 'model.json';
      const metadataURL = URL + 'metadata.json';

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      webcamContainerRef.current.appendChild(webcam.canvas);
      labelContainer = labelContainerRef.current;
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
      }
    };

    const loop = async () => {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    };

    const predict = async () => {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }
    };

    init();

    return () => {
      // Clean-up logic if needed
    };
  }, []);

  return (
    <>
      <button type="button" onClick={() => {}}>
        Start
      </button>
      <div ref={webcamContainerRef}></div>
      <div ref={labelContainerRef}></div>
    </>
  );
};

export default Test;
