import styled from 'styled-components'



export const HeaderContainer = styled.header`
    // background image from src
    background-image: url(${require('../../pattern-bg.png')});
    background-size: cover;
    height: 36vh;
    position: relative;
    z-index: 500;
   
    `

export const Title = styled.h1`
    color: #fff;    
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 2rem 0;
    `



export const InputContainer = styled.div`
    /* background-color: #fff; */
    position: relative;
    width: 50vw;
    margin: 0 auto;
    /* border-radius: 5px; */
`

export const InputIP = styled.input`
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.8rem;
    padding-left: 1rem;
    font-size: 18px;
    color: #000;
    outline: none;
`

export const Button = styled.button`
    position: absolute;
    background-color: #000;
    cursor: pointer;
    border: none;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    
   
    right: -18px;
    height: 100%;
    width: 3rem;
    `

export const ContentWrapper = styled.div`
    width: 80vw;
    height: 200px;
    display: flex;
    flex-direction: wrap;
    justify-content: space-evenly;
    color :hsl(0, 0%, 59%);
    margin: 0 auto;
    margin-top: 3rem;
    background-color: #fff;
    border-radius: 0.8rem;
    `

export const DataText = styled.span`
    color: hsl(0, 0%, 17%);
    font-size: 1.8rem;
    font-weight: 700;
    `