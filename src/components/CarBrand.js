import React from 'react'

const UserDetails = ({ nextStep, handleChange, values}) => {

const Continue = e => {
  e.preventDefault();
  nextStep();
}

  return (
    <div>
        <form>
            <label>Jeep
            <input type="radio" name="car-brand" value={values.carBrand} onChange={handleChange('jeep')} />
            </label>
            <br />
            <label>Volvo
            <input type="radio" name="car-brand" value={values.carBrand} onChange={handleChange('volvo')} />
            </label>
            <br />
            <label>Toyota
            <input type="radio" name="car-brand" value={values.carBrand}  onChange={handleChange('toyota')} />
            </label>        
        </form>
        <br />
        <button onClick={ Continue }>Next</button>
    </div>
  )
}

export default UserDetails