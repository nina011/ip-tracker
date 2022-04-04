import React from 'react'
import { 
  HeaderContainer,
  Title,
} from './Header.styled'
import  Input  from './Input'
import ContainerData from './ContainerData'

const Header = () => {
  return (
    <HeaderContainer>
      <Title>IP Address Tracker</Title>
      <Input />
      <ContainerData />
    </HeaderContainer>
  )
}

export default Header
