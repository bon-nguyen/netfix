import styled, {keyframes} from "styled-components/macro";
import * as variables from '../../../Variables';

const maxHeight = keyframes`
  from {
    max-height: 0px;
  }

  to {
    max-height: 1200px;
  }
`;

export const Section = styled.section`
    padding: 70px 45px;
    border-bottom: 8px solid #222;
    position: relative;
    color: #fff;

    @media (max-width: ${variables.TB}){
        padding: 50px 0px;
    }
`

export const Container = styled.div`
    

`

export const Title = styled.h1`
    text-align: center;
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: .5rem;
    color: #fff;
    margin-top: 0;

    @media (max-width: ${variables.TB}){
        font-size: 2.5rem;
    }

    @media (max-width: ${variables.MB}){
        font-size: 1.625rem;
    }
`

export const Frame = styled.div`
    max-width: 815px;
    margin: 3em auto;

    @media (max-width: ${variables.MB}){
        margin: 2.25em auto;
    }
`

export const Item = styled.div`
    margin: 0 0 8px 0;
    box-sizing: border-box;

`

export const Header = styled.div`
    width: 100%;
    padding: .8em .8em .8em 1.2em;
    margin-bottom: 1px;
    font-weight: 400;
    position: relative;
    background: #303030;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${variables.TB}){
        font-size: 20px;
    }

    @media (max-width: ${variables.MB}){
        font-size: 18px;

        .open{
            width: 24px;
        }
        
        .close{
            width: 24px;
        }
    }

`

export const Body = styled.div`
    display: inline-block;
    font-size: 26px;
    background: #303030;
    overflow: hidden;
    display: none;

    span{
        padding: 1.2em;
        display: inline-block;
    }

    &.closed {
        transition: ${maxHeight} 0.25s cubic-bezier(0.5, 0, 0.1, 1);
        max-height: 0;
        display: block;
    }
    &.open {
        transition: ${maxHeight} 0.25s cubic-bezier(0.5, 0, 0.1, 1);
        max-height: 1200px;
        display: block;
    }
    @media (max-width: ${variables.TB}){
        font-size: 20px;
    }

    @media (max-width: ${variables.MB}){
        font-size: 18px;
    }
`