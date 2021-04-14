import React, { useState, useContext } from 'react'
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { FilePond, File, registerPlugin } from "react-filepond";
import { Button, Image } from "react-bootstrap";
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'

function UploadVaccImage(props) {

  const {vaccination_id, vaccination} = props

  const auth = useContext(AuthContext)
  const [files, setFiles] = useState([]);



  const handleUpdate = async (fileItems) => {
    try {
      setFiles(fileItems);

      // appending 'file' with image info to pass can retieve in params
      let data = new FormData();
      data.append("image", vaccination.image);
      let res = await axios.put(`/api/users/${auth.user.id}/vaccinations/${vaccination_id}`, data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
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
        name="image"
        labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}


export default UploadVaccImage
