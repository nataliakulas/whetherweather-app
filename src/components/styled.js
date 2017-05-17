import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  // padding: 4em;
  background: papayawhip;
  text-align: center;
`;

export const Button = styled.button`
  background: white;
  color: palevioletred;

  width: 150px;
  height: 50px;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:focus{
  background: palevioletred;
  color: white;
  }
  
`;

export const Paragraph = styled.p`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;
