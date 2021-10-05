import React from 'react';
import { Container,Title, Btn, Group } from './styles/optForm';

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

OptForm.Btn = function OptFormBtn({children, ...restProps}){
    return <Btn {...restProps}>{children}</Btn>
}

OptForm.Group = function OptFormGroup ({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>   
}