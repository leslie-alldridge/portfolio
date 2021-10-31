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
  FooterLinkExternal,
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
              <FooterLink to='about'>About</FooterLink>
              <FooterLink to='experience'>Experience</FooterLink>
              <FooterLink to='contact'>Contact</FooterLink>
              <FooterLink to='services'>Cloud</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLinkExternal to={{ pathname: URLS.Email }} target='_blank'>
                Email
              </FooterLinkExternal>
              <FooterLinkExternal
                to={{ pathname: URLS.LinkedIn }}
                target='_blank'
              >
                LinkedIn
              </FooterLinkExternal>
              <FooterLinkExternal
                to={{ pathname: URLS.GitHub }}
                target='_blank'
              >
                GitHub
              </FooterLinkExternal>
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
