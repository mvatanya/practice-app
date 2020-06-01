import React, { useState } from 'react';
import CardList from './CardList';
import './Practices.css'

const Practices = () => {
  const [practicesMath, setPracticesMath] = useState([
      {practiceTopic: 'equation', name:'สมการ', description: ''},
      {practiceTopic: 'set', name:'เซต', description: ''},
      {practiceTopic: 'logic', name:'ตรรกศาสตร์', description: ''}, 
      {practiceTopic: 'real-number ', name:'จำนวนจริง', description: ''}, 
      {practiceTopic: 'number-theory ', name:'ทฤษฏีจำนวน', description: ''}, 
      {practiceTopic: 'matrix ', name:'เมทริกซ์', description: ''}, 
      {practiceTopic: 'relation-and-function', name:'ความสัมพันธ์และฟังก์ชัน', description: ''},
      {practiceTopic: 'geometry', name:'เรขาคณิตวิเคราะห์', description: ''}, 
    ]
  )

  const [practicesToefl, setPracticesToefl] = useState([
    {practiceTopic: 'reading', name: 'reading', description: ''},
    {practiceTopic: 'writing', name: 'writing', description: ''}
  ])
  return (
    <>
    <div className="subject-container">
      <div className="subject-topic">Mathematics</div>
      <CardList practices={practicesMath} />
    </div>  
    <div className="subject-container" style={{backgroundColor: 'white'}}>
      <div className="subject-topic">TOEFL</div>
      <CardList practices={practicesToefl} />
    </div>
    </>
  );
}

export default Practices;
