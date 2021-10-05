import React, { createContext, useContext, useState } from "react";
import {Section, Container, Title, Frame, Item, Body, Header} from './styles/accordion';
import {HiOutlinePlus} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
      <Section>
        <Container {...restProps}>{children}</Container>
      </Section>
    );
  }

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const {toggleShow } = useContext(ToggleContext);
    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
            {children}
        </Body>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow(!toggleShow)}  {...restProps} >
            {children}
            {toggleShow ? (
                <AiOutlineClose className="open" size={35} style={{ fill: '#fff' }} />
            ) : (
                <HiOutlinePlus className="close" size={35} style={{ fill: '#fff' }} />
            )}
        </Header>
    )
};
