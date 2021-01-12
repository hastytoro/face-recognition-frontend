import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = props => {
  return (
    <div>
      <p className="f3">
        {'This magic brain will detect faces in your pictures.'}
      </p>
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
