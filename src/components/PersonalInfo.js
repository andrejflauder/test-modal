import React from 'react'

const PersonalInfo = ({ nextStep, prevStep, handleChange, values}) => {

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
        <label>Name
        <input 
            type="text" 
            placeholder="name" 
            value={values.name} 
            onChange={handleChange('name')}
        />
        </label>
        <br />
        <label>Phone Number
        <input 
            type="text" 
            placeholder="phone number" 
            value={values.username} 
            onChange={handleChange('phonenumber')}
        />
        </label>
        <br />
        <label>Email
        <input 
            type="text" 
            placeholder="email" 
            value={values.email} 
            onChange={handleChange('email')}
        />
        </label>
        <br />
        <label>Message
        <input 
            type="text" 
            placeholder="message" 
            value={values.message} 
            onChange={handleChange('message')}
        />
        </label>
        <br />
         <button onClick={ Previous }>Previous</button><button onClick={ Continue }>Next</button>

    </div>
  )
}

export default PersonalInfo