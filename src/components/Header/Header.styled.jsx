import styled from 'styled-components'



export const HeaderContainer = styled.header`
    // background image from src
    background-image: url(${require('../../pattern-bg.png')});
    background-size: cover;
    height: 36vh;
    position: relative;
    z-index: 500;
   
    @media (max-width: 1035px) {
        height: 60vh;
    }
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
    width: 91%;
    height: 3rem;
    margin: 0 auto;
    border: none;
    border-radius: 0.8rem;
    padding-left: 1rem;
    font-size: 18px;
    color: #000;
    outline: none;

    @media (max-width: 1035px) {
       width: 85%;
    }
`

export const Button = styled.button`
    position: absolute;
    background-color: #000;
    cursor: pointer;
    border: none;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    
    top:0;
    right: 28px;
    height: 100%;
    width: 3rem;

    @media (max-width: 1035px) {
        right: 15px
    }
    @media (max-width: 720px) {
        right: 0px
    }
    `

export const ContainertWrapper = styled.div`
    width: 80vw;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color :hsl(0, 0%, 59%);
    margin: 0 auto;
    margin-top: 3.3rem;
    background-color: #fff;
    border-radius: 0.8rem;
    
    @media (max-width: 1035px) {
        width: 50vw;
        height: auto;
        padding: 1rem 0;
        /* margin-bottom: 3.3rem; */
    }
   
    `

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: space-evenly;
    
    & > div {
        width: 33%;
        border-right: 1px solid hsl(0, 0%, 59%);
        padding: 0 2rem;
        text-align: center;
       }
    & > div:last-child {
        border-right: none;
    }

    @media (max-width: 1035px) {
        flex-direction: column;
        & > div {
            width: 100%;
            border-right: none;
            /* border-bottom: 1px solid hsl(0, 0%, 59%); */
            padding: 1rem 0;
        }
        & > div:last-child {
            border-bottom: none;
        }
    }

`

export const DataText = styled.span`
    color: hsl(0, 0%, 17%);
    font-size: 1.5rem;
    font-weight: 500;
    `

export const TitleData = styled.h5`
    margin-top:0;

    `