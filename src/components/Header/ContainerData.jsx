import React from 'react'
import { ContentWrapper, DataText } from './Header.styled'



const ContainerData = () => {
  return (
    <ContentWrapper>
        <div>
            <h4>IP Address</h4>
            <DataText>data</DataText>
        </div>
        <div>
            <h4>Location</h4>
            <DataText>data</DataText>
        </div>
        <div>
            <h4>Timezone</h4>
            <DataText>data</DataText>
        </div>
        <div>
            <h4>ISP</h4>
            <DataText>data</DataText>
        </div>
    </ContentWrapper>
  )
}

export default ContainerData