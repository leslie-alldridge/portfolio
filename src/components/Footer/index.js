import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const URLS = {
  LinkedIn: 'https://www.linkedin.com/in/lesliealldridge/',
  GitHub: 'https://github.com/leslie-alldridge',
  Email: 'mailto:leslie.alldridge@gmail.com',
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sitemap</FooterLinkTitle>
              <FooterLink to='/'>About</FooterLink>
              <FooterLink to='/signin'>Experience</FooterLink>
              <FooterLink to='/signin'>Contact</FooterLink>
              <FooterLink to='/signin'>CV</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink href={URLS.Email}>Email</FooterLink>
              <FooterLink href={URLS.LinkedIn}>LinkedIn</FooterLink>
              <FooterLink href={URLS.GitHub}>GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Leslie Alldridge © {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href={URLS.Email} aria-label='GMail'>
                <FaGoogle />
              </SocialIconLink>
              <SocialIconLink
                href={URLS.LinkedIn}
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href={URLS.GitHub}
                target='_blank'
                aria-label='GitHub'
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
