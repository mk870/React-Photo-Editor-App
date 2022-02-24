import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { TextStyles } from '../styles/TextStyles'
import { ChromePicker } from 'react-color'


export default function Text() {
  const{text} = useContext(AppContext)
  const{setText} = useContext(AppContext)
  const{setTextcolor} = useContext(AppContext)
  const{textcolor} = useContext(AppContext)
  const{fontsize} = useContext(AppContext)
  const{fontfamily} = useContext(AppContext)
  const{setfontfamily} = useContext(AppContext)
  const{setFontsize} = useContext(AppContext)
  
  return (
    <TextStyles>
      <label htmlFor="text">Please enter your text here:</label>
      <input type="text" value={text} onChange={e=>setText(e.target.value)} className="text"/>

      <label htmlFor="fontsize">FontSize:</label>
      <input type="range" name="fontsize" min="10" max="50" value={fontsize} onChange={(e)=>setFontsize(e.target.value)}/>

      <label htmlFor="fontfamily">Fontfamily:</label>
      <select name="fontfamily" id="fontfamily" onChange={(e)=>setfontfamily(e.target.value)} value={fontfamily}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Georgia">Georgia</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Verdana">Verdana</option>
        <option value="Courier New">Courier New</option>
        <option value="Brush Script MT">Brush Script MT</option>
      </select>

      <label htmlFor="textcolor">Select Text Color:</label>
      <ChromePicker
        className='textcolors'
        color={textcolor}
        onChange={updatedColor => setTextcolor(updatedColor.hex)}
      />
      
    </TextStyles>
  )
}
