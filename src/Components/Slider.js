import React, { useEffect, useState } from 'react'
import { SliderStyles } from '../styles/SliderStyles'
import image1  from '../Images/slide1.png'
import image2 from '../Images/slide2.png'
import image3  from '../Images/slide3.png'
import image4  from '../Images/slide4.png'
import image5  from '../Images/slide5.png'
import image6  from '../Images/slide6.png'
import image7  from '../Images/slide7.png'
import image8  from '../Images/slide8.png'
import image9  from '../Images/slide9.png'
import image10  from '../Images/slide10.png'
import image11 from '../Images/slide11.png'
import image12 from '../Images/slide12.png'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const imagelist = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]

const Slider = () => {
  const [currentSlide,setCurrentSlide] = useState(0)
  let slideInterval
  let imageTotal = imagelist.length - 1

  useEffect(()=>{
    setCurrentSlide(0)
  },[])

  const nextSlide = ()=>{
    if (currentSlide === imageTotal) {
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = ()=>{
    if(currentSlide === 0){
      setCurrentSlide(imageTotal)
    }else{
      setCurrentSlide(currentSlide - 1)
    }
  }

  const auto = ()=>{
    slideInterval = setInterval(nextSlide, 4000);
  }

  useEffect(()=>{
    auto()
    return ()=> clearInterval(slideInterval)
  },[currentSlide])

  return (
    <SliderStyles>
      <div className="preview"><h4>Edited Pictures Preview</h4></div>
      <div className="slidercontent">
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        
        {imagelist.map((image,index)=>(
          <div className={currentSlide === index ? 'current' : 'slide'}>
            {currentSlide === index && 
              <img src={image} alt="image"/>
            }
          </div>
        ))}
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
      </div>
      
    </SliderStyles>
  )
}

export default Slider