import React, { useState } from 'react'
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { FilePond, File, registerPlugin } from "react-filepond";
import { Button, Image } from "react-bootstrap";
import axios from 'axios'

function BasicUpload() {
  const [files, setFiles] = useState([]);
  const handleUpdate = async (fileItems) => {
    try {
      setFiles(fileItems);

      // appending 'file' with image info to pass can retieve in params
      let data = new FormData();
      data.append("file", fileItems[0].file);
      const res = await Axios.post(`/api/basicUpload?name=test`, data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response); //err.response from axios
      alert("error in upload");
    }
  };
  return (
    <div>
      <FilePond
        files={files}
        onupdatefiles={handleUpdate}
        // onupdatefiles={setFiles}
        allowMultiple={false}
        // maxFiles={3}
        // server="/api/basicUpload"
        name="files"
        // {/* sets the file input name, it's filepond by default */}
        labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}



const UploadVaccImage = () => {
  return (
    <div>

    </div>
  )
}

export default UploadVaccImage
