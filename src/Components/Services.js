import React from 'react'
import { ServicesStyles } from '../styles/ServicesStyles'
import image1 from '../Images/slide10.png'
import image2 from '../Images/slide7.png'
import image3 from '../Images/slide1.png'
import image4 from '../Images/slide4.png'
import { FcFilledFilter } from 'react-icons/fc'
import {AiFillFileText} from 'react-icons/ai'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {BsEmojiSmile} from 'react-icons/bs'

export default function Services() {
  return (
    <ServicesStyles>
      <div className="welcome">
        <h2>Welcome to PixelShop Service Page</h2>
        <span>The best choice for editing your pictures with many features available at the palm of your hand,with super friendly services and easy to use editor</span>
      </div>
      
      <div className="Add color">
        <img src={image3} alt="greentomato" />
        <div className="instructions">
          <IoColorPaletteOutline fontSize={49} color = 'rgb(0,212,212)'/> <br />
          <span>
            Change the color of your picture completely on the Image color panel. Choose the color you want from 8 different colors. Also you can reset the color back to the original version of your picture.
          </span>
        </div>
      </div>

      <div className="Add filters">
        <img src={image2} alt="johnwick" />
        <div className="instructions">
          <FcFilledFilter fontSize={49}/> <br />
          <span>
            Add filters to your picture by clicking the filters button on the editor page.Choose the type of filter you want on your picture and adjust it accordingly.Also you can reset the filters if you want to revert back to the original picture version.
          </span>
        </div>
      </div>

      <div className="Add text">
        <img src={image1} alt='the monalisa'/>
        <div className="instructions">
          <AiFillFileText fontSize={49} color ='red'/> <br />
          <span>
            Add text by clicking the text controls button on the editor and typing what you want on your picture.Change font-size,text color and font family directly from the text controls panel.To move the text to your desired position, please click and drag the text inside the picture.
          </span>
        </div>
      </div>

      <div className="Add Emojis">
        <img src={image4} alt="emojis" />
        <div className="instructions">
          <BsEmojiSmile fontSize={49} color= 'purple'/> <br />
          <span>
            Also add emojis to your picture on the Emojis panel. You can add upto 12 different emojis on your picture. Delete and shuffle your emojis around the picture.
          </span>
        </div>
      </div>

    </ServicesStyles>
  )
}
