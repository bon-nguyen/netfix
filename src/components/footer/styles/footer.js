import styled from 'styled-components/macro';
import * as variables from '../../../Variables';


export const FooterMain = styled.footer`
    position: relative;
    padding: 70px 45px;

    @media (max-width: ${variables.MB}){
        padding: 50px 5%;
    }
`

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    li{
        margin-bottom: 1rem;
        width: 25%;
        display: inline-block;

        @media (max-width: ${variables.TB}){
            width: 33.333%;
        }

        @media (max-width: ${variables.MB}){
            width: 50%;
        }
    }
`;


export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    font-size: 13px;
`;

export const Title = styled.a`
    padding: 0;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    margin-top: 24px;
    font-size: 13px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Language = styled.div`
    margin-top: 20px;
    position: relative;
    display: inline-block;
    max-width: 160px;

    select{
        background-color: #000;
        color: #999;
        border: 1px solid #333;
        line-height: 1.7;
        padding: 12px 26px 12px 50px;
        text-indent: 0;
        border-radius: 2px;
        font-size: 16px;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;

        option{
            padding-right: 26px;
        }
    }
`

export const LanguageBefore = styled.div`
    position: absolute;
    top: 17px;
    left: 15px;
    pointer-events: none;
`
export const LanguageAfter = styled.div`
    position: absolute;
    top: 18px;
    right: 10px;
    pointer-events: none;
`