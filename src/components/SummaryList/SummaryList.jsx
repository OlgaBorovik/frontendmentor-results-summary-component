import React from 'react'
import SummaryCard from '../SummaryCard/SummaryCard';
import { SummaryItem, SumList } from './SummaryList.styled';
import data from '../../data.json'
import { useState } from 'react';



const SummaryList = () => {
  const [items] = useState(data)
  
    return (
      <SumList>
          {
             items.map(({category, score, icon}, index) => (
                  <SummaryItem key={index}>
                      <SummaryCard category={category} score={score} icon={icon}/>
                  </SummaryItem>
             ))
          }
    </SumList>
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