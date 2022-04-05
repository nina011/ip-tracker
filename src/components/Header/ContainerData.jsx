import React, { useContext } from 'react'
import { ContainertWrapper, 
         ContainerInfo, 
         DataText,
         TitleData
         } from './Header.styled'
import ApiContext from "../../context/ApiContext";


const ContainerData = () => {

    const { data } = useContext(ApiContext);

  return (
    <ContainertWrapper>
        <ContainerInfo>
        <div>
            <TitleData>IP ADRESS</TitleData>
            <DataText>{data.ip ? data.ip : '-'}</DataText>
        </div>
        <div>
            <TitleData>LOCATION</TitleData>
            <DataText>{data.country ? (data.city+', '+data.country) : '-'}</DataText>
        </div>
        <div>
            <TitleData>TIMEZONE</TitleData>
            <DataText>{ data.timezone ? 'UTC' + data.timezone : '-'}</DataText>
        </div>
        <div>
            <TitleData>ISP</TitleData>
            <DataText>{data.isp ? data.isp : '-'}</DataText>
        </div>
        </ContainerInfo>
    </ContainertWrapper>
  )
}

export default ContainerData