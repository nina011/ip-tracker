import React from 'react'
import {
    InputContainer,
    InputIP,
    Button
}
from './Header.styled'
import icon from '../../icon-arrow.svg'


const Input = () => {
  return (
    <InputContainer>
        <InputIP 
            type="text" 
            placeholder="Search for any IP adress" 
            onChange={(e) => {
              console.log(e.target.value)
            }}
            />
        <Button
            type='submit'>
            <img src={icon} alt="icon" />
        </Button>
    </InputContainer>
  )
}

export default Input