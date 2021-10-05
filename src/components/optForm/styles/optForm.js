import styled from "styled-components/macro";
import * as variables from '../../../Variables';
export const Container = styled.div`
    max-width: 950px;
    padding-top: .85rem;
    margin: 0 auto;
`
export const Title = styled.h3`
    margin: 0;
    text-align: center;
    padding: 0 5%;
    padding-bottom: 20px;
    font-size: 1.2rem;
    

    @media (max-width: ${variables.TB}){
        max-width: 450px;
        padding: 0 10%;
        font-size: 18px;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    @media (max-width: ${variables.MB}){
        max-width: 450px;
        
        font-size: 18px;
    }
`
export const Btn = styled.button`
    border: 0;
    font-size: 30px;
    cursor: pointer;
    background-color: #e50914;
    color: #fff;
    padding: 16px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    max-height: 70px;

    @media (max-width: ${variables.PC}){
        max-height: 60px;
    }

    @media (max-width: ${variables.TB}){
        max-height: 40px;
        font-size: 1rem;
        border-radius: 4px;

        svg{
            width: 16px;
        }
    }

    &:hover{
        background: #f40612;
        box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    }
`

export const Group = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${variables.TB}){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`