import React, { useState, useEffect } from 'react'
import * as FilePond from 'filepond'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button, Image } from "react-bootstrap";
import axios from 'axios'

const UploadVaccImage = () => {
  const [files, setFiles] = useState([])

const handleClick = async ()=>{
  console.log(files)
//   files[0].file; file is the thing I want to send to backend
try {
   let data = new FormData()
    // files[0].file  this will come in as params file
   data.append('file', files[0].file)
//    data.append('x', 'x here')
   let res  = await axios.post('/api/users/${user.id}/vaccination_wallets', data)
   console.log(res.data)
} catch(err) {
  console.log(err)
  console.log(err.response.data)
  alert('error occurred')
}
}

return (
  <div className="App">
    <FilePond
      files={files}
      allowReorder={true}
      // allowMultiple={true}
      allowMultiple={true}
      onupdatefiles={setFiles}
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />

    <Button onClick={handleClick}>add</Button>
    {uzers.length >= 1 && <Image src={uzers[0].image} />}
  </div>
);


const UploadVaccImage = () => {
  return (
    <div>

    </div>
  )
}

}

export default UploadVaccImage
