import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#66fcf1' : '#1F2833')};
  white-space: nowrap;
  padding: ${({ bigBtn }) => (bigBtn ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#1F2833' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#66fcf1')};
  }
`;
