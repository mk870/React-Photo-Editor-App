import React, {useState } from 'react'
import { ControllerStyles } from '../styles/ControllerStyles'
import { Button } from './Button'
import Colors from './Colors'
import Emojis from './Emojis'
import Filters from './Filters'
import Text from './Text'
import { FcFilledFilter } from 'react-icons/fc'
import {AiFillFileText} from 'react-icons/ai'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {BsEmojiSmile} from 'react-icons/bs'

export default function Controller() {
  const[imagecolor,setImagecolor] = useState(false)
  const [showtextcontrols,setShowtextcontrols] = useState(false)
  const [showfilters,setShowfilters] = useState(false)
  const [showemojis,setShowemojis] = useState(false)

  return (
    <ControllerStyles>
      <h3>Controller</h3>
      <Button onClick={()=>setImagecolor(!imagecolor)}>
        <div className="btncontents">
          <IoColorPaletteOutline fontSize={25} color='red'/> {imagecolor?'Close':'Image Color'}
        </div>
      </Button>
      <div className="design-colors">
        {imagecolor ? <Colors/> : null}
      </div>
      
      <Button onClick={()=>setShowfilters(!showfilters)}>
        <div className="btncontents">
          <FcFilledFilter fontSize={25}/> {showfilters?'Close':'Filters'}
        </div>
      </Button>
      <div className="filtercontrols">
        
        {showfilters && <Filters/>}
      </div>
      <Button onClick={()=>setShowtextcontrols(!showtextcontrols)}>
        <div className="btncontents">
          <AiFillFileText fontSize={25} color='crimson'/> {showtextcontrols?'Hide':'Text controls'}
        </div>
      </Button>
        {showtextcontrols && <Text/>}
      <Button onClick={()=>setShowemojis(!showemojis)}>
        <div className="btncontents">
          <BsEmojiSmile fontSize={25} color='#d020f7'/>
          <span>{showemojis?'Hide': 'Emojis'}</span>  
        </div>
      </Button>
      {showemojis && <Emojis/>}
    </ControllerStyles>
  )
}
