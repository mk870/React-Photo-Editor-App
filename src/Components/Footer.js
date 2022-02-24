import React from 'react'
import { FooterStyles } from '../styles/FooterStyles'
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'

export default function Footer() {
  return (
    <FooterStyles>
      <h4>All Rights &copy; Reserved</h4>
      <div className="socialmedia">
        <AiFillFacebook fontSize={35} color='blue'/>
        <AiFillInstagram fontSize={35} color='red'/>
        <AiOutlineTwitter fontSize={35} color='#0384fc'/>
      </div>
      <span>pixelshop@gmail.com</span>
    </FooterStyles>
  )
}
