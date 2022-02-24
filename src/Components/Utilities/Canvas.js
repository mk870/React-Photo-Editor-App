
export const position = (max,min)=>{
  return Math.random() * (max - min) + min
}
export const positionlist = []

export const purple = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i] = 183
    arr[i+2]= 235
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}

export const orange = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i] = 255
    arr[i + 1] = 160
    
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}
export const lime = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i + 1] = 205
    arr[i+2]= 50
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}
export const crimson = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i] = 220
    arr[i+2]= 60
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}

export const red = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i + 1] = 0
    arr[i+2]= 0
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}


export const blue = (ctx,canvaswidth,imageheight)=>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i]= 0
    arr[i + 1] = 0
    
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}

export const yellow = (ctx,canvaswidth,imageheight) =>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i] =240
    arr[i + 1] = 240
    
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}
export const green = (ctx,canvaswidth,imageheight) =>{
  let imgdata = ctx.getImageData(0,0,canvaswidth,imageheight)
  let arr = imgdata.data
  for (let i = 0; i < arr.length; i=i+4) {
    arr[i]= 0
    arr[i+2]= 0
  }
  arr = imgdata.data
  ctx.putImageData(imgdata,0,0)
}

export const drawEmojis = (clickedemoji,positionlist,ctx,emojiwidth,emojiheight,canvaswidth) =>{
  for (let i = 0; i < clickedemoji.length; i++) {
    const Emoji = new Image(40,40)
    Emoji.src = clickedemoji[i].src
    Emoji.src = clickedemoji[i].src
    positionlist.push({x:position(canvaswidth-150,canvaswidth/6.3),y:position(canvaswidth-90,canvaswidth/7)})
    Emoji.onload = ()=>{ 
        ctx.drawImage(Emoji,positionlist[i].x,positionlist[i].y, emojiwidth,emojiheight)
      
    }
    
  }
}

export const drawShuffledEmojis = (ctx,shuffle,emojiwidth,emojiheight) => {
  for (let i = 0; i < shuffle.length; i++) {
    const Emoji = new Image(40,40)
    Emoji.src = shuffle[i].src
    Emoji.onload = ()=>{ 
        ctx.drawImage(Emoji,shuffle[i].x,shuffle[i].y, emojiwidth,emojiheight)
      
    }
    
  }
}

export const drawImage = (ctx,image,imageheight,fontsize,fontfamily,textcolor,canvaswidth) =>{
  ctx.drawImage(image,0, 0,canvaswidth,imageheight)
  ctx.font = `${fontsize}px ${fontfamily}`
  ctx.fillStyle = `${textcolor}`
  ctx.textAllign = 'center'
}

export const drawText = (ctx,text,currentX,currentY,settextWidth,settextHeight)=>{
  ctx.fillText(text ,currentX,currentY)
  settextWidth(ctx.measureText(text).width)
 settextHeight(parseInt(ctx.font) * 1.2)
}

export const filterProperties = imagefilters => {
  return `sepia(${imagefilters[0].value}) contrast(${imagefilters[1].value}) blur(${imagefilters[2].value}px) brightness(${imagefilters[3].value}) grayscale(${imagefilters[4].value}) invert(${imagefilters[5].value}) opacity(${imagefilters[6].value}) saturate(${imagefilters[7].value})`
} 

export const idGenerator =()=>{
  return Math.random()*10
}