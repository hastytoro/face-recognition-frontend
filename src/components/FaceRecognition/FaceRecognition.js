import React from 'react';
import './FaceRecognition.css';
// import Tilt from 'react-tilt';

const FaceRecognition = props => {
  return (
    <div className="center ma2">
      <div className="absolute mt4 br2 shadow-2 grow">
        <img
          id="inputImage"
          src={props.imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: props.box.topRow,
            right: props.box.rightCol,
            bottom: props.box.bottomRow,
            left: props.box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
