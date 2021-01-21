import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = props => {
  return (
    <div>
      <p className="fw3 f5">{'Provide a image address below.'}</p>
      {/* <p className="f4">{'When ready, click detect.'}</p> */}
      <div className="center hide-child">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={props.onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 dib black b bg-light-white"
            onClick={props.onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
