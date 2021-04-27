import React, { useState, useContext } from 'react'
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, registerPlugin } from "react-filepond";
import {Button} from 'react-bootstrap'
import axios from 'axios'
import {AuthContext} from '../../providers/AuthProvider'



registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function UserImageUploader(props) {

  const {handleClose} = props

  const auth = useContext(AuthContext)
  const [files, setFiles] = useState([]);



  const handleUpdate = (fileItems) => {
    console.log('handleUpdate for image called')
    setFiles(fileItems);
    logFiles(fileItems)
  };

  const logFiles = (fileItems) => {
    console.log('files: ', files)
    console.log('fileItems: ', fileItems)
  }

  const submitImage = async () => {
    try {
      // appending 'file' with image info to pass can retrieve in params
      let data = new FormData()
        // files[0].file  this will come in as params file
       data.append('file', files[0].file)
      let res = await axios.put(`/api/users/${auth.user.id}`, data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
      alert("Error submitting Image. Please try again.");
    }

  }

	return (
		<div>
			     <FilePond
        files={files}
        onupdatefiles={handleUpdate}
        allowMultiple={false}
        name="image"
        labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Button variant="primary" onClick={()=>{
        submitImage()
        handleClose()
      }}>
        Submit
      </Button>
      <Button variant="danger" style={{marginLeft: '10px'}} onClick={handleClose}>Cancel</Button>
    </div>
	
	)
}

export default UserImageUploader
