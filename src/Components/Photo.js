import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/Context';
import { PhotoStyles } from '../styles/PhotoStyles'
import { Button } from './Button'
import { WebcamCapture } from './Camera';
import {FcCamera} from 'react-icons/fc'

export default function Photo() {
  
  const{setCamerapic} = useContext(AppContext)
  const{setproduct} = useContext(AppContext)
  const [webcam,setWebcam] = useState(false)
  const handleimage = e => {
    setCamerapic(null)
    setproduct(e.target.files[0]
    )}
  return (
    <PhotoStyles>
      <div className="picture">
        <Button onClick={()=>setWebcam(!webcam)}>
          <div className="insideBtn">
            <FcCamera fontSize={25}/> <span>{webcam? 'Close Camera':'Take A Picture'}</span>
          </div>
        </Button>
        <div className="upload">
          <label htmlFor="upload">Upload Image</label> <br />
          <input type="file" id="upload" accept="image/*" onChange={handleimage}/>
        </div>
        
      </div>
      {webcam && <WebcamCapture/>}
    </PhotoStyles>
  )
}
