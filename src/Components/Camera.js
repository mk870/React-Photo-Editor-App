import React, { useCallback, useContext, useMemo} from 'react'
import ImageCapture from 'react-image-data-capture';
import { AppContext } from '../Context/Context';

export const WebcamCapture = () => {
  const width = () =>{
    if(window.innerWidth < 670 && window.innerWidth > 540){
      return 480
    }else if(window.innerWidth < 540 && window.innerWidth > 400){
      return 350
    }else if(window.innerWidth < 400){
      return 300
    }
    else{
      return 600
    }
  }

  
  
  const{setCamerapic} = useContext(AppContext)
  const{setproduct} = useContext(AppContext)
  const onCapture = (imageData) => {
    setproduct(null)
    setCamerapic(imageData.webP);
    
  };
  const onError = useCallback((error) => { console.log(error) }, []);
  const config = useMemo(() => ({ video: true }), []);

  return (
    <div className="webcam-container">
      {<ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={width()}
        userMediaConfig={config}
      />}
      
    </div>
  );
};
