import React from 'react'
import Fix from './Fix'

const Service = ({ nextStep, prevStep, handleChange, values}) => {

const Continue = e => {
  e.preventDefault();
  nextStep();
}

const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
        
            <Fix />
            
            <button onClick={ Previous }>Previous</button><button onClick={ Continue }>Next</button>

    </div>
  )



}


export default Service