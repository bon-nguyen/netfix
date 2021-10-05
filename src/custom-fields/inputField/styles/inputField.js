
import styled, { css } from "styled-components/macro";
import * as variables from '../../../Variables';

// import {FormGroup,FormItem, FormError } from './styles/inputField';

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 1rem;
`

export const FormItem = styled.div`
    position: relative;
    margin-right: 2px;
    min-width: 480px;
    
    input{
        height: 70px;
        border: 0;
        width: 100%;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        padding: 10px 10px 0;
        box-sizing: border-box;

        @media (max-width: ${variables.PC}){
            height: 60px;
        }

        @media (max-width: ${variables.TB}){
            border-radius: 4px;
        }

        &:focus,
        &:active{
            outline: 0;
            background: #fff;
            &~label{
                top: 12px;
                font-size: 13px;
                font-weight: 700;
            }
        }
        &.hasText{
            border: 0;
            border-bottom: 2px solid #ffa00a;
            height: 58px;
            &~label{
                top: 12px;
                font-size: 13px;
                font-weight: 700;
            }
        }
        ${({ error }) =>
            error &&
            css`
                background: red;
                &:focus,
                &:active {
                    background: red;
                }
            `}
        }

    label{
        font-size: 1rem;
        position: absolute;
        left: 10px;
        transition: font .1s ease,top .1s ease,transform .1s ease;
        top: 50%;
        transform: translateY(-50%);
        color: #8c8c8c;
        pointer-events: none;
    }
`

export const FormError = styled.div`
    color: #ffa00a;
    text-align: left;
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 15px;
`