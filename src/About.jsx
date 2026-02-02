import React from 'react'
import './About.css'
import { useState } from 'react'

export default function About() {

  const [count, setCount]=useState(0);


  function click(){
    alert("hello nilesh")
  }
  return (
    <div className='body'>
      <button  className='btn' onClick={click}>Submit</button>
      <br/> 
      <p className='count'>{count}</p>
      <button className='in' onClick={()=>setCount(count+10)}>Increament</button>
      
    </div>
  )
}
