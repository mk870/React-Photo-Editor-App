import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { ColorStyles } from '../styles/ColorsStyles'
import { Button } from './Button'

function Colors() {
  const {setDesigncolor} = useContext(AppContext)
  return (
    <ColorStyles>
      <h5>Choose Color</h5>
      <div className="color-list">
        <div className="red" onClick={()=>setDesigncolor('red')}>
          <span>red</span>
        </div>
        <div className="green" onClick={()=>setDesigncolor('green')}>
          <span>red</span>
        </div>
        <div className="blue" onClick={()=>setDesigncolor('blue')}>
          <span>red</span>
        </div>
        <div className="yellow" onClick={()=>setDesigncolor('yellow')}>
          <span>red</span>
        </div>
        <div className="purple" onClick={()=>setDesigncolor('purple')}>
          <span>red</span>
        </div>
        <div className="orange" onClick={()=>setDesigncolor('orange')}>
          <span>red</span>
        </div>
        <div className="lime" onClick={()=>setDesigncolor('lime')}>
          <span>red</span>
        </div>
        <div className="crimson" onClick={()=>setDesigncolor('crimson')}>
          <span>red</span>
        </div>
      </div>
      <Button onClick={()=>setDesigncolor('normal')}>Reset</Button>
    </ColorStyles>
  )
}

export default Colors