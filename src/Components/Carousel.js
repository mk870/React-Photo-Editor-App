import AliceCarousel from 'react-alice-carousel'
import React from 'react'
import { CarouselStyles } from '../styles/CarouselStyles'
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

const imagelist = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]

function Carousel() {
  const responsive = {
    0:{
      items:2,
    },
    512:{
      items:3,
    },
    800:{
      items:4,
    }
  } 
  let items
  items = imagelist.map((pic,index)=>(
    <div className='slider' key={index}>
      <img src={pic} alt="slider-pic" />
    </div>
  ))
  return (
    <CarouselStyles>
      <div className="preview"><h4>Edited Pictures Preview</h4></div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        responsive={responsive}
        items={items}
      />
  </CarouselStyles>
  )
}

export default Carousel