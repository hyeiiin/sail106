import React, { useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';

const Test = () => {
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

      document.getElementById('webcam-container').appendChild(webcam.canvas);
      labelContainer = document.getElementById('label-container');
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
    <div>
      <button type="button" onClick={init}>
        Start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container"></div>
    </div>
  );
};

export default Test;
