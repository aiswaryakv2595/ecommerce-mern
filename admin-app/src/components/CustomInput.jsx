import React from 'react'

const CustomInput = ({type,name,label,i_id,i_class,val,onCh,onBl}) => {
  return (
    <div className="form-floating mt-3">
    <input  type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        name={name}
        placeholder={label}
        value={val} 
        onChange={onCh}
        onBlur={onCh}/>
    <label htmlFor={label}>{label}</label>
  </div>
  )
}

export default CustomInput