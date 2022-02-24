import React from 'react'
import { NavbarStyles } from '../styles/NavbarStyles'
import logo from '../Images/b17.jpg'
import{FcEditImage, FcHome, FcServices} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <NavbarStyles>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Pixel<span>Shop</span> </p>
      </div>
      <div className="pages">
        <span onClick={()=>navigate('/')}><FcHome/>Home</span>
        <span onClick={()=>navigate('/editor')}><FcEditImage/>Editor</span>
        <span onClick={()=>navigate('/services')}><FcServices/>Services</span>
      </div>
    </NavbarStyles>
  )
}
