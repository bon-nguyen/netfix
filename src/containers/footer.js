import React from 'react';
import { Footer } from '../components';
import { MdOutlineLanguage } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
export function FooterContainer() {
  return (
    <Footer>

        <Footer.Container>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.List>
            <li><Footer.Link href="#">FAQ</Footer.Link></li>
            <li><Footer.Link href="#">Investor Relations</Footer.Link></li>
            <li><Footer.Link href="#">Privacy</Footer.Link></li>
            <li><Footer.Link href="#">Speed Test</Footer.Link></li>
            <li><Footer.Link href="#">Help Center</Footer.Link></li>
            <li><Footer.Link href="#">Jobs</Footer.Link></li>
            <li><Footer.Link href="#">Cookie Preferences</Footer.Link></li>
            <li><Footer.Link href="#">Legal Notices</Footer.Link></li>
            <li><Footer.Link href="#">Cookie Preferences</Footer.Link></li>
            <li><Footer.Link href="#">Account</Footer.Link></li>
            <li><Footer.Link href="#">Ways to Watch</Footer.Link></li>
            <li><Footer.Link href="#">Corporate Information</Footer.Link></li>
            <li><Footer.Link href="#">Only on Netflix</Footer.Link></li>
            <li><Footer.Link href="#">Media Center</Footer.Link></li>
            <li><Footer.Link href="#">Terms of Use</Footer.Link></li>
            <li><Footer.Link href="#">Contact Us</Footer.Link></li>
        </Footer.List>
        <Footer.Break />
        <Footer.Language>
            <Footer.LanguageBefore><MdOutlineLanguage size={20}/></Footer.LanguageBefore>
            <select>
                <option>English</option>
                <option>Tiếng Việt</option>
            </select>
            <Footer.LanguageAfter><AiFillCaretDown size={18}/></Footer.LanguageAfter>
        </Footer.Language>
        <Footer.Break />
        <Footer.Text>Netflix VietNam</Footer.Text>
      </Footer.Container>
    </Footer>
  );
}