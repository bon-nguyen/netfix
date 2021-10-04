import React from 'react';
import {FooterMain, Container, List, Link, Title, Text, Break, Language, LanguageBefore, LanguageAfter } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <FooterMain {...restProps}>{children}</FooterMain>;
}
Footer.Container = function FooterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

Footer.Language = function FooterLanguage({ children, ...restProps }) {
    return <Language {...restProps}>{children}</Language>;
};

Footer.LanguageBefore = function FooterLanguageBefore({ children, ...restProps }) {
    return <LanguageBefore {...restProps}>{children}</LanguageBefore>;
};

Footer.LanguageAfter = function FooterLanguageAfter({ children, ...restProps }) {
    return <LanguageAfter {...restProps}>{children}</LanguageAfter>;
};