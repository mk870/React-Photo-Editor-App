import React, { useState } from 'react'
import { ContainerStyles } from '../styles/ContainerStyles'
import Controller from './Controller'
import Product from './Product'
import {AppContext} from '../Context/Context.js'
import emoji1 from '../Images/angry (1).png'
import emoji2 from '../Images/angry.png'
import emoji3 from '../Images/cool.png'
import emoji4 from '../Images/happy.png'
import emoji5 from '../Images/in-love.png'
import emoji6 from '../Images/kiss.png'
import emoji7 from '../Images/laughing.png'
import emoji8 from '../Images/shocked.png'
import emoji9 from '../Images/thinking.png'
import emoji10 from '../Images/tongue.png'
import emoji11 from '../Images/money.png'
import emoji12 from '../Images/tears.png'
import Photo from './Photo'


const emojipix = [
  {name:'angry',src:emoji1},{name:'furious',src:emoji2},{name:'cool',src:emoji3},
  {name:'happy',src:emoji4},{name:'in-love',src:emoji5},{name:'kiss',src:emoji6},
  {name:'laughing',src:emoji7},{name:'shocked',src:emoji8},{name:'thinking',src:emoji9},{name:'tongue',src:emoji10},{name:'money',src:emoji11},{name:'crying',src:emoji12}
  ]

export default function Editor() {
  const [product,setproduct] = useState(null)
  const [camerapic,setCamerapic] = useState(null)
  const [color,setColor] = useState('')
  const [text,setText] = useState('')
  const [cleartext,setCleartext] = useState(false)
  const [designcolor, setDesigncolor] = useState('normal')
  const[redpixels,setRedpixels] = useState(100)
  const[greenpixels,setGreenpixels] = useState('')
  const[bluepixels,setBluepixels] = useState('')
  const[textcolor,setTextcolor] = useState('#000000')
  const[fontsize,setFontsize] = useState('25')
  const[currentX,setcurrentX] = useState(190)
  const[currentY,setcurrentY] = useState(190)
  const[shuffle,setShuffle] = useState('')
  const[fontfamily,setfontfamily] = useState('Arial')
  const[clickedemoji,setClickedemoji] = useState([])
  const[screenSize,setScreensize] = useState('')
  
  const[imagefilters,setImagefilters] = useState([
    {name:'sepia',value:'0'},{name:'contrast',value:'1'},{name:'blur',value:'0'},{name:'brightness',value:'1'},{name:'grayscale',value:'0'},{name:'invert',value:'0'},{name:'opacity',value:'1'},{name:'saturate',value:'1'},
  ])
  

  return (
    <AppContext.Provider 
      value={
        {
          color,setColor,text,setText,cleartext,setCleartext,designcolor,setDesigncolor,redpixels,setRedpixels,greenpixels,setGreenpixels,bluepixels,setBluepixels,setImagefilters,imagefilters,textcolor,setTextcolor,fontsize,fontfamily,setfontfamily,setFontsize,currentX,currentY,setcurrentX,setcurrentY,product,setproduct,camerapic,setCamerapic,emojipix,clickedemoji,setClickedemoji,shuffle,setShuffle,screenSize,setScreensize
        }
      }>
      <ContainerStyles>
        <Photo/>
        <div className="editor">
          <Controller className='controller'/>
          <Product/>
        </div>
        
      </ContainerStyles>
    </AppContext.Provider>
  )
}
