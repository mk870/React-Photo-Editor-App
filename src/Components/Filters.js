import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { FilterStyles } from '../styles/FilterStyles'
import { Button } from './Button'

const filters = [
  {name:'sepia',min:'0',max:'2',step:'0.2',value:'0'},
  {name:'contrast',min:'0',max:'2',step:'0.2',value:'1'},
  {name:'blur',min:'0',max:'5',step:'0.2',value:'0'},
  {name:'brightness',min:'0',max:'3',step:'0.1',value:'1'},
  {name:'grayscale',min:'0',max:'1',step:'0.1',value:'0'},
  {name:'invert',min:'0',max:'1',step:'0.1',value:'0'},
  {name:'opacity',min:'0',max:'1',step:'0.1',value:'1'},
  {name:'saturate',min:'0',max:'5',step:'0.2',value:'1'}
]
export default function Filters() {
  const{imagefilters} = useContext(AppContext)
  const{setImagefilters} = useContext(AppContext)

  const resetlist = [
    {name:'sepia',value:'0'},{name:'contrast',value:'1'},{name:'blur',value:'0'},{name:'brightness',value:'1'},{name:'grayscale',value:'0'},{name:'invert',value:'0'},{name:'opacity',value:'1'},{name:'saturate',value:'1'},
  ]
  
  return (
    <FilterStyles>
    <div className="filters">
      {filters.map((filter,index)=>(
        <div className={filter.name} key={index}>
          <label htmlFor={filter.name}>{filter.name}</label>
          <input type="range" name={filter.name} id={filter.name} min={filter.min} max={filter.max} step={filter.step} value={imagefilters[index].value} onChange={(e)=>{
            
            let temp_state = [...imagefilters];
	          let temp_element = { ...temp_state[index] };
	          temp_element.value = e.target.value;
	          temp_state[index] = temp_element;
            setImagefilters(temp_state)
          }
          }/>
      </div>
      ))
      }
      </div>
      <Button onClick={()=>setImagefilters(resetlist)}>Reset Filters</Button>
    </FilterStyles>
    
  )
}
