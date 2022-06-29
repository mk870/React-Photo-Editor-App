import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeStyles } from '../styles/HomeStyles'
import image from '../Images/edit1.jpg'
import { FcFilledFilter } from 'react-icons/fc'
import {AiFillFileText} from 'react-icons/ai'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {BsEmojiSmile} from 'react-icons/bs'
import Carousel from './Carousel'

export default function Home() {
  const navigate = useNavigate()
  return (
    <HomeStyles>
      <div className="intro">
        <div className="welcome">
          <h1>Pixelshop Photo Editor</h1>
          <p>Edit your pictures with pixelshop faster and conveniently.</p>
          <p>Change picture color,add and drag text, add emojies and many more</p>
          
          <span onClick={()=>navigate('/editor')}>Go to Editor</span>
        </div>
      </div>
      
      <div className="about">
        <div className="info">
          <h1>Services that we continue to improve</h1>
          <p>The best choice for editing your pictures with many features available at the palm of your hand,with super friendly features and easy to use editor</p>
          <p>Get started now for free with just a few clicks</p>
          <img src={image} alt="edited" className='edited'/>
        </div>
        <div className="wrapper">
          <div className="guarentees">
            <div className="head">
              <AiFillFileText fontSize={39} color='crimson'/>
            </div>
            <div className="message">
              <span className='heading'>Add Text</span> <br /> <br />
              <span>We always prioritize speed,reliability,convenience and excellence </span> 
            </div>
          </div>
          <div className="guarentees">
            <div className="head">
              <FcFilledFilter fontSize={39}/>
            </div>
            <div className="message">
              <span className='heading'>Add Filters</span> <br /> <br />
              <span>We always prioritize speed,reliability,convenience and excellence </span> 
            </div>
          </div>
          <div className="guarentees">
            <div className="head">
              <IoColorPaletteOutline fontSize={39} color='rgb(0,212,212)'/>
            </div>
            <div className="message">
              <span className='heading'>Change Colors</span> <br /> <br />
              <span>We always prioritize speed,reliability,convenience and excellence </span> 
            </div>
          </div>
          <div className="guarentees">
            <div className="head">
              <BsEmojiSmile fontSize={39} color='#d020f7'/>
            </div>
            <div className="message">
              <span className='heading'>Add Emojies</span> <br /> <br />
              <span>We always prioritize speed,reliability,convenience and excellence </span> 
            </div>
          </div>
        </div>
        
      </div>
      
      <Carousel/>
    </HomeStyles>
  )
}
