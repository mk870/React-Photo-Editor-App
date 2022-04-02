import React, { useContext } from 'react'
import { useState,useRef,useEffect } from "react";
import { AppContext } from '../Context/Context';
import { ProductStyles } from '../styles/ProductStyles';
import { Button } from './Button';
import { FcDownload } from 'react-icons/fc';

import {positionlist,red,blue,yellow,green,drawEmojis,drawImage,drawText,filterProperties,drawShuffledEmojis,crimson,lime,orange,purple} from './Utilities/Canvas'



export default function Product() {
  const {camerapic} = useContext(AppContext)
  const [image,setImage] = useState(null)
  const[canvaswidth,setCanvaswidth] = useState(650)
  const [draggable,setDraggable] = useState(false)
  const[textWidth,settextWidth] = useState(null)
  const[textHeight,settextHeight] = useState(null)
  const[emojiwidth,setemojiwidth] = useState(40)
  const[emojiheight,setemojiheight] = useState(40)
  const canvas = useRef(null)
  const{product} = useContext(AppContext)
  const{screenSize} = useContext(AppContext)
  const {color} = useContext(AppContext)
  const {text} = useContext(AppContext)
  const {cleartext} = useContext(AppContext)
  const {designcolor} = useContext(AppContext)
  const {setScreensize} = useContext(AppContext)
  const{imagefilters} = useContext(AppContext)
  const{textcolor} = useContext(AppContext)
  const{fontfamily} = useContext(AppContext)
  const{fontsize} = useContext(AppContext)
  const{currentX} = useContext(AppContext)
  const{currentY} = useContext(AppContext)
  const{setcurrentX} = useContext(AppContext)
  const{setcurrentY} = useContext(AppContext)
  const{clickedemoji} = useContext(AppContext)
  const{shuffle} = useContext(AppContext)
  
  

  useEffect(()=>{
    const handlesize = () => setScreensize(window.innerWidth)
    window.addEventListener('resize',handlesize)
    handlesize()
    return ()=> window.removeEventListener('resize',handlesize)
  },[])
  
  useEffect(()=>{
    if(screenSize < 670 && screenSize > 540){
      setCanvaswidth(500)
      setemojiheight(30)
      setemojiwidth(30)
    }else if(screenSize < 540 && screenSize > 400){
      setCanvaswidth(380)
      setemojiheight(25)
      setemojiwidth(25)
    }else if(screenSize < 400){
      setCanvaswidth(300)
      setemojiheight(20)
      setemojiwidth(20)
    }
    else{
      setCanvaswidth(650)
      setemojiheight(40)
      setemojiwidth(40)
    }

  },[screenSize])

  useEffect(() => {
    if(product){
      const productimage = new Image()
      productimage.src = URL.createObjectURL(product)
      productimage.onload = ()=>setImage(productimage)
      
    }
    if(camerapic){
      
      const cameraimage = new Image()
      cameraimage.src = camerapic
      cameraimage.onload = ()=>setImage(cameraimage)
      
    }
  }, [product,camerapic])

  

  useEffect(()=>{
    const ctx = canvas.current.getContext("2d")
    canvas.current.width = canvaswidth
    canvas.current.height = canvaswidth - 50
    
    if(image && canvas){
      let imageheight = canvaswidth - 50
      ctx.filter = filterProperties(imagefilters)
      drawImage(ctx,image,imageheight,fontsize,fontfamily,textcolor,canvaswidth)
      drawText(ctx,text,currentX,currentY,settextWidth,settextHeight)

      if(clickedemoji.length && !shuffle){
        drawEmojis(clickedemoji,positionlist,ctx,emojiwidth,emojiheight,canvaswidth)
      }
      if (clickedemoji.length && shuffle) {
        drawShuffledEmojis(ctx,shuffle,emojiwidth,emojiheight)
      }
      if(designcolor==='red'){
        red(ctx,canvaswidth,imageheight)
      }
      if(designcolor==='blue'){
        blue(ctx,canvaswidth,imageheight)
      }
      if(designcolor==='green'){
        green(ctx,canvaswidth,imageheight)
      }
      if(designcolor==='yellow'){
        yellow(ctx,canvaswidth,imageheight)
      }
      if(designcolor === 'purple'){
        purple(ctx,canvaswidth,imageheight)
      }
      
      if(designcolor === 'orange'){
        orange(ctx,canvaswidth,imageheight)
      }
      if(designcolor === 'lime'){
        lime(ctx,canvaswidth,imageheight)
      }
      if(designcolor === 'crimson'){
        crimson(ctx,canvaswidth,imageheight)
      }
    }

    
  },[canvas,image,color,text,cleartext,designcolor,imagefilters,textcolor,fontfamily,fontsize,currentX,currentY,clickedemoji,shuffle,screenSize,emojiheight,emojiwidth])

  if(canvas.current && image){
    canvas.current.onmousedown = e =>{
      
      if (e.layerX <= (currentX + textWidth) && e.layerX >=(currentX) && e.layerY <= (currentY ) && e.layerY >=(currentY - textHeight/2)) {
        setDraggable(true)
        
      }
    }
    canvas.current.onmouseup = e =>{
      setDraggable(false)
    }
    canvas.current.onmouseout = e =>{
      setDraggable(false)
    }

    canvas.current.onmousemove = e=>{
      if(draggable){
        console.log(e.layerX)
        setcurrentX(e.layerX)
        setcurrentY(e.layerY)
      }
    }
    
  }

  
  const Download = async () => {
    const image = canvas.current.toDataURL('image/png')
    const blob = await(await fetch(image)).blob()
    const blobURL = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobURL
    link.download = 'image.png'
    link.click()
  }
  
  

  return (
    <ProductStyles color ={color}>
      <div className="image-box">
        <canvas
          ref={canvas}
          width={canvaswidth}
          height={canvaswidth - 50}
        />
        <div className="canvascontrols">
          <Button onClick={Download}>
            <div className="btncontents">
              <FcDownload fontSize={19}/> Download
            </div>
          </Button>
        </div>
      </div>
    </ProductStyles>
  )
}





