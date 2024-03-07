import React from 'react'
import SummaryCard from '../SummaryCard/SummaryCard';
import data from '../../data.json'
import { useState } from 'react';



const SummaryList = () => {
  const [items] = useState(data)
  console.log(items)

    return (
      <ul>
          {
             items.map(({category, score, icon}) => (
                  <li key={category}>
                      <SummaryCard category={category} score={score} icon={icon}/>
                  </li>
             ))
          }
    </ul>
  )
}

export default SummaryList



/*const CardList = () => {
  return (
      <Cards className='container'>
          {
              info.map(({id, title, desc, icon, colorTheme}) => (
                  <CardItem key={id}>
                      <Card title={title} desc={desc} icon={icon} colorTheme={colorTheme}  />
                  </CardItem>
              ))
          }
    </Cards>
  )
}*/