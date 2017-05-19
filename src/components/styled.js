import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.7em;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
`;

export const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
`;

export const Box = styled.div`  
  width: 760px;
  display: inline-block;
`;

export const Row = styled.div`
    height: 100px;
    text-align: center;
`;

export const Button = styled.button`
  background: #a2d4de;
  color: #ffffff;

  width: 180px;
  height: 180px;

  font-size: 1em;
  font-weight: 700;
  letter-spacing: 3px;
  
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid  #a2d4de;
  border-radius: 50%;
  
  outline: none;
  
  &:hover, 
  &:focus {
  border: 1px solid #9f77aa;
  }
  
  &:focus {
  background: #9f77aa;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
`;
