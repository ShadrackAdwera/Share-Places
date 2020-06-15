import React, { useRef, useState } from 'react';

import Button from '../Button/Button';

import './ImageUpload.css';

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const pickImageHadler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length !== 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    props.onInput(props.id, props.pickedFile);
  };

  return (
    <div className="form-control">
      <input
        type="file"
        id={props.id}
        style={{ display: 'none' }}
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
        ref={filePickerRef}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          <img src="" alt="preview" />
        </div>
        <Button type="button" onClick={pickImageHadler}>
          CHOOSE IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
