import React, { useContext} from 'react'
import { AppContext } from '../Context/Context'
import { EmojiStyles } from '../styles/EmojiStyles'
import { Button } from './Button'
import {idGenerator,position} from './Utilities/Canvas'


export default function Emojis() {
  const{emojipix} = useContext(AppContext)
  const{setClickedemoji} = useContext(AppContext)
  const{clickedemoji} = useContext(AppContext)
  const{setShuffle} = useContext(AppContext)
  const{shuffle} = useContext(AppContext)

  const canvaswidth = () =>{
    if(window.innerWidth < 670 && window.innerWidth > 540){
      return 500
    }else if(window.innerWidth < 540 && window.innerWidth > 400){
      return 380
      
    }else if(window.innerWidth < 400){
      return 300
      
    }
    else{
      return 650
    }
  }

  const DeleteEmoji= ()=>{
    if (clickedemoji.length && !shuffle) {
      const removedEmoji = clickedemoji.pop()
      const newEmojiList = clickedemoji.filter(emoji =>emoji.id !== removedEmoji.id)
      setClickedemoji(newEmojiList)
      
    }else if(clickedemoji.length && shuffle){
      const removedemoji = clickedemoji.pop()
      const newEmojiList = clickedemoji.filter(emoji =>emoji.id !== removedemoji.id)
      const removedshuffleEmoji = shuffle.pop()
      const newShuffleList = shuffle.filter(emoji => emoji.x !== removedshuffleEmoji.x)
      setShuffle(newShuffleList)
      setClickedemoji(newEmojiList)
    }
    
  }

  const Shuffle = ()=>{
    if (clickedemoji.length) {
      const shufflelist = []
      for (let i = 0; i < clickedemoji.length; i++) {
        shufflelist.push({name:clickedemoji[i].name,src:clickedemoji[i].src,x:position(canvaswidth()-150,canvaswidth()/6.3),y:position(canvaswidth() -90,canvaswidth()/7)})
      }
      setShuffle(shufflelist)
    }
    
  }
  
  return (
    <EmojiStyles>
      <h5>Click an Emoji</h5>
      <div className="emojis">
        {emojipix.map((pic,index)=>(
          <div key={index} className="emoji"onClick={()=>{
            setShuffle('')
            setClickedemoji([...clickedemoji,{name:emojipix[index].name,src:emojipix[index].src,id:idGenerator()}])
            }}>
            <img src={pic.src} alt={`Emoji${index}`} />
            <span>{pic.name}</span>
          </div>
        ))}
      </div>
      <Button onClick={Shuffle}>Shuffle Emojis</Button>
      <Button onClick={DeleteEmoji}>Delete Emoji</Button>
    </EmojiStyles>
  )
}
