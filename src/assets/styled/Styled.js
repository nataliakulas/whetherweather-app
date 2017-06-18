import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 10px auto;
  
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    font-size: 3rem;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    font-size: 4rem;
    padding-top: 30px;
  `}
`;

export const Subtitle = styled.h2`
  font-size: 2.0rem;
  margin: 10px auto;
  
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    font-size: 2.5rem;
    padding-top: 20px;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    font-size: 3rem;
  `} 
`;

export const Wrapper = styled.section`
  padding: 10px;
  text-align: center;
`;

export const Box = styled.div`  
  height: 300px;
  
  margin: 0 auto;
    
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    height: 440px;
    padding-top: 20px;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    height: 550px;
    width: 550px;
    
    padding-top: 30px;
  `} 
`;

export const Row = styled.div`
  height: 90px;
  text-align: center;
  
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    height: 90px;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    height: 100px;
  `} 
`;

export const Button = styled.button`
  background: #a2d4de;
  color: #ffffff;

  width: 90px;
  height: 90px;

  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  
  margin: 5px;
  border: 1px solid  #a2d4de;
  border-radius: 50%;
  
  outline: none;
  
  &:hover,
  &:focus {
    border: 1px solid #9f77aa;
  }
  
  &:focus {
    background-color: #9f77aa;
  }
  
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    width: 120px;
    height: 120px;
    
    font-size: 1.2rem;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    width: 150px;
    height: 150px;
    
    font-size: 1.4rem;
    
    margin: 7px;
  `}  
`;

export const Paragraph = styled.p`
  font-size: ${props => props.small ? 1.2 : 1.4}rem;
  margin-bottom: 0;
  
  ${({theme}) => breakpoint('sm', theme.breakpoints)`
    font-size: ${props => props.small ? 1.4 : 1.6}rem;
  `}
  
  ${({theme}) => breakpoint('md', theme.breakpoints)`
    font-size: ${props => props.small ? 1.6 : 1.8}rem;
  `}
`;
